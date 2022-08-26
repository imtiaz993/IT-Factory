import React from "react";
import Mailchimp from "../components/Mailchimp";
import LandingAU from "../components/LandingAU";
import Ourteam from "../components/Ourteam";
import Screendetails from "../components/Screendetails";
import Testimonilas from "../components/Testimonilas";
/* eslint-disable @next/next/no-img-element */

import { useRouter } from "next/router";
import delve from "dlv";
import { getStrapiMedia, baseURL } from "../util/common";
import {  headerAPI, footerAPI} from "./api/api";
import Layout from "../layouts/Layout";

function About({ AboutPage, Team,headerLinks,footerLinks, Testimonials, Subscribe }) {
  const about = AboutPage.data[0].attributes.AboutUs;
  const team = Team.data[0].attributes;
  const testimonial = Testimonials.data[0].attributes;
  const subscribe = Subscribe.data[0].attributes;
  return (
    <>
     <Layout
      bgColor="bg-white"
      bgColor1="bg-lightGrey"
      bgColor2="bg-lightGrey"
       headerLinks={headerLinks}
       footerLinks={footerLinks}
    >
      <Screendetails
        screenName={about[0].ScreenDetails.sectionName}
        text={about[0].ScreenDetails.description}
      />
      <div className="max-w-screen-2xl mx-auto ">
        <LandingAU
          className="flex-row-reverse"
          desc={about[1].description}
          title={about[1].sectionTitle}
          buttonName={about[1].buttonName}
          imgsrc={getStrapiMedia(delve(about[1].image.data.attributes, "url"))}
        />
        <Ourteam team={team} />
        <Testimonilas
          ClassName="md:flex md:flex-wrap md:flex-col md:justify-center md:items-center lg:flex-row lg:justify-evenly"
          MDwidth="md:w-4/6 md:flex"
          MDwidth1="md:w-[36px] md:h-[7px]"
          MDText="md:text-[24px]"
          MDText1="md:text-[33px]"
          PadingT="md:pt-4"
          MDPading="md:pb-20"
          lgPading="lg:pb-0"
          testimonial={testimonial}
        />
        <Mailchimp
          contactTitle={subscribe.sectionTitle}
          contactDesc={subscribe.description}
          button1Text={subscribe.button[0].name}
          button2Text={subscribe.button[1].name}
          noPading="md:pt-8"
        />
      </div>
      </Layout>
    </>
  );
}

export default About;
export async function getStaticProps() {
  const res = await fetch(
    delve(
      {
        data: `${baseURL}/api/about-pages?populate=AboutUs.ScreenDetails,AboutUs.image&authorization=Barear ${process.env.token}`,
      },
      "data"
    )
  );
  const AboutPage = await res.json();

  const res2 = await fetch(
    delve(
      {
        data: `${baseURL}/api/team-details?populate=teamMembers.image&authorization=Barear ${process.env.token}`,
      },
      "data"
    )
  );
  const Team = await res2.json();
  const res3 = await fetch(
    delve(
      {
        data: `${baseURL}/api/testimonial-details?populate=clientTestimonials.clientImage,clientTestimonials.ratingImage&authorization=Barear ${process.env.token}`,
      },
      "data"
    )
  );
  const Testimonials = await res3.json();
  const res4 = await fetch(
    delve(
      {
        data: `${baseURL}/api/subscribe-details?populate=*&authorization=Barear ${process.env.token}`,
      },
      "data"
    )
  );
  const Subscribe = await res4.json();
  const headerLinks= await headerAPI();
  const footerLinks= await footerAPI()
  return { props: { AboutPage, Team,headerLinks,footerLinks, Testimonials, Subscribe } };
}

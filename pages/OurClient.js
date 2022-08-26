/* eslint-disable @next/next/no-img-element */

import React from "react";
import Mailchimp from "../components/Mailchimp";
import LandingAU from "../components/LandingAU";
import Screendetails from "../components/Screendetails";
import Testimonilas from "../components/Testimonilas";
import delve from "dlv";
import { getStrapiMedia, baseURL } from "../util/common";
import {  headerAPI, footerAPI} from "./api/api";
import Layout from "../layouts/Layout";
function OurClient({ ClientPage, Testimonials, Subscribe,headerLinks,footerLinks }) {
  const client = ClientPage.data[0].attributes.ClientPage;
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
        screenName={client[0].screenName}
        text={client[0].description}
      />
      <div className="max-w-screen-2xl mx-auto ">
        <LandingAU
          desc={client[1].description}
          title={client[1].sectionTitle}
          buttonName={client[1].buttonName}
          imgsrc={getStrapiMedia(delve(client[1].image.data.attributes, "url"))}
        />

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

export default OurClient;
export async function getStaticProps() {
  const res = await fetch(
    delve(
      {
        data: `${baseURL}/api/client-pages?populate=ClientPage.image&authorization=Barear ${process.env.token}`,
      },
      "data"
    )
  );
  const ClientPage = await res.json();

  const res2 = await fetch(
    delve(
      {
        data: `${baseURL}/api/testimonial-details?populate=clientTestimonials.clientImage,clientTestimonials.ratingImage&authorization=Barear ${process.env.token}`,
      },
      "data"
    )
  );
  const Testimonials = await res2.json();
  const res3 = await fetch(
    delve(
      {
        data: `${baseURL}/api/subscribe-details?populate=*&authorization=Barear ${process.env.token}`,
      },
      "data"
    )
  );
  const Subscribe = await res3.json();
  const headerLinks= await headerAPI();
  const footerLinks= await footerAPI()
  return { props: { ClientPage, Testimonials, Subscribe,headerLinks,footerLinks  } };
}

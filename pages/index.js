/* eslint-disable @next/next/no-img-element */

import Mailchimp from "../components/Mailchimp";
import F1Landing from "../components/F1Landing";
import FLanding from "../components/FLanding";
import Landing from "../components/Landing";
import Services from "../components/Services";
import Sponsership from "../components/Sponsership";
import Testimonilas from "../components/Testimonilas";
import delve from "dlv";
import Layout from "../layouts/Layout";
import { getStrapiMedia, baseURL } from "../util/common";
import {  headerAPI, footerAPI} from "./api/api";

export default function Index({ HomePage, Service,headerLinks,footerLinks, Testimonials, Subscribe }) {
  const subscribe = Subscribe.data[0].attributes;
  const testimonial = Testimonials.data[0].attributes;
  const home = HomePage.data[0].attributes.Home;


  return (
    <Layout
      bgColor="bg-white"
      bgColor1="bg-lightGrey"
      bgColor2="bg-lightGrey"
       headerLinks={headerLinks}
       footerLinks={footerLinks}
    >
    <div className="bg-lightGrey">
      <div className="max-w-screen-2xl mx-auto">
        <Landing
          title={home[0].company}
          title2={home[0].companyType}
          title3={home[0].description}
          buttonName={home[0].button}
          imgsrc={getStrapiMedia(
            delve(home[0].heroImage.data.attributes, "url")
          )}
        />
        <Sponsership images={home[1].partnerImage} />
        <Services MdgridCol="md:grid-cols-3" Service={Service} />
        {home[2] &&
          home[2].About.map((item, index) =>
            index % 2 === 0 ? (
              <FLanding
                key={index}
                rowR="flex-row-reverse"
                colR="flex-col-reverse"
                landTitle={item.sectionName}
                landCapTitle={item.sectionTitle}
                desc={item.sectionDetails}
                linkName={item.linkName}
                imgsrc={getStrapiMedia(
                  delve(item.image.data.attributes, "url")
                )}
              />
            ) : (
              <F1Landing
                key={index}
                rowR="flex-row"
                colR="flex-col-reverse"
                landTitle={item.sectionName}
                landCapTitle={item.sectionTitle}
                linkName={item.linkName}
                desc={item.sectionDetails}
                imgsrc={getStrapiMedia(
                  delve(item.image.data.attributes, "url")
                )}
              />
            )
          )}
        <Testimonilas
          MDwidth="md:w-2/5 md:flex"
          MDwidth1="md:w-[36px] md:h-[7px]"
          MDText="md:text-[24px]"
          MDText1="md:text-[33px]"
          PadingT="md:pt-0"
          testimonial={testimonial}
        />
        <Mailchimp
          contactTitle={subscribe.sectionTitle}
          contactDesc={subscribe.description}
          button1Text={subscribe.button[0].name}
          button2Text={subscribe.button[1].name}
        />
      </div>
    </div>
    </Layout>
  );
}
export async function getStaticProps() {
  const res = await fetch(
    delve(
      {
        data: `${baseURL}/api/homes?populate=Home.heroImage,Home.partnerImage.partnerImage,Home.About.image&authorization=Barear ${process.env.token}`,
      },
      "data"
    )
  );

  const HomePage = await res.json();
  const res1 = await fetch(
    delve(
      {
        data: `${baseURL}/api/service-details?populate=serviceCard.cardImage&authorization=Barear ${process.env.token}`,
      },
      "data"
    )
  );
  const Service = await res1.json();
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
  return { props: { HomePage, Service,headerLinks,footerLinks, Subscribe, Testimonials } };
}


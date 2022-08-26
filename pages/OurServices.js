
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Mailchimp from "../components/Mailchimp";
import Screendetails from "../components/Screendetails";
import Services from "../components/Services";
import delve from "dlv";
import ReactMarkdown from "react-markdown";
import { baseURL } from "../util/common";
import Layout from "../layouts/Layout";
import {  headerAPI, footerAPI} from "./api/api";
function OurServices({ ServicePage, Service, Subscribe,headerLinks,footerLinks }) {
  const subscribe = Subscribe.data[0].attributes;
  const servicePage = ServicePage.data[0].attributes;

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
        screenName={servicePage.plan[1].screenName}
        text={servicePage.plan[1].description}
      />

      <div className="max-w-screen-2xl mx-auto ">
        <Services
          MdgridCol="md:grid-cols-2"
          mdWidth="md:w-4/5"
          Service={Service}
        />
        <div className=" my-14  md:my-8 lg:my-20">
          <h1 className="flex justify-center items-center  text-Flandingtext1 pt-10 pb-10 OurPlanheading">
            {servicePage.sectionTitle}
          </h1>
          <p className="w-11/12 mx-auto flex justify-center items-center  text-center text-black lg:w-2/5 md:w-4/6 md:flex md:justify-center md:items-center md:mx-auto md:text-center lg:flex lg:justify-center lg:items-center lg:text-center lg:mx-auto pb-10 OurPlanpara">
            {servicePage.sectionDetails}
          </p>
        </div>
        <div className="w-3/5 md:w-11/12 lg:w-4/6 mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-12">
          {servicePage &&
            servicePage.plan[0].PlanDescriptions.map((item, index) => (
              <div
                key={index}
                className={`shadow-xl py-8 px-12  rounded-[30px] bg-white ${
                  index == 1 ? "bg-BackgroundAUcolor" : "text-black"
                }`}
              >
                <h1 className="text-center    mb-4 text-Flandingtext1 OurPlancardboldheading">
                  {item.planTitle}
                </h1>
                <p
                  className={` OurPlancardheading  text-center mb-4  ${
                    index == 1 ? "text-white" : "text-black"
                  }`}
                >
                  {item.planDetails}
                </p>
                <div
                  className={` Ourplancardpara ${
                    index == 1 ? "text-PriceFillColor " : "text-black font-lato"
                  }`}
                >
                  <ReactMarkdown>{item.planDesc}</ReactMarkdown>
                </div>

                <h1 className="text-center   my-4 text-Flandingtext1 Ourplancardprice">
                  {item.price}
                </h1>
                <div className="flex justify-center mt-8 mb-2">
                  <button
                    className={`${
                      index == 1
                        ? "bg-white text-black"
                        : "bg-linearGrad text-white"
                    }  mx-auto px-4 rounded-[30px] Ourplancardbtn`}
                  >
                    {item.buttonName}
                  </button>
                </div>
              </div>
            ))}
        </div>
        <Mailchimp
          contactTitle={subscribe.sectionTitle}
          contactDesc={subscribe.description}
          button1Text={subscribe.button[0].name}
          button2Text={subscribe.button[1].name}
        />
      </div>
      </Layout>
    </>
  );
}

export default OurServices;
export async function getStaticProps() {
  const res = await fetch(
    delve(
      {
        data: `${baseURL}/api/sevices?populate=plan.PlanDescriptions&authorization=Barear ${process.env.token}`,
      },
      "data"
    )
  );
  const ServicePage = await res.json();
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
        data: `${baseURL}/api/subscribe-details?populate=*&authorization=Barear ${process.env.token}`,
      },
      "data"
    )
  );
  const Subscribe = await res2.json();
  const headerLinks= await headerAPI();
  const footerLinks= await footerAPI()

  return { props: { ServicePage, Service, Subscribe,headerLinks,footerLinks } };
}

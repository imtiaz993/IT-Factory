/* eslint-disable @next/next/no-img-element */

import React from "react";
import Screendetails from "../components/Screendetails";
import Mailchimp from "../components/Mailchimp";
import delve from "dlv";
import ReactMarkdown from "react-markdown";
import { getStrapiMedia, baseURL } from "../util/common";
import ContactForm from "../components/ContactForm";
import {  headerAPI, footerAPI} from "./api/api";
import Layout from "../layouts/Layout";
const Contact = ({ ContactPage,headerLinks,footerLinks, Subscribe }) => {
  const firstSection = ContactPage.data[0].attributes.ContactForm[1];
  const formDetailSections =
    ContactPage.data[0].attributes.ContactForm[0].contactDesc;
  const contactDetails = ContactPage.data[0].attributes.ContactDetails[0];
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
        screenName={firstSection.screenName}
        text={firstSection.description}
      />

      <div className="max-w-screen-2xl mx-auto ">
        <div className="w-4/5 md:w-1/2 lg:w-3/4 mx-auto mt-16  lg:mt-28 md:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-14  items-center">
          <ContactForm />

          <div className="">
            <p className="  text-textGreish  mx-auto md:w-full  lg:text-left pb-2 mt-4 md:mt-0">
              <span className="bg-linearGrad  rounded-full md:w-[36px] md:h-[7px] w-[27px] h-[6px] lg:w-[50px] lg:h-[10px] flex p-1  mt-2 mb-1"></span>
            </p>

            <p className=" text-Flandingtext1  mx-auto md:w-full  text-left  lg:text-left lg:pb-8 lg:p lg:t-4  md:text-left pb-8 md:top-4 Contactformboldheading">
              {formDetailSections.sectionTitle}
            </p>
            <div className="w-auto text-black text-left lg:text-left pb-8 md:text-left Contactformpara">
              <ReactMarkdown>{formDetailSections.sectionDetails}</ReactMarkdown>
            </div>
            <div>
              <ReactMarkdown>{formDetailSections.timings}</ReactMarkdown>
            </div>
          </div>
        </div>
        <div className="mt-20 my-16  md:my-8 lg:my-20 ">
          <h1 className=" flex justify-center items-center  text-Flandingtext1 pt-10 pb-5 OurContactdetails">
            {contactDetails.sectionTitle}
          </h1>
          <p className=" w-11/12 mx-auto flex justify-center items-center text-center  text-black lg:w-2/5 md:w-4/6 md:flex md:justify-center md:items-center md:mx-auto md:text-center lg:flex lg:justify-center lg:items-center lg:text-center lg:mx-auto pb-10 OurContactdetailspara">
            {contactDetails.sectionDetails}
          </p>
        </div>
        <div className="w-11/12 lg:w-3/4 mx-auto grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-14 text-center">
          {contactDetails &&
            contactDetails.contactOptions.map((item, index) => (
              <div key={index}>
                <div className="w-20 h-20 mx-auto bg-lightGrey rounded-full flex justify-center">
                  <img
                    src={getStrapiMedia(
                      delve(item.image.data.attributes, "url")
                    )}
                    className="object-contain p-5 "
                  alt="elc"/>
                </div>
                <h1 className="mt-1 mb-2 OurContactcardheading">
                  {item.title}
                </h1>
                <p className=" w-3/5 md:w-3/4 mx-auto OurContactcardpara">
                  {item.description}
                </p>
              </div>
            ))}
        </div>
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
};

export default Contact;
export async function getStaticProps() {
  const res = await fetch(
    delve(
      {
        data: `${baseURL}/api/contact-pages?populate=ContactForm.contactDesc,ContactDetails.contactOptions,ContactDetails.contactOptions.image&authorization=Barear ${process.env.token}`,
      },
      "data"
    )
  );
  const ContactPage = await res.json();
  const res1 = await fetch(
    delve(
      {
        data: `${baseURL}/api/subscribe-details?populate=*&authorization=Barear ${process.env.token}`,
      },
      "data"
    )
  );
  const Subscribe = await res1.json();
  const headerLinks= await headerAPI();
  const footerLinks= await footerAPI()
  return { props: { ContactPage, Subscribe,headerLinks,footerLinks } };
}

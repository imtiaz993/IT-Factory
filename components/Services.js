/* eslint-disable @next/next/no-img-element */

import React from "react";
import Cards from "./Cards";
import delve from "dlv";
import { link } from "../styles/Typography";
import { getStrapiMedia } from "../util/common";
function Services({ mdWidth, MdgridCol, Service }) {
  const service = Service.data[0].attributes;
  return (
    <div
      className={`w-11/12 mx-auto lg:w-3/4 mb-24 lg:mx-auto ${
        mdWidth ? mdWidth : "md:w-11/12"
      } md:mx-auto`}
    >
      <div className="md:pt-14 pt-14">
        <p
          className={` text-textDarkSmall  w-3/4 mx-auto md:w-full  lg:text-left lg:pb-4 md:text-left md:pb-4  ServiceheadingMobile ServiceheadingTablet ServiceheadingDesktop`}
        >
          {service.sectionName}
          <span className="bg-linearGrad rounded-full w-[27px] h-[6px]  md:w-[36px] md:h-[7px] lg:w-[50px] lg:h-[10px] flex p-1 my-[10.32px]">
            {" "}
          </span>
        </p>
        <p
          className={`text-textDark  w-3/4 mx-auto md:w-full   lg:text-left lg:pb-10 md:text-left md: pb-10  ServiceboldheadingMobile ServiceboldheadingTablet ServiceboldheadingDesktop` }
        >
          {service.sectionTitle}
        </p>
      </div>
      <div
        className={`w-3/4 mx-auto md:w-auto grid grid-cols-1 ${MdgridCol} lg:grid-cols-3 gap-10 mt-8`}
      >
        {service &&
          service.serviceCard.map((item, index) => (
            <Cards
              key={index}
              imgColor={`${index == 1 ? "bg-BackgroundAUcolor" : "bg-white"}`}
              cardtitlecolor={`${index == 1 ? "text-white" : "text-cardcolor"}`}
              cardmsgcolor={`${
                index == 1 ? "text-white" : "text-cardtextcolor"
              }`}
              imgsrc={getStrapiMedia(
                delve(item.cardImage.data.attributes, "url")
              )}
              cardtitle={item.cardTitle}
              cardmsg={item.cardDetails}
            />
          ))}
      </div>
    </div>
  );
}

export default Services;

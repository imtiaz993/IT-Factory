/* eslint-disable @next/next/no-img-element */

import React from "react";
import TestimonilasComponent from "./TestimonilasComponent";
import { getStrapiMedia } from "../util/common";
import delve from "dlv";
const Testimonilas = (props) => {
  return (
    <div className="">
      <div className="w-3/4 mx-auto lg:w-3/4 lg:mx-auto md:w-11/12 md:mx-auto  lg:pt-20  md:pt-24 pt-5 ">
        <p
          className={` w-auto text-Flandingtext text-left tracking-wide lg:text-left lg:pb-4 ${props.MDText} md:text-left md:pb-4 ClientheadingMobile ClientheadingTablet ClientheadingDesktop`}
        >
          {props.testimonial.sectionName}
          <span
            className={`bg-linearGrad  rounded-full w-[27px] h-[6px] lg:w-[50px] lg:h-[10px] ${props.MDwidth1} flex p-1 my-6`}
          ></span>
        </p>
        <p
          className={`text-Flandingtext1  text-left  lg:text-left lg:pb-10 ${props.MDText1} md:text-left pb-8 TestimonialsheadingMobile  TestimonialsheadingDesktop`}
        >
          {props.testimonial.sectionTitle}
        </p>
      </div>
      <div
        className={` w-11/12 mx-auto lg:w-3/4 lg:mx-auto md:w-11/12 md:mx-auto  flex justify-evenly flex-wrap ${props.ClassName} `}
      >
        {props.testimonial &&
          props.testimonial.clientTestimonials.map((item, index) => (
            <TestimonilasComponent
              key={index}
              MDwidth={props.MDwidth}
              MDPading={props.MDPading}
              lgPading={props.lgPading}
              userImg={getStrapiMedia(
                delve(item.clientImage.data.attributes, "url")
              )}
              review={item.description}
              userName={item.clientName}
              ratingImg={getStrapiMedia(
                delve(item.ratingImage.data.attributes, "url")
              )}
              ratingNo={item.rating}
            />
          ))}
      </div>
    </div>
  );
};

export default Testimonilas;

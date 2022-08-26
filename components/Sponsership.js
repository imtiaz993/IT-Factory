/* eslint-disable @next/next/no-img-element */

import React from "react";

import delve from "dlv";
import { getStrapiMedia } from "../util/common";
function Sponsership({ images }) {
  return (
    <div className="w-3/4 mx-auto  lg:w-3/4 lg:mx-auto md:w-11/12 md:mx-auto">
      <div className="">
        <marquee>
          <div className="flex  justify-between justify-items-center align-center lg:mr-24 md:mr-24 lg:pt-10 lg:pb-20 ">
            {images &&
              images.map((item, index) => (
                <img
                  key={index}
                  className="object-contain md:w-1/6 md:h-1/6 w-[61px] h-[20px] mr-8 "
                  src={getStrapiMedia(
                    delve(item.partnerImage.data.attributes, "url")
                  )}
               alt='sponsers' ></img>
              ))}
          </div>
        </marquee>
      </div>
    </div>
  );
}

export default Sponsership;

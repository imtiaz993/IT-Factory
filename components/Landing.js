/* eslint-disable @next/next/no-img-element */

import React from "react";
import Image from "next/image";
function Landing(props) {
  return (
    <div className="w-11/12 mx-auto lg:w-3/4 lg:mx-auto md:w-11/12 md:mx-auto">
      <div
        className={` lg:flex ${props.className} md:flex md:${props.className}`}
      >
        <div className="flex flex-col justify-center  md:flex md:flex-row  lg:w-2/3 md:w-1/2 pb-16 md:pb-0 ">
          <div className=" mt-20">
            <p
              className={`w-auto  text-textDark  md:text-left pb-[] lg:pb-0 md:pb-0 whitespace-nowrap text-center lg:text-left heroheadingMobile heroheadingTablet heroheadingDesktop`}
            >
              {props.title}
            </p>

            <p
              className={` w-auto   text-darkBlue  pb-[17.82px] whitespace-nowrap text-center  lg:text-left md:text-left md:pb-5  heroheading1Mobile heroheading1Tablet heroheading1Desktop` }
            >
              {props.title2}
            </p>
            <p
              className={` w-auto  text-textDarkSmall text-center lg:text-left lg:pb-11 md:text-left  md:pb-5 heroparaMobile heroparaTablet heroparaDesktop`}
            >
              {props.title3}
            </p>
            <div className="flex justify-center pt-5 lg:justify-start lg:pt-0 md:justify-start md:pt-0 ">
              <button 
                className={`bg-linearGrad text-white font-lato font-semibold w-61 h-13 md:w-[140px] md:h-[50px] lg:w-[200px] lg:h-[60px] md:py-0 py-2 px-4 rounded-[30px] herobtnMobile herobtnTablet herobtnDesktop`}
              >
                {props.buttonName}
              </button>
            </div>
          </div>
        </div>
        <div className="hidden md:flex lg:flex lg:flex-col justify-center items-center md:flex-row lg:w-2/3 md:w-1/2 pt-10 pb-14  md:pb-[153px] ">
          <img className="object-contain md:w-[473px] md:h-[472px] lg:w-[667px] lg:h-[666px]"loader={() => props.imgsrc} src={props.imgsrc} alt='heroimage'  />
        </div>
      </div>
    </div>
  );
}

export default Landing;

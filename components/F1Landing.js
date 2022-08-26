/* eslint-disable @next/next/no-img-element */

import React from "react";
import ReactMarkdown from "react-markdown";
function F1Landing(props) {
  return (
    <div className="lg:w-4/5 lg:mr-6 lg:ml-auto  w-11/12 mt-12  mx-auto">
      <div className={` flex ${props.colR}  md:${props.rowR} `}>
        <div className="md:mr-2 lg:mr-8 flex flex-col justify-center   lg:w-2/3 md:w-1/2  md:pt-20 ">
          <div className="">
           
            <p className="text-textGreish w-3/4 mx-auto md:w-full lg:text-left pb-2 mt-4 md:mt-0  ">
              {props.landTitle}
              <span className="bg-linearGrad  rounded-full w-[27px] h-[6px] md:w-[36px] md:h-[7px] lg:w-[50px] lg:h-[10px] flex p-1  mt-20 mb-4"></span>
            </p>

            <p className="text-Flandingtext1  w-3/4 mx-auto md:w-full text-left  lg:text-left lg:pb-8 lg:p lg:t-4  md:text-left pb-8 md:top-4 AboutboldheadingMobile AboutboldheadingTablet AboutboldheadingDesktop">
              {props.landCapTitle}
            </p>
            <div className=" w-auto text-Flandingtext  text-left  lg:text-left lg:pb-5 md:text-left  md:pb-5 AboutparaMobile AboutparaTablet AboutparaDesktop">
              <ReactMarkdown>{props.desc}</ReactMarkdown>
            </div>

            <button className="bg-linearGrad  text-white w-[106px] h-10  md:w-[140px] md:h-[40px] lg:w-[200px] lg:h-[60px]  rounded-[30px] mt-4 mb-6 md:mb-0 BtnTablet BtnDesktop herobtnMobile">
              {props.linkName}
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center lg:w-2/3 md:w-1/2 lg:pt-10 lg:pb-14   ">
          <img className="object-contain w-[289px] h-[195px] md:w-[372px] md:h-[249px] lg:w-[775px] lg:h-[521px]" src={props.imgsrc} alt='aboutimage1'></img>
        </div>
      </div>
    </div>
  );
}

export default F1Landing;

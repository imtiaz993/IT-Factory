/* eslint-disable @next/next/no-img-element */

import React from "react";
import ReactMarkdown from "react-markdown";
function LandingAU(props) {
  return (
    <div className="w-11/12 mx-auto lg:w-3/4 lg:mx-auto md:w-11/12 md:mx-auto py-10">
      <div
        className={`flex flex-col-reverse lg:flex ${props.className} lg:flex-row-reverse md:flex md:${props.className} md:flex-row-reverse`}
      >
        <div className="flex flex-col justify-center  md:flex md:flex-row  lg:w-2/3 md:w-1/2  ">
          <div className=" mt-5">
            <div className="w-auto text-black   pb-5 text-center lg:text-left md:text-left md:pb-5 Aboutperfectpara">
              <ReactMarkdown>{props.desc}</ReactMarkdown>
            </div>

            <div className="flex justify-center pt-5 lg:justify-start lg:pt-[58px] md:justify-start md:pt-0 ">
              <button className="bg-linearGrad text-white rounded-[30px] Aboutperfectbtn">
                {props.buttonName}
              </button>
            </div>
          </div>
        </div>
        <div className="lg:flex lg:flex-col justify-center md:flex md:flex-col lg:w-2/3 md:w-2/3    ">
          <p className="w-3/4 mx-auto md:w-2/3 text-Flandingtext1 text-center lg:text-left md:text-left pb-10 md:ml-16 Aboutperfectheading">
            {props.title}
          </p>
          <img className="object-contain mx-auto w-[179.73px] h-[179.73px] md:w-[355.81px] md:h-[355.81px] lg:w-[468px] lg:h-[468px]" src={props.imgsrc} alt='clientimage'></img>
        </div>
      </div>
    </div>
  );
}

export default LandingAU;

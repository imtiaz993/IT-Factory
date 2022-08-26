/* eslint-disable @next/next/no-img-element */
import React from "react";
import ReactMarkdown from "react-markdown";
function FLanding(props) {
  return (
    <div className="lg:w-4/5 lg:ml-6  w-11/12 mx-auto">
      <div className={`  flex ${props.colR} md:${props.rowR}`}>
        <div className="md:ml-2 lg:ml-8 flex flex-col justify-center   lg:w-2/3 md:w-1/2 ">
          <div className="">
            <p className=" text-black text-2xl  text-left  lg:text-5xl lg:text-left ">
              {props.title}
            </p>
            <p className="mt-12  text-Flandingtext  w-3/4 mx-auto md:w-full tracking-wide text-left  lg:text-left pb-2  md:text-left md:pb-2  md:mt-0 AboutheadingMobile ServiceheadingTablet ">
              {props.landTitle}
              <span className="bg-linearGrad  rounded-full w-[27px] h-[6px] md:w-[36px] md:h-[7px] lg:w-[50px] lg:h-[10px] flex p-1  my-4 "></span>
            </p>

            <p className=" text-Flandingtext1   w-3/4 mx-auto md:w-full  text-left  lg:text-left lg:pb-8 md:text-left pb-8 AboutboldheadingMobile AboutboldheadingTablet  AboutboldheadingDesktop">
              {props.landCapTitle}
            </p>
            <div className="w-auto text-Flandingtext   text-left  lg:text-left lg:pb-5 md:text-left md:pb-5 AboutparaMobile AboutparaTablet AboutparaDesktop">
              <ReactMarkdown>{props.desc}</ReactMarkdown>
            </div>
            <p className="text-darkBlue  border-b-2 mt-3 border-darkBlue md:w-44 lg:w-36 w-20 AboutlinkMobile AboutlinkTablet AboutlinkDesktop">
              {props.linkName}
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center lg:w-2/3 md:w-1/2    ">
          <img className="object-contain w-[289px] h-[195px] md:w-[434px] md:h-[301px] lg:w-[819px] lg:h-[568px]" src={props.imgsrc} alt='aboutimage'></img>
        </div>
      </div>
    </div>
  );
}

export default FLanding;

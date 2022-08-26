/* eslint-disable @next/next/no-img-element */

import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import delve from "dlv";
import { getStrapiMedia } from "../util/common";

const ResHeader = ({ headerLinks }) => {
  const logo = headerLinks.data[0].attributes.header[0].logo;
  const links = headerLinks.data[0].attributes.header[0].links;
  const button = headerLinks.data[0].attributes.header[0].button;
  const route = useRouter();
  const [expanded, setExpanded] = React.useState(false);

  return (
    <div className=" max-w-[4000px]  ">
      <div
        className={`Nvbar fixed z-10 w-full max-w-[4000px] bg-white ${
          route.asPath == "/" ? " md:bg-lightGrey" : ""
        }`}
      >
        <div className="nav md:flex h-[55px] md:h-auto py-[6px] px-[0px]  lg:w-3/4 md:mx-auto  relative w-full  md:items-center md:py-[20px] pb-[20px] border-b shadow-sm md:shadow-none md:border-none">
          <div className="nav-header flex justify-center md:inline">
            <div className="nav-title  m-0 inline-block p-[1px] item-center md:ml-[20px] md:mr-auto logo   ">
              <Link href="/" prefetch={false}>
                <img
                  className="w-[194px] h-[46px] object-contain hover:cursor-pointer"
                  src={getStrapiMedia(delve(logo.data.attributes, "url"))}
                  alt="logo"
                ></img>
              </Link>
            </div>

            <div
              className="nav-btn inline-block absolute left-0 top-0 mt-[5px] md:hidden"
              onClick={() => {
                setExpanded(!expanded);
              }}
            >
              <label
                className="inline-block w-[50px] h-[50px] p-[12px]"
                htmlFor="nav-check "
              >
                <span className="block w-[25px] h-[6px] border-b-[3px] border-darkBlue "></span>
                <span className="block w-[25px] h-[6px] border-b-[3px] border-darkBlue "></span>
                <span className="block w-[25px] h-[6px] border-b-[3px] border-darkBlue "></span>
              </label>
            </div>
          </div>
          <div
            className={
              expanded
                ? `transition-height duration-200 ease-in bg-lightGrey  block w-full text-lg text-center pt-6   overflow-y-hidden top-[50px] left-0 md:inline md:float-right h-[100vh] md:text-right  md:h-auto  md:p-0 md:m-0  ${
                    route.asPath == "/" ? " md:bg-lightGrey" : "md:bg-white"
                  }`
                : `transition-height duration-200 ease-in bg-lightGrey  block  w-full  text-lg  text-center   md:mt-0 overflow-y-hidden top-[50px] left-0 md:inline md:h-auto md:float-right md:text-right h-[0]  md:pt-0  ${
                    route.asPath == "/" ? " md:bg-lightGrey" : "md:bg-white"
                  }`
            }
          >
            {links &&
              links.map((item, index) => (
                <Link
                  key={index}
                  href={item.path}
                  className={`w-full text-white py-[13px] px-[10px] mr-[30px] pb-[13px] `}
                  prefetch={false}
                >
                  <a
                    className={` block my-4 md:my-0   text-textGreish md:inline-block  md:ml-6 lg:ml-[48px] desktopMid:ml-3 hover:text-darkBlue  linkMobile linkDesktop linkTablet`}
                    onClick={() => {
                      setExpanded(!expanded);
                    }}
                  >
                    {item.name}
                  </a>
                </Link>
              ))}
            <Link href="/" prefetch={false}>
              <button
                className={` md:bg-linearGrad md:text-white  md:w-[140px] md:h-[45px] lg:w-[200px] lg:h-[60px] md:px-4 md:rounded-[30px] md:ml-8 lg:ml-[48px] lg:mr-0 md:mr-4 BtnTablet BtnDesktop`}
              >
                {button.name}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResHeader;

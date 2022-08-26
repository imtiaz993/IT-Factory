/* eslint-disable @next/next/no-img-element */

import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import delve from "dlv";
import { getStrapiMedia } from "../util/common";
const Footer = ({ footerLinks }) => {
  const logo = footerLinks.data[0].attributes.footer[0].logo;
  const links = footerLinks.data[0].attributes.footer[0].footerLinks;
  const route = useRouter();
  return (
    <div
      className={`w-full ${
        route.asPath == "/" ? "bg-lightGrey md:bg-white" : "md:bg-lightGrey"
      }`}
    >
      <div
        className={` md:hidden lg:hidden flex justify-center items-center pt-8 pb-8 ${
          route.asPath == "/" ? "bg-white " : "bg-lightGrey"
        }`}
      >
        <img
          src={getStrapiMedia(delve(logo.data.attributes, "url"))}
          width="120px"
          alt="logo"
        />
      </div>

      <div className="max-w-screen-2xl mx-auto py-2">
        <div
          className={`lg:w-3/4 lg:mx-auto md:w-11/12 md:mx-auto py-4 grid md:grid-cols-2 lg:justify-between lg:items-center  md:justify-between md:items-center `}
        >
          <Link href="/" prefetch={false}>
            <img
              className="hidden lg:block md:block md:w-[138px] md:h-[33px] lg:w-[194px] lg:h-[46px] cursor-pointer"
              src={getStrapiMedia(delve(logo.data.attributes, "url"))}
            />
          </Link>
          <div className=" flex justify-evenly px-4 md:block md:px-0">
            {links &&
              links.map((item, index) => (
                <Link href={item.path} key={index} prefetch={false}>
                  <a className=" md:ml-6 ml-2 text-textGreish hover:text-darkBlue linkMobile linkTablet linkDesktop">
                    {item.name}
                  </a>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

/* eslint-disable @next/next/no-img-element */

import React from "react";
import Link from "next/link";
function Header(props) {
  return (
    <div
      className={`${props.bgColor} lg:${props.bgColor1} md:${props.bgColor2} max-w-screen-2xl mx-auto hidden md:block lg:block`}
    >
      <div className="w-3/4 mx-auto lg:w-3/4 lg:mx-auto md:w-11/12 md:mx-auto ">
        <div
          className={`${props.bgColor} lg:${props.bgColor1} md:${props.bgColor2}`}
        >
          <div className=" flex justify-center w-full  ">
            <div className="pt-5">
              <img src="/Images/logo.PNG "></img>
            </div>
            <div className=" lg:inline-flex lg:flex-grow lg:w-auto md:inline-flex  md:w-1/2 md:ml-auto hidden ">
              <div className="lg:inline-flex md:inline-flex lg:flex-row md:flex-row lg:ml-auto md:ml-auto lg:w-auto   w-full lg:items-center md:items-center items-start  flex flex-col lg:h-20 md:h-20">
                <Link href="/OurServices" prefetch={false}>
                  <a className="font-lato font-light lg:inline-flex  lg:w-auto w-full text-base md:text-sm px-3 py-2 md:ml-5 md:p-0 rounded text-textGreish  items-center justify-center  lg:px-3 lg:py-2 ">
                    Our Services
                  </a>
                </Link>
                <Link href="/About" prefetch={false}>
                  <a className="font-lato font-light lg:inline-flex lg:w-auto w-full text-base md:text-sm px-3 py-2 rounded md:p-0 text-textGreish  items-center justify-center lg:px-3 lg:py-2">
                    About Us
                  </a>
                </Link>
                <Link href="/OurClient" prefetch={false}>
                  <a className="font-lato font-light lg:inline-flex lg:w-auto w-full lg:text-base md:text-sm px-3 py-2 md:p-0 rounded text-textGreish  items-center justify-center lg:px-3 lg:py-2">
                    Our Client
                  </a>
                </Link>
                <Link href="/Contact" prefetch={false}>
                  <a className="font-lato font-light lg:inline-flex lg:w-auto w-full lg:text-base md:text-sm  md:p-0 md:pr-5 py-2 rounded text-textGreish  items-center justify-center lg:px-3 lg:py-2">
                    Contact Us
                  </a>
                </Link>
              </div>
            </div>
            <div className="font-lato font-semibold lg:pt-4 lg:ml-5 md:pt-4 md:ml-0  hidden md:block lg:block">
              <button className="bg-blue-500 text-white w-36 h-12 text-base py-2 px-4 rounded-[30px] ">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

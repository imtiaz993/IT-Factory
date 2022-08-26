/* eslint-disable @next/next/no-img-element */

import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ResHeader from "./ResHeader";
import { useRouter } from "next/router";
const Layout = (props) => {
  const route = useRouter();
  return (
    <div className={`${route.asPath === "/" ? "bg-lightGrey" : "bg-white"}`}>
      <div className="Route ">
        <ResHeader
          bgColor={props.bgColor}
          bgColor1={props.bgColor1}
          bgColor2={props.bgColor2}
          headerLinks={props.headerLinks}
        />
        <Header
          bgColor={props.bgColor}
          bgColor1={props.bgColor1}
          bgColor2={props.bgColor2}
        />
        {props.children}
        <Footer footerLinks={props.footerLinks} />
      </div>
    </div>
  );
};

export default Layout;

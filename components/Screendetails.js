/* eslint-disable @next/next/no-img-element */

import React from "react";

function Screendetails({ screenName, text }) {
  return (
    <div className="bg-lightGrey">
      <h1 className="flex justify-center font-lato font-black items-center text-Flandingtext1 md:pt-12 lg:pt-12 pt-24 pb-5 ScreenHeading">
        {screenName}
      </h1>
      <p className="w-11/12 mx-auto flex font-lato font-medium justify-center items-center text-center  text-black lg:w-2/5 md:w-4/6 md:flex md:justify-center md:items-center md:mx-auto md:text-center lg:flex lg:justify-center lg:items-center lg:text-center lg:mx-auto pb-14 Screenpara">
        {text}
      </p>
    </div>
  );
}

export default Screendetails;

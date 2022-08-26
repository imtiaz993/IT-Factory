/* eslint-disable @next/next/no-img-element */

import React from "react";

function Cards(props) {
  return (
    <div
      className={` py-8 px-4 max-w-sm mx-auto ${props.imgColor}  rounded-lg shadow-lg flex flex-col justify-center items-center `}
    >
      <img className="object-contain w-[28px] h-[25px] md:w-[35.65px] md:h-[28.57px] lg:w-[50px] lg:h-[44px]"  src={props.imgsrc} alt='card'></img>
      <h5
        className={`mb-2 ${props.cardtitlecolor} text-center tracking-tight   ServiceCardheadingMobile ServiceCardheadingTablet ServiceCardheadingDesktop`}
      >
        {props.cardtitle}
      </h5>
      <p
        className={`mb-3   ${props.cardmsgcolor}   text-center   ServiceCardparaMobile ServiceCardparaTablet`}
      >
        {props.cardmsg}
      </p>
    </div>
  );
}

export default Cards;

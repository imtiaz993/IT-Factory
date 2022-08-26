/* eslint-disable @next/next/no-img-element */

import React from "react";

function UsersAU(props) {
  return (
    <div className="m-auto md:w-full">
      <div
        className={`w-64 p-4 md:w-full lg:w-full ${props.bgcolor} rounded-2xl flex flex-col justify-center items-center`}
      >
        <img src={props.imgsrc} width="100%" alt="users"></img>
      </div>
      <div className="w-64 p-6 md:w-full lg:w-full bg-linearGrad rounded-2xl   flex flex-col justify-center items-center -mt-2 ">
        <p className="text-white  flex justify-center items-center text-center Ourteamcardname">
          {props.name}
        </p>
        <p className="text-gray-500 Ourteamcardtext">
          {props.details}
        </p>
      </div>
    </div>
  );
}

export default UsersAU;

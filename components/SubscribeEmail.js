/* eslint-disable @next/next/no-img-element */

import React from "react";

function SubscribeEmail({ email, setEmail }) {
  return (
    <>
      <p className="flex justify-center  text-xl font-lato font-black ">
        Write your e-mail and we will contact you!
      </p>
      <div className=" flex justify-center my-[26px] items-center  bg-white w-[210px] h-[40px] md:w-[450px] md:h-[60px] mx-auto rounded-[90px] p-3 shadow-xl">
        <img src="Images/Vector.png" className=" w-[18.07px] h-[18.07px]" alt="subimage"></img>
        <input
          type="email"
          placeholder="EMAIL"
          className="text-left w-full h-full ml-4 outline-none placeholder:text-gray-400 font-semibold text-black  text-base Contactformtextfield"
          required
          onChange={(event) => setEmail(event?.target?.value ?? "")}
          value={email}
        />
      </div>
    </>
  );
}

export default SubscribeEmail;

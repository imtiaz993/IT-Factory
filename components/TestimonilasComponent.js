/* eslint-disable @next/next/no-img-element */

import React from "react";

const TestimonilasComponent = ({
  userImg,
  review,
  userName,
  ratingImg,
  MDwidth,
  MDPading,
  lgPading,
  ratingNo,
}) => {
  let ratingArray = [];
  for (var i = 0; i < ratingNo; i++) {
    ratingArray.push({ url: ratingImg });
  }
  return (
    <div
      className={`pb-5 md:pb-0 lg:mb-6  flex flex-col items-center w-100% lg:flex lg:flex-col lg:w-[45%] ${MDwidth} ${MDPading} ${lgPading}`}
    >
      <img src={userImg} width="75px" className="rounded-full relative top-8" alt="userimage"/>
      <div className="bg-white  font-medium rounded-3xl shadow-lg text-center py-4 pt-10 px-3   TestimonialsParaMobile TestimonialsParaTablet TestimonialsParaDesktop">
        <p>{review}</p>
        <p className="text-testimoColor my-2 font-semibold">{userName}</p>
        <div className="flex justify-center">
          {ratingNo > 0 &&
            ratingArray &&
            ratingArray.map((item, index) => (
              <img className="w-[7px] h-[7px] md:w-[10px] md:h-[10px] lg:w-[14px] lg:h-[14px]" key={index} src={ratingImg}  alt='star'/>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonilasComponent;

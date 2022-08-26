/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import React, { useState, useEffect } from "react";
import SubscribeEmail from "./SubscribeEmail";
import Swal from "sweetalert2";
const ContactComponent = ({
  contactTitle,
  contactDesc,
  button1Text,
  button2Text,
  noPading,
  onValidated,
  status,
  message,
}) => {
  const [email, setEmail] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (email) {
      onValidated({ EMAIL: email });
    }
  };
  useEffect(() => {
    console.log(status);
    if (status === "success") {
      Swal.fire({
        icon: "success",
        title: "Subscribed Successfully",
        showConfirmButton: false,
        timer: 2000,
      });
    }
    if (status === "error") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        showConfirmButton: false,
        timer: 2000,
      });
    }
    setEmail("");
  }, [status]);

  return (
    <div
      className={`text-center pt-16 pb-12  ${
        noPading ? noPading : "md:pt-28"
      } lg:pt-36 md:pb-24 lg:pb-20`}
    >
      <h1 className="  text-Flandingtext1 TestimonialsheadingMobile TestimonialsheadingTablet TestimonialsheadingDesktop">
        {contactTitle}
      </h1>
      <p className="lg:w-1/3 text-black mx-auto my-8 md:w-1/2 w-11/12 SubscribeParaMobile SubscribeParaTablet SubscribeParaDesktop">
        {contactDesc}
      </p>
      <SubscribeEmail email={email} setEmail={setEmail} />
      <div className="flex justify-center">
        <div className="lg:px-5 md:px-4 px-4">
          <button
            onClick={handleFormSubmit}
            className="bg-linearGrad text-white uppercase w-[106px] h-[32px] text-[11px] md:w-[142px] md:h-[43px] md:text-[16px] lg:w-[200px] lg:h-[60px] rounded-[30px] font-lato font-medium  "
          >
            {button1Text}
          </button>
        </div>
        <div className="">
          <Link href="/Contact">
            <button className=" text-textGreish border-2 uppercase border-linearGrad w-[106px] h-[32px] md:w-[142px] md:h-[43px] text-[11px] md:text-[16px] lg:w-[200px] lg:h-[60px] rounded-[30px] font-lato font-medium lg:mr-4">
              {button2Text}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;

/* eslint-disable @next/next/no-img-element */

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const ContactForm = () => {
  const form = useRef();
  const [sending, setSending] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleFormSubmit = (e) => {
    setSending(true);
    e.preventDefault();
    emailjs
      .sendForm("default_service", "template_id", form.current, "key")
      .then(
        (result) => {
          setSending(false);
          setName("");
          setEmail("");
          setPhone("");
          setMessage("");
          Swal.fire({
            icon: "success",
            title: "Message Sent",
            text: "We will get back to you shortly",
            showConfirmButton: false,
            timer: 2000,
          });
        },
        (error) => {
          setSending(false);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      );
  };

  return (
    <form
      className="flex flex-col shadow-2xl p-8 "
      ref={form}
      onSubmit={handleFormSubmit}
    >
      <h1 className=" mt-4 mb-4  text-Flandingtext1 Contactformheading">
        Contact Us Any Time
      </h1>
      <input
        name="name"
        type="text"
        value={name}
        onChange={(event) => setName(event?.target?.value ?? "")}
        placeholder="YOUR FULL NAME"
        className="bg-lighterGrey p-3 my-4 text-fillColor Contactformtextfield"
        required
      />
      <input
        name="email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event?.target?.value ?? "")}
        placeholder="EMAIL"
        className="bg-lighterGrey p-3 my-4 text-fillColor Contactformtextfield"
        required
      />
      <input
        name="password"
        value={phone}
        onChange={(event) => setPhone(event?.target?.value ?? "")}
        type="phone"
        placeholder="PHONE NO"
        className="bg-lighterGrey p-3 my-4 text-fillColor Contactformtextfield"
        required
      />
      <textarea
        name="message"
        value={message}
        placeholder="MESSAGE"
        onChange={(event) => setMessage(event?.target?.value ?? "")}
        className="bg-lighterGrey p-3 my-4  resize-none text-fillColor Contactformtextfield"
        rows="4"
        required
      ></textarea>
      {!sending && (
        <input
          type="Submit"
          value="Submit"
          className="bg-linearGrad text-white  rounded-[30px] mt-6 mx-auto Aboutperfectbtn cursor-pointer"
        />
      )}
      {sending && (
        <input
          disabled
          value="Submitting"
          className="bg-linearGrad text-white text-center rounded-[30px] mt-6 mx-auto Aboutperfectbtn cursor-pointer"
        />
      )}
    </form>
  );
};

export default ContactForm;

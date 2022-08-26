import React from "react";
import UsersAU from "./UsersAU";
import { useRouter } from "next/router";
import { getStrapiMedia } from "../util/common";
import delve from "dlv";
function Ourteam({ team }) {
  return (
    <div className="w-11/12 mx-auto lg:w-3/4 lg:mx-auto md:w-11/12 md:mx-auto py-10 pt-4 pb-16 md:pb-10 md:pt-16">
      <h1 className=" flex justify-center text-Flandingtext1   items-center text-center pb-4 md:pb-12 lg:pb-[56px] Ourteamheading">
        {team.sectionTitle}
      </h1>
      <p className=" flex justify-center items-center text-black pb-16 md:pb-20 Ourteampara">
        {team.description}
      </p>
      <div className="grid  gap-y-10   lg:grid lg:grid-rows-2 lg:gap-7  md:grid md:grid-rows-3 md:gap-7  md:grid-flow-col ">
        {team &&
          team.teamMembers.map((item, index) => (
            <UsersAU
              key={index}
              bgcolor="bg-lightGrey"
              name={item.name}
              details={item.details}
              imgsrc={getStrapiMedia(delve(item.image.data.attributes, "url"))}
            />
          ))}
      </div>
    </div>
  );
}

export default Ourteam;

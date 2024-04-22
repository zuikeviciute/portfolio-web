import { FaGithub } from "react-icons/fa";
import { CgFigma } from "react-icons/cg";
import { useState } from "react";
const githubUrl = "https://github.com/zuikeviciute";

export function ProjectorDetails() {

  return (
    <div className="py-4 px-4 max-w-3xl mx-auto grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-4 rounded-lg">

      <img src={"/static/images/maupak.png"} alt="Banner" className="project-card lg:col-span-3 col-span-3 h-44" />
      <div className="lg:col-span-5 col-span-5">
        <div className={"text-title text-2xl"}>Projector App Design</div>
        <div className={"text-body"}>UX/UI design for a mobile app that connects to a smart projector.</div>

        <div className="ml-2 flex flex-row gap-4">

        <a href="/notes" className={"left-2 bottom-2 flex flex-row justify-center items-center text-center text-sm font-medium bg-[#191919] text-white p-1 rounded-lg"}>
          <CgFigma color={"#ffffff"} />
          <div className={"mx-2"}>figma files</div>
        </a>
        </div>
      </div>

      <div className="lg:col-span-8 col-span-5">
        <div className={"relative text-body"}>
            The idea was for the app to be used as a remote to provide a quick and convenient way to control the projector.
        </div>


        <div className={"text-body"}>To take it a step above a remote - it is also designed to allow streaming directly from the phone 
        storage or other apps installed on the device. All streaming options also support fully customisable displays with zoom and crop anywhere on the screen.</div>

        <div className={"text-body"}>The main navigation of the app is a swipable rotating bar. </div>
        <div className={"text-small flex flex-row justify-center"}>-- section in progress --</div>
      </div>
    </div>

  );
}

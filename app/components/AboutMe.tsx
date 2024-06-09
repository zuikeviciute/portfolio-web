import { CgFigma } from "react-icons/cg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrDocumentPdf } from "react-icons/gr";
import { FaArrowLeft } from "react-icons/fa";
import { useState } from "react";
const githubUrl = "https://github.com/zuikeviciute";

export function AboutMe() {

  return (
    <div className="py-4 px-4 text-[#191919] max-w-3xl mx-auto grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-4 rounded-lg">

        <div className={"lg:col-span-8 col-span-8 flex flex-row justify-left items-center text-center text-[#F56441] pb-4"}>
          <FaArrowLeft/>
          <a href="/" rel="noopener noreferrer" className="ml-2 text-small text-[#F56441]">Home</a>
          <div className="mx-2 text-small text-[#191919]">/</div>
          <div className="ml-2 text-small text-[#191919]">About Me</div>
        </div>

      {/* <img src={"/static/images/portfolio_img.png"} alt="Banner" className="project-card lg:col-span-3 col-span-3 h-44 border-2 border-[#191919]" /> */}
      <div className="relative texture-bg project-card lg:col-span-3 col-span-3 h-44 border-2 border-[#191919]" />
      <div className="lg:col-span-5 col-span-5">
        <div className={"text-title text-2xl text-[#191919]"}>Hi!</div>
        <div className={"text-body text-[#191919]"}>I'm Laura, an aspiring web developer with a background in computing science and an 
        interest in interaction design. </div>

        <div className="ml-2 flex flex-row gap-4">
        <a href="https://github.com/zuikeviciute/portfolio-web" className={"left-2 bottom-2 flex flex-row justify-center items-center text-center text-sm font-medium bg-[#191919] text-white p-1 rounded-lg"}>
          <FaLinkedin className={"ml-1"} />
          <div className={"mx-2"}>LinkedIn</div>
        </a>

        <a href="/portfolio" className={"left-2 bottom-2 flex flex-row justify-center items-center text-center text-sm font-medium bg-[#191919] text-white p-1 rounded-lg"}>
          <FaGithub className={"ml-1"} />
          <div className={"mx-2"}>GitHub</div>
        </a>

        <a href="/portfolio" className={"left-2 bottom-2 flex flex-row justify-center items-center text-center text-sm font-medium bg-[#191919] text-white p-1 rounded-lg"}>
          <GrDocumentPdf className={"ml-1"} />
          <div className={"mx-2"}>Resume</div>
        </a>
        </div>
      </div>

      <div className="lg:col-span-8 col-span-5">
        <div className={"relative text-body text-[#191919] "}>I am currently open for work as a junior web developer
         / junior frontend developer including full-time, contract, internship or apprenticeship positions.
        </div>

        <div className={"text-body text-[#191919] "}>Currently working on creating more projects to add to this portfolio.</div>
      </div>

    </div>

  );
}

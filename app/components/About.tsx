import { FaGithub, FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { GrDocumentPdf } from "react-icons/gr";
import { useState } from "react";

const githubUrl = "https://github.com/zuikeviciute";
const linkedinUrl = "https://www.linkedin.com/in/zuikeviciute/";
const resumeUrl = "https://drive.google.com/file/d/1dwsUHx89Y-kMr1jtp31qLKboCpHkG1SF/view?usp=sharing";

export function About() {
  return (
    <div className="relative max-w-3xl mx-auto p-4 bg-[#191919]">

      {/* <div className="absolute col-span-2 right-2 -top-8 text-[#F8F5ED]">

        <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="icon-div">
          <FaGithub className="color-[#191919] hover:color-[#F17C60] size-5" />
        </a>

        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="icon-div">
          <FaLinkedin className="color-[#191919] hover:color-[#F17C60] size-5" />
        </a>


        <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="icon-div">
          <GrDocumentPdf className="color-[#191919] hover:color-[#F17C60] size-5" />
        </a>
      </div> */}

      <div className="max-w-3xl mx-auto py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-6 items-end p-4 rounded-lg ">
        {/* <img src={'/static/images/laura2.jpeg'} alt="Banner" className="width-44 h-36 w-full col-span-3 lg:col-span-2 row-span-2 right-2 rounded-lg mr-4 mb-4 lg:mb-1" /> */}
        <h1 className="col-span-3 text-title bg-[#191919]">Hi! I'm Laura</h1>
        <p className="col-span-4 text-body bg-[#191919]">Web developer with academic experience working in small teams,
          creating web applications with backend architecture and interactive front-end design. </p>
        
      </div>
    </div>


  );
}

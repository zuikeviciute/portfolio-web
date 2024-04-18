import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrDocumentPdf } from "react-icons/gr";
import { useState } from "react";

const linkedinUrl = "https://www.linkedin.com/in/zuikeviciute/";
const githubUrl = "https://github.com/zuikeviciute";

export function About() {
  return (
    <div className="relative max-w-3xl mx-auto py-4">

      <div className="absolute col-span-2 right-2 -top-6">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="inline-block hover:text-[#F17C60] rounded-lg px-4 py-2 text-sm font-medium">
            <div className={"flex flex-row justify-center items-center text-center"}>

              <FaGithub className="color-[#ffffff] hover:color-[#F17C60] size-5" />
            </div>
          </a>

          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block hover:text-[#F17C60] rounded-lg px-4 py-2 text-sm font-medium"
          >
            <div
              className={"flex flex-row justify-center items-center text-center"}
            >
              <FaLinkedin className="color-[#ffffff] hover:color-[#F17C60] size-5" />
            </div>
          </a>


          <a
            href={"https://drive.google.com/file/d/1dwsUHx89Y-kMr1jtp31qLKboCpHkG1SF/view?usp=sharing"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block hover:text-[#F17C60] rounded-lg px-4 py-2 text-sm font-medium"
          >
            <div
              className={"flex flex-row justify-center items-center text-center"}
            >
              <GrDocumentPdf className="color-[#ffffff] hover:color-[#F17C60] size-5" />
            </div>
          </a>
        </div>

      <div className="max-w-3xl mx-auto py-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 items-end p-6 border-2 border-[#191919] rounded-lg full-shadow">
        <div className="bg-[#191919] width-44 h-36 col-span-2 row-span-2 right-2 rounded-lg mr-4"></div>

        <h1 className="col-span-2 text-3xl px-4 italic font-bold text-[#191919]">Hi! I'm Laura</h1>



        <p className="col-span-4 text-md font-medium p-4 text-wrap">Web developer with academic experience working in small teams,
          creating web applications with backend architecture and interactive front-end design. </p>
        {/* <img src={"laura.png"} alt="Photo" className="object-cover w-full h-fit right-2 rounded-lg col-span-2"/> */}
      </div>
    </div>


  );
}

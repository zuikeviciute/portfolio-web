import { useState } from "react";

const githubUrl = "https://github.com/zuikeviciute";
const linkedinUrl = "https://www.linkedin.com/in/zuikeviciute/";
const resumeUrl = "https://drive.google.com/file/d/1dwsUHx89Y-kMr1jtp31qLKboCpHkG1SF/view?usp=sharing";

export function Navbar() {

  return (
    <div className="relative grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 min-h-0 w-full max-w-6xl mx-auto py-4 px-2 gap-1">

      <div className="col-span-1 text-[#191919] text-body flex flex-row justify-center">
        <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="icon-div3">textures
        </a>
      </div>

      <div className="col-span-2 text-[#191919] text-body flex flex-row justify-center">

        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="icon-div">about</a>

        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="icon-div">view all</a>

        <div className="icon-div popup-container">more
          {/* <div className="popup-content">
            action<br />
            another action
          </div> */}
        </div>

        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="icon-div">github</a>
      </div>

      <div className="col-span-1 text-[#191919] text-body flex flex-row justify-center">
        <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="icon-div">contribute</a>
      </div>
    </div>
  );
}

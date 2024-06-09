import { FaGithub } from "react-icons/fa";
import { CgFigma } from "react-icons/cg";
import { FaArrowLeft } from "react-icons/fa";
import { useState } from "react";
const githubUrl = "https://github.com/zuikeviciute";

export function Details() {

  return (
    <div className="py-4 px-4 max-w-3xl mx-auto grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-4 rounded-lg">

      {/* breadcrumb */}
      <div className={"lg:col-span-8 col-span-8 flex flex-row justify-left items-center text-center text-[#F17C60] pb-4"}>
        <FaArrowLeft />
        <a href="/" rel="noopener noreferrer" className="ml-2 text-small text-[#F17C60]">Home</a>
        <div className="mx-2 text-small text-[#191919]">/</div>
        <div className="ml-2 text-small text-[#191919]">Portfolio</div>
      </div>

      <img src={"/static/images/cat.png"} alt="Banner" className="project-card lg:col-span-3 col-span-8 h-44 border-2 border-[#191919]" />
      <div className="lg:col-span-5 col-span-8">
        <div className={"text-title"}>Portfolio</div>
        <div className={"text-body"}>This portfolio website was made to provide a more comfortable way to view details about my projects and for me to learn more about Typescript and React.</div>

        <div className="ml-2 flex flex-row gap-4">
          <a href="https://github.com/zuikeviciute/portfolio-web" className={"left-2 bottom-2 flex flex-row justify-center items-center text-center text-sm font-medium bg-[#191919] text-white p-1 rounded-lg"}>
            <FaGithub className={"ml-1"} />
            <div className={"mx-2"}>github repo</div>
          </a>

          <a href="/portfolio" className={"left-2 bottom-2 flex flex-row justify-center items-center text-center text-sm font-medium bg-[#191919] text-white p-1 rounded-lg"}>
            <CgFigma className={"ml-1"} />
            <div className={"mx-2"}>figma files</div>
          </a>
        </div>
      </div>

      <div className="lg:col-span-8 col-span-8">
        <div className={"relative text-body"}>I wanted the portfolio to be something more personal and less professionally formatted compared to my résumé.
          The idea was to make something simple, comfortable and familiar - “this is me and these are the types of projects I create”.
        </div>

        <div className={"text-body"}>This portfolio is still a work in progress, but I have learnt quite a lot about front-end development,
          Typescript, React and CSS + Tailwind.</div>
      </div>

    </div>

  );
}

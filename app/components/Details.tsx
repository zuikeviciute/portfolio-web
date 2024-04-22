import { FaGithub } from "react-icons/fa";
import { CgFigma } from "react-icons/cg";
import { useState } from "react";
const githubUrl = "https://github.com/zuikeviciute";

export function Details() {

  return (
    <div className="py-4 px-4 text-[#191919] max-w-3xl mx-auto grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-4 rounded-lg">

      <img src={"/static/images/portfolio_img.png"} alt="Banner" className="project-card lg:col-span-3 col-span-3 h-44" />
      <div className="lg:col-span-5 col-span-5">
        <div className={"text-title text-2xl text-[#191919]"}>Portfolio</div>
        <div className={"text-body text-[#191919]"}>Portfolio web app to provide a more comfortable way to view details about my projects.</div>

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

      <div className="lg:col-span-8 col-span-5">
        <div className={"relative text-body text-[#191919] "}>I wanted to create a portfolio website with relevant links that also works as a meet me page -
          “this is me and these are the types of projects I create”. Something personal and less professionally formatted compared to my CV.
          <img src={"/static/images/cat.png"} alt="Banner" className="absolute h-16 -bottom-2 right-6" />
        </div>


        <div className={"text-body text-[#191919] "}>Initially the design was going to be separated into two or three parts - about me, projects and contact,
          accessible both trough a navigation bar on top and by scrolling. However, I felt that was too similar to e-commerce layouts and far too formal. That’s why I
          decided on a more compact design with everything being visible on the first page.</div>

        <div className={"text-body text-[#191919] "}>This portfolio is still a work in progress, but I have learnt quite a lot about front-end development,
          Typescript, React and CSS + Tailwind.</div>

          <div className={"text-small flex flex-row justify-center"}>-- section in progress --</div>
      </div>
    </div>

  );
}

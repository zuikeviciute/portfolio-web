import { PiCodeBlockDuotone } from "react-icons/pi";
import { LiaVectorSquareSolid } from "react-icons/lia";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaCodepen } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { CgFigma } from "react-icons/cg";
import { SiBlender } from "react-icons/si";
import { FaUnity } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

interface IProject {
  title: string;
  backgroundImageUrl: string;
  URL: string;
  className: string;
  description: string;
}

type ProjectType = IProject[];

const projects: ProjectType = [

  {
    title: "texturename",
    backgroundImageUrl: "/static/images/temp2.png",
    URL: "/portfolio",
    className: "col-span-3 md:col-span-2 lg:col-span-2",
    description: "uploadername",
  },
  {
    title: "texturename",
    backgroundImageUrl: "/static/images/temp2.png",
    URL: "/",
    className: "col-span-3 md:col-span-2 lg:col-span-2",
    description: "uploadername",
  },
  {
    title: "coming soon 2",
    backgroundImageUrl: "/static/images/temp2.png",
    URL: "/",
    className: "col-span-3 md:col-span-2 lg:col-span-2",
    description: "description",
  },
  {
    title: "coming soon 3",
    backgroundImageUrl: "/static/images/temp2.png",
    URL: "/",
    className: "col-span-3 md:col-span-2 lg:col-span-2",
    description: "description",
  },
  {
    title: "coming soon 4",
    backgroundImageUrl: "/static/images/temp2.png",
    URL: "/",
    className: "col-span-3 md:col-span-2 lg:col-span-2",
    description: "description",
  },
  {
    title: "coming soon 5",
    backgroundImageUrl: "/static/images/temp2.png",
    URL: "/",
    className: "col-span-3 md:col-span-2 lg:col-span-2",
    description: "description",
  },
];

export function Products() {
  return (
    <div className="relative max-w-4xl lg:max-w-6xl mx-auto p-3 mt-60">
      {/* <h1 className="col-span-3 text-title text-2xl rounded-lg pt-6 pl-8">Projects</h1> */}

      {/* <div className="relative mx-center flex flex-row gap-4">
        <div className={"left-2 bottom-2 flex flex-row justify-center items-center text-center text-sm font-medium p-1 rounded-full border-2 border-[#191919] bg-[#F8F5ED]"}>
          <div className={"ml-1 mr-2"}>2 projects</div>
          <PiCodeBlockDuotone className={"mr-1 size-5"} />
        </div>

        <div className={"left-2 bottom-2 flex flex-row justify-center items-center text-center text-sm font-medium p-1 rounded-full border-2 border-[#191919] bg-[#F8F5ED]"}>
          <div className={"ml-1 mr-2"}>2 components</div>
          <LiaVectorSquareSolid className={"mr-1 size-5"} />
        </div>
      </div> */}



      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-6 lg:grid-cols-8 gap-16 p-5 text-[#F8F5ED]">

        {projects.map((project, index) => (
          <a key={index} href={project.URL} className={project.className}>
            <div className="relative">

              <div className="relative texture-bg project-card">
                <img src={project.backgroundImageUrl} alt="Banner" className="absolute project-card card-hover border-2 border-[#191919]" />
              </div>

              <div className={"relative flex flex-row"}>

                <div className={"relative flex flex-col flex-wrap"}>
                  <div className={"text-body pt-1 pl-1 pb-0"}>{project.title}</div>
                  <div className={"text-small pt-0 p-0 pl-1"}>{project.description}</div>
                </div>

                <div className={"absolute w-10 flex text-[#191919] right-1 flex-row-reverse"}>
                  <div rel="noopener noreferrer" className="relative icon-div">
                    <FaUnity className="size-5" />
                  </div>

                  <div rel="noopener noreferrer" className="relative icon-div">
                    <SiBlender className="size-5" />
                  </div>

                  {/* <div rel="noopener noreferrer" className="relative icon-div">
                    <CgFigma className="size-5" />
                  </div> */}
                </div>


              </div>


            </div>
          </a>
        ))}
      </div>

    </div>

  );
}

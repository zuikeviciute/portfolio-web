import { PiCodeBlockDuotone } from "react-icons/pi";
import { LiaVectorSquareSolid } from "react-icons/lia";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaCodepen } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { CgFigma } from "react-icons/cg";

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
    title: "Portfolio",
    backgroundImageUrl: "/static/images/temp1.png",
    URL: "/portfolio",
    className: "col-span-3 md:col-span-2 lg:col-span-1",
    description: "this website!",
  },
  {
    title: "coming soon 1",
    backgroundImageUrl: "/static/images/temp1.png",
    URL: "/",
    className: "col-span-3 lg:col-span-1",
    description: "description",
  },
  {
    title: "coming soon 2",
    backgroundImageUrl: "/static/images/temp1.png",
    URL: "/",
    className: "col-span-3 md:col-span-2 lg:col-span-1",
    description: "descriptiond escriptio ndescriptio ndesc descript iondescriptionription descr iption description",
  },
];

export function ProductPreview() {
  return (
    <div className="relative max-w-3xl mx-auto">

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-8 lg:grid-cols-3 text-[#F8F5ED] divide-x divide-[#191919] outline outline-1 outline-[#191919]">

        {projects.map((project, index) => (
          <a key={index} href={project.URL} className={project.className}>
            <div className="relative">

              <div className="relative">
                <img src={project.backgroundImageUrl} alt="Banner" className="relative h-60 w-full" />
              </div>

              <div className={"relative flex flex-row"}>

                {/* <div className={"relative flex flex-col flex-wrap"}>
                  <div className={"text-body pt-1 pl-1 pb-0"}>{project.title}</div>
                  <div className={"text-small pt-0 p-0 pl-1"}>{project.description}</div>
                </div> */}

                <div className={"absolute w-10 flex text-[#191919] right-1 flex-row-reverse"}>
                  {/* <div rel="noopener noreferrer" className="relative icon-div">
                    <FaGithub className="size-5" />
                  </div> */}

                  {/* <div rel="noopener noreferrer" className="relative icon-div">
                    <FaCodepen className="size-5" />
                  </div>

                  <div rel="noopener noreferrer" className="relative icon-div">
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

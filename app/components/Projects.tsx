import { FaGithub} from "react-icons/fa";
const githubUrl = "https://github.com/zuikeviciute";

interface IProject {
  title: string;
  backgroundImageUrl: string;
  URL: string;
}

type ProjectType = IProject[];

const projects: ProjectType = [
  {
    title: "Portfolio Website",
    backgroundImageUrl: "portfolio6.png",
    URL: "https://github.com/zuikeviciute/portfolio-web",
  },
];

export function Projects() {
  return (
    <div className="py-4 mx-6">
      <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
        
        <div className="relative col-span-3 order-1">
          <a href={"https://github.com/zuikeviciute/portfolio-web"}>
                <img src={"assets/temp1.png"} alt="project image" className="object-cover h-56 w-full border-[#191919] border-2 rounded-lg hover:outline hover:outline-4 hover:outline-offset-0 outline-[#F17C60]" />
                <div className={"absolute left-2 bottom-1 flex flex-row justify-center items-center text-center text-sm font-medium bg-[#191919] p-1 rounded-lg text-white"}>
                    {/* <FaGithub color={"#ffffff"} /> */}
                    <div className={"mx-2"}>{"Project 1"}</div>
                </div>
            </a>
        </div>

        <div className="relative lg:col-span-2 order-2">
          <a href={"https://github.com/zuikeviciute/portfolio-web"}>
                <img src={"assets/temp2.png"} alt="project image" className="object-cover h-56 w-full border-[#191919] border-2 rounded-lg hover:outline hover:outline-4 hover:outline-offset-0 outline-[#F17C60]" />
                <div className={"absolute left-2 bottom-1 flex flex-row justify-center items-center text-center text-sm font-medium bg-[#191919] p-1 rounded-lg text-white"}>
                    {/* <FaGithub color={"#ffffff"} /> */}
                    <div className={"mx-2"}>{"Project 2"}</div>
                </div>
            </a>
        </div>

        <div className="lg:col-span-1 lg:m-10 lg:pt-16 col-span-0 -order-1 lg:order-3">
          <div className="text-white text-md font-medium">2024</div>
        </div>

        <div className="lg:col-span-1 lg:m-10 pt-16 col-span-3 order-3">
          <div className="text-white text-md font-medium">2023</div>
        </div>

        <div className="relative col-span-3 order-4">
          <a href={"https://github.com/zuikeviciute/portfolio-web"}>
                <img src={"assets/temp3.png"} alt="project image" className="object-cover h-56 w-full border-[#191919] border-2 rounded-lg hover:outline hover:outline-4 hover:outline-offset-0 outline-[#BBC842]" />
                <div className={"absolute left-2 bottom-1 flex flex-row justify-center items-center text-center text-sm font-medium bg-[#191919] p-1 rounded-lg text-white"}>
                    {/* <FaGithub color={"#ffffff"} /> */}
                    <div className={"mx-2"}>{"Project 3"}</div>
                </div>
            </a>
        </div>

        <div className="relative lg:col-span-2 col-span-3 order-5">
          <a href={"https://github.com/zuikeviciute/portfolio-web"}>
                <img src={"assets/temp4.png"} alt="project image" className="object-cover h-56 w-full border-[#191919] border-2 rounded-lg hover:outline hover:outline-4 hover:outline-offset-0 outline-[#BBC842]" />
                <div className={"absolute left-2 bottom-1 flex flex-row justify-center items-center text-center text-sm font-medium bg-[#191919] p-1 rounded-lg text-white"}>
                    {/* <FaGithub color={"#ffffff"} /> */}
                    <div className={"mx-2"}>{"Project 4"}</div>
                </div>
            </a>
        </div>

        {/* {projects.map((project, index) => (
          <a key={index} href={project.URL}>
            <div className="relative shadow-md hover:outline hover:outline-4 hover:outline-offset-0 outline-[#BBC842] text-white rounded-lg">
              <img src={project.backgroundImageUrl} alt="Banner" className=" object-cover border-[#191919] border-2 rounded-lg" />
              <div className={"absolute left-2 bottom-1 flex flex-row justify-center items-center text-center text-sm font-medium bg-[#191919] p-1 rounded-lg"}>
                  <FaGithub color={"#ffffff"} />
                  <div className={"ml-2"}>{project.title}</div>
              </div>
            </div>
          </a>
        ))} */}
      </div>
    </div>
  );
}

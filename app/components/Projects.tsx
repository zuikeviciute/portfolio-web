import { FaGithub} from "react-icons/fa";
const githubUrl = "https://github.com/zuikeviciute";

interface IProject {
  title: string;
  backgroundImageUrl: string;
  URL: string;
  className:  string;
}

type ProjectType = IProject[];

const projects: ProjectType = [
  
  {
    title: "Smart Projector App Design",
    backgroundImageUrl: "/static/images/maupak.png",
    URL: "/notes",
    className: "col-span-3 md:col-span-3 lg:col-span-3 order-1",
  },
  {
    title: "Portfolio Website",
    backgroundImageUrl: "/static/images/portfolio_img.png",
    URL: "https://github.com/zuikeviciute/portfolio-web",
    className: "col-span-3  md:col-span-2 lg:col-span-2 order-2",
  },
  {
    title: "3D Unity Game",
    backgroundImageUrl: "/static/images/unity.png",
    URL: "https://github.com/zuikeviciute/3D-Serious-Game",
    className: "col-span-3 md:col-span-3 lg:col-span-3 order-4",
  },
  {
    title: "3D Unity Game",
    backgroundImageUrl: "/static/images/unity.png",
    URL: "https://github.com/zuikeviciute/3D-Serious-Game",
    className: "col-span-3 md:col-span-2 lg:col-span-2 order-5",
  },
];

export function Projects() {
  return (
    <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-6 lg:grid-cols-6 gap-4 p-8 text-[#F8F5ED] bg-[#191919]">
        
        <div className="lg:col-span-1 md:col-span-1 md:m-10 md:pt-12 lg:m-10 lg:pt-12 col-span-0 -order-1 md:order-3 lg:order-3">
          <div className="text-md font-medium">
            <p className="text-md text-wrap">2024</p>
          </div>
        </div>

        <div className="lg:col-span-1 md:col-span-1 md:m-10 md:pt-12 lg:m-10 lg:pt-12 col-span-3 order-3">
          <div className=" text-md font-medium">
          <p className="text-md lg:pt-0 text-wrap">2023</p>
            </div>
        </div>

        {projects.map((project, index) => (
          <a key={index} href={project.URL} className={project.className}>
            <div className="relative">
              <img src={project.backgroundImageUrl} alt="Banner" className="project-card div-hover rounded-lg border-4 border-[#191919]" />
              <div className={"card-text"}>
                  {/* <FaGithub color={"#ffffff"} /> */}
                  <div className={"ml-2"}>{project.title}</div>
              </div>
            </div>
          </a>
        ))}
        
      </div>
  );
}

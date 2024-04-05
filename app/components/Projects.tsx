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
    backgroundImageUrl: "portfolio3.png",
    URL: "https://github.com/zuikeviciute/portfolio-web",
  },
];

export function Projects() {
  return (
    <div className="py-4">
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <a key={index} href={project.URL}>
            <div className="relative shadow-md hover:outline hover:outline-4 hover:outline-offset-0 outline-[#BBC842] text-white">
              <img src={project.backgroundImageUrl} alt="Banner" className="w-full max-h-60 object-cover" />
              <div className={"absolute left-2 bottom-1 flex flex-row justify-center items-center text-center text-sm font-medium bg-[#191919] p-1 rounded-lg"}>
                  <FaGithub color={"#ffffff"} />
                  <div className={"ml-2"}>{project.title}</div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

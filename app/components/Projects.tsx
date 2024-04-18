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
    title: "Portfolio Website",
    backgroundImageUrl: "/static/images/portfolio_img.png",
    URL: "https://github.com/zuikeviciute/portfolio-web",
    className: "col-span-3 lg:col-span-2 order-1",
  },
  {
    title: "Smart Projector App Design",
    backgroundImageUrl: "/static/images/maupak.png",
    URL: "/notes",
    className: "col-span-3 lg:col-span-3 order-2",
  },
  {
    title: "3D Unity Game",
    backgroundImageUrl: "/static/images/unity.png",
    URL: "https://github.com/zuikeviciute/3D-Serious-Game",
    className: "col-span-3 lg:col-span-3 order-4",
  },
];


export function Projects() {
  return (
    <div className="py-4 mx-6 text-[#191919] border-[#FEF8EE]">
      <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
        
        <div className="lg:col-span-1 lg:m-10 lg:pt-8 col-span-0 -order-1 lg:order-3">
          <div className=" text-md font-medium">
            <p className="text-md  p-4 text-wrap">2024</p>
          </div>
        </div>

        <div className="lg:col-span-3 lg:m-0 pt-6 col-span-3 order-3">
          <div className=" text-md font-medium">
          <p className="text-md  p-4 text-wrap">Currently working on personal projects
              and looking to join a team as a junior web developer! C# has been my go to language for about 3 years now and I’ve used it to make desktop apps, web apps and games.
            </p>
            </div>
        </div>

        {projects.map((project, index) => (
          <a key={index} href={project.URL} className={project.className}>
            <div className="relative">
              <img src={project.backgroundImageUrl} alt="Banner" className="project-card div-hover" />
              <div className={"project-name"}>
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

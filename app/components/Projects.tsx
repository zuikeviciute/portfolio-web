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
    backgroundImageUrl: "/static/images/portfolio_img.png",
    URL: "/portfolio",
    className: "col-span-3 md:col-span-2 lg:col-span-2",
    description: "portfolio website",
  },
  {
    title: "Projector App",
    backgroundImageUrl: "/static/images/maupak.png",
    URL: "/notes",
    className: "col-span-3",
    description: "ux/ui design for a smart projector app",
  },
  {
    title: "3D Game",
    backgroundImageUrl: "/static/images/unity.png",
    URL: "/unity",
    className: "col-span-3 md:col-span-2 lg:col-span-2",
    description: "3d unity game",
  },
];

export function Projects() {
  return (
    <div className="max-w-4xl mx-auto p-3">
      {/* <h1 className="col-span-3 text-title text-2xl rounded-lg pt-6 pl-8">Projects</h1> */}

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-6 lg:grid-cols-7 gap-4 p-5 text-[#F8F5ED]">

        {projects.map((project, index) => (
          <a key={index} href={project.URL} className={project.className}>
            <div className="relative">

              <div className="relative texture-bg project-card">
                <img src={project.backgroundImageUrl} alt="Banner" className="absolute project-card card-hover border-2 border-[#191919]"/>
              </div>

              <div className={"relative flex flex-col flex-wrap"}>
                <div className={"text-body pt-1 pl-1 pb-0"}>{project.title}</div>
                <div className={"text-small pt-0 p-0 pl-1"}>{project.description}</div>
              </div>

            </div>
          </a>
        ))}

      </div>

      <div className={"text-small flex flex-row justify-center pt-20"}>-- website in progress --</div>
    </div>

  );
}

import { TbTexture } from "react-icons/tb";
import { GrObjectUngroup } from "react-icons/gr";
import { GiCubes } from "react-icons/gi";
import { IconType } from "react-icons/lib";

const githubUrl = "https://github.com/zuikeviciute";
const linkedinUrl = "https://www.linkedin.com/in/zuikeviciute/";
const resumeUrl = "https://drive.google.com/file/d/1dwsUHx89Y-kMr1jtp31qLKboCpHkG1SF/view?usp=sharing";

interface IProject {
    backgroundImageUrl: string;
    URL: string;
    className: string;
}

type ProjectType = IProject[];

const projects: ProjectType = [

    {
        backgroundImageUrl: "/static/images/temp1.png",
        URL: "/portfolio",
        className: "col-span-3 md:col-span-2 lg:col-span-1",
    },
    {
        backgroundImageUrl: "/static/images/temp1.png",
        URL: "/",
        className: "col-span-3 lg:col-span-1",
    },
    {
        backgroundImageUrl: "/static/images/temp1.png",
        URL: "/",
        className: "col-span-3 md:col-span-2 lg:col-span-1",
    },
];

export function ProductTypes() {
    return (
        <div className="relative max-w-3xl mx-auto mt-44">
            <div className="temp-circle" />
            <div className="side-text">blender & unity</div>

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-18 divide-x divide-[#191919] outline outline-1 outline-[#191919]">

                <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="icon-div2">
                    <TbTexture className="size-5 mt-2 mr-2" />
                    <div className="flex flex-col">
                        <p>Textures</p>
                        <p className="text-small">seamless textures</p>
                    </div>
                </a>

                <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="icon-div2">
                    <GrObjectUngroup className="size-5 mt-2 mr-2" />
                    <div className="flex flex-col">
                        <p>Materials</p>
                        <p className="text-small">diffuse & normal maps</p>
                    </div>
                </a>

                <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="icon-div2 flex flex-row flex-wrap gap-2 font-medium text-body bg-[#F8F5ED]">
                    <GiCubes className="size-5 mt-2 mr-2" />
                    <div className="flex flex-col">
                        <p>Objects</p>
                        <p className="text-small">.fbx & .blend files</p>
                    </div>
                </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-8 lg:grid-cols-3 text-[#F8F5ED] divide-x divide-[#191919] outline outline-1 outline-[#191919]">

                {projects.map((project, index) => (
                    <a key={index} href={project.URL} className={project.className}>
                        <div className="relative">
                            <img src={project.backgroundImageUrl} alt="Banner" className="relative h-60 w-full" />
                        </div>
                    </a>
                ))}
            </div>

        </div>
    );
}

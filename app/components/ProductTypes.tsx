import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrDocumentPdf } from "react-icons/gr";
import { LuSettings2 } from "react-icons/lu";
import { TbTexture } from "react-icons/tb";
import { GrObjectUngroup } from "react-icons/gr";
import { GiCubes } from "react-icons/gi";

const githubUrl = "https://github.com/zuikeviciute";
const linkedinUrl = "https://www.linkedin.com/in/zuikeviciute/";
const resumeUrl = "https://drive.google.com/file/d/1dwsUHx89Y-kMr1jtp31qLKboCpHkG1SF/view?usp=sharing";

export function ProductTypes() {
    return (
        <div className="relative max-w-3xl mx-auto mt-44">
            <div className="absolute w-16 h-16 project-card z-40 top-14 left-56 bg-[#FAA743] rounded-full" />
            <div className="absolute text-small font-bold -rotate-90 -left-16 -bottom-[196px]">blender & unity</div>

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-8 lg:grid-cols-3 h-18 divide-x divide-[#191919] outline outline-1 outline-[#191919]">

                <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="icon-div2 flex flex-row flex-wrap gap-2 font-medium text-body bg-[#F8F5ED]">
                    <TbTexture className="size-5 mt-2 mr-2" />
                    <div className="flex flex-col">
                        <p>Textures</p>
                        <p className="text-small">seamless textures</p>
                    </div>
                </a>

                <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="icon-div2 flex flex-row flex-wrap gap-2 font-medium text-body bg-[#F8F5ED]">
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
        </div>
    );
}

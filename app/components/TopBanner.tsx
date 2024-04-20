import { FaGithub, FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { GrDocumentPdf } from "react-icons/gr";

const githubUrl = "https://github.com/zuikeviciute";
const linkedinUrl = "https://www.linkedin.com/in/zuikeviciute/";
const resumeUrl = "https://drive.google.com/file/d/1dwsUHx89Y-kMr1jtp31qLKboCpHkG1SF/view?usp=sharing";

export function TopBanner() {
  return (
    <div className="min-h-0 w-full pb-10 md:pb-48 lg:pb-48 relative max-w-3xl mx-auto py-4 px-2">
      <div className="absolute col-span-2 text-[#F8F5ED] bottom-0 right-0">

        <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="icon-div">
          <FaGithub className="color-[#191919] hover:color-[#F17C60] size-5" />
        </a>

        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="icon-div">
          <FaLinkedin className="color-[#191919] hover:color-[#F17C60] size-5" />
        </a>


        <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="icon-div">
          <GrDocumentPdf className="color-[#191919] hover:color-[#F17C60] size-5" />
        </a>
      </div>
    </div>
  );
}

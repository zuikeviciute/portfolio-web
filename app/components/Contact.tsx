import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { useState } from "react";

const linkedinUrl = "https://www.linkedin.com/in/zuikeviciute/";
const githubUrl = "https://github.com/zuikeviciute";

export function Contact() {
  const [buttonText, setButtonText] = useState("Gmail");

  return (
    <div className="text-white py-7">
      <div className="max-w-6xl mx-auto flex justify-center space-x-4">
      <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#191919] hover:text-[#F17C60] rounded-lg px-4 py-2 text-sm font-medium"
        >
          <div
            className={"flex flex-row justify-center items-center text-center"}
          >
            <FaGithub className="color-[#ffffff] hover:color-[#F17C60]"/>
            <div className={"ml-2"}>Github</div>
          </div>
        </a>
      
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#191919] hover:text-[#F17C60] rounded-lg px-4 py-2 text-sm font-medium"
        >
          <div
            className={"flex flex-row justify-center items-center text-center"}
          >
            <FaLinkedin className="color-[#ffffff] hover:color-[#F17C60]" />
            <div className={"ml-2"}>LinkedIn</div>
          </div>
        </a>
        

        <a
          href={"https://drive.google.com/file/d/1dwsUHx89Y-kMr1jtp31qLKboCpHkG1SF/view?usp=sharing"}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#191919] hover:text-[#F17C60] rounded-lg px-4 py-2 text-sm font-medium"
        >
          <div
            className={"flex flex-row justify-center items-center text-center"}
          >
            <FaFileAlt className="color-[#ffffff] hover:color-[#F17C60]"/>
            <div className={"ml-2"}>Resume</div>
          </div>
        </a>
        {/* <div className="inline-block bg-[#191919] rounded-full px-4 py-2 text-sm font-medium border-transparent border-2 hover:border-dashed hover:border-[#BBC842]">
          <button type="submit" onClick={() => {
            setButtonText("Copied");
            navigator.clipboard.writeText('zuikeviciute@gmail.com')
            setTimeout(() => {
              setButtonText("Gmail");
            }, 1000);
          } }
          >
            <div
              className={"flex flex-row justify-center items-center text-center"}
            >
              <SiGmail color={"#ffffff"} />
              <div className={"ml-2"}>{buttonText}</div>
            </div>
          </button>
        </div> */}
      </div>
    </div>
  );
}

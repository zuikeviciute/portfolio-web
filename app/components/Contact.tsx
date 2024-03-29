import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { useState } from "react";

const linkedinUrl = "https://www.linkedin.com/in/zuikeviciute/";
const githubUrl = "https://github.com/zuikeviciute";

export function Contact() {
  const [buttonText, setButtonText] = useState("Gmail");

  return (
    <div className="text-white py-4 pb-10">
      <div className="max-w-6xl mx-auto px-4 flex justify-center space-x-4">
      <a
          href={"https://drive.google.com/file/d/1FbeppYbKA8YF4F62uyCj0FXxzhGXmdTl/view?usp=drive_link"}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#191919] hover:bg-[#6F569E] rounded-full px-4 py-2 text-sm font-medium"
        >
          <div
            className={"flex flex-row justify-center items-center text-center"}
          >
            <FaFileAlt color={"#ffffff"} />
            <div className={"ml-2"}>CV</div>
          </div>
        </a>
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#191919] hover:bg-[#6F569E] rounded-full px-4 py-2 text-sm font-medium"
        >
          <div
            className={"flex flex-row justify-center items-center text-center"}
          >
            <FaLinkedin color={"#ffffff"} />
            <div className={"ml-2"}>LinkedIn</div>
          </div>
        </a>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#191919] hover:bg-[#6F569E] rounded-full px-4 py-2 text-sm font-medium"
        >
          <div
            className={"flex flex-row justify-center items-center text-center"}
          >
            <FaGithub color={"#ffffff"} />
            <div className={"ml-2"}>Github</div>
          </div>
        </a>
        <div className="inline-block bg-[#191919] hover:bg-[#6F569E] rounded-full px-4 py-2 text-sm font-medium">
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
        </div>
      </div>
    </div>
  );
}

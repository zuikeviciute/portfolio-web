import { FaGithub } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { useState } from "react";
const githubUrl = "https://github.com/zuikeviciute";

interface INotes {
  title: string;
  color: string;
  className: string;
}

type NoteType = INotes[];

const notes: NoteType = [
  {
    title: "Text",
    color: "191919",
    className: "colour-box bg-[#191919] hover:text-[#F8F5ED]",
  },
  {
    title: "Background",
    color: "F8F5ED",
    className: "colour-box bg-[#F8F5ED] border-2 border-[#191919]",
  },
  {
    title: "Primary",
    color: "F17C60",
    className: "colour-box bg-[#F17C60]",
  },
  {
    title: "Secondary",
    color: "FAA743",
    className: "colour-box bg-[#FAA743]",
  },
  {
    title: "Tertiary",
    color: "BBC842",
    className: "colour-box bg-[#BBC842]",
  },
];

interface IDetails {
  title: string;
  details: string;
  className: string;
  image: string;
}

type DetailType = IDetails[];

const descriptions: DetailType = [
  {
    title: "Text",
    details: "191919",
    className: "colour-box bg-[#191919] border-2 border-[#F8F5ED] hover:text-[#F8F5ED]",
    image: "",
  },
];

export function DesignSystem() {
  const [buttonText, setButtonText] = useState("Copy");

  return (
    <div className="py-4 px-4 text-[#191919] max-w-3xl mx-auto grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-4 rounded-lg">

      <div className={"lg:col-span-8 text-title text-[#191919] pb-3 pt-6 text-2xl px-0"}>Design System</div>
      <div className={"lg:col-span-5 text-body text-[#191919] p-0"}>Colours</div>
      <div className={"lg:col-span-3 text-body text-[#191919] p-0 pl-6"}>Fonts</div>

      {notes.map((note, index) => (
        <div key={index}>
          <div className={note.className}
            onClick={() => {
              setButtonText("Copied");
              navigator.clipboard.writeText(note.color)
              setTimeout(() => {
                setButtonText("Copy");
              }, 1000);
            }}>
            <div className={"pt-1"}>{buttonText}</div>
            <div>{note.color}</div>
          </div>
          <div className="relative colour-box-text font-medium">{note.title}</div>
        </div>

      ))}

      <div className="lg:col-span-3 col-span-3 lg:order-7 text-left ml-4">
        <div className="p-2 text-3xl font-bold">Title 30px bold</div>
        <div className="p-2 text-base font-medium">Body 16px regualr / semibold</div>
        <div className="p-2 text-sm font-medium">Small 14px regular</div>
      </div>

      <div className={"lg:col-span-5 text-body text-[#191919] p-0 pt-6 lg:order-8"}>Buttons</div>
      <div className={"lg:col-span-3 text-body text-[#191919] p-0 pl-6 pt-6 lg:order-9"}>Cards</div>

      <div className="ml-2 flex flex-row gap-4 lg:order-10">
        <div className={"left-2 bottom-2 flex flex-row justify-center text-nowrap items-center text-center text-sm font-medium bg-[#191919] text-white p-1 rounded-lg"}>
          <FaGithub color={"#ffffff"} />
          <div className={"mx-2"}>external button</div>
        </div>

        <div className={"left-2 bottom-2 flex flex-row justify-center text-nowrap items-center text-center text-sm font-medium bg-[#191919] text-white p-1 rounded-lg"}>
          <div className={"mx-2"}>button to different page</div>
          <FaArrowRight color={"#ffffff"} />
        </div>
      </div>
    </div>

  );
}

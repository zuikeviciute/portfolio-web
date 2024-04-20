import { FaGithub } from "react-icons/fa";
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
    className: "colour-box bg-[#191919] border-2 border-[#F8F5ED] hover:text-[#F8F5ED]",
  },
  {
    title: "Background",
    color: "F8F5ED",
    className: "colour-box bg-[#F8F5ED]",
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

export function ProjectNotes() {
  const [buttonText, setButtonText] = useState("Copy");
  const [buttonText2, setButtonText2] = useState("Primary #191919");

  return (
    <div className="py-4 px-4 text-[#F8F5ED] max-w-3xl mx-auto grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-4 rounded-lg bg-[#191919]">

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

    </div>
  );
}

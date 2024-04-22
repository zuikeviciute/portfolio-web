import { FaArrowLeft } from "react-icons/fa";

export function Breadcrumb() {
  return (
    <div className="max-w-3xl mx-auto flex justify-left space-x-4 p-6">

        <div className={"flex flex-row justify-center items-center text-center text-[#F17C60]"}>
          <FaArrowLeft/>
          <a href="/" rel="noopener noreferrer" className="ml-2 text-small text-[#F17C60]">home</a>
          <div className="mx-2 text-small text-[#191919]">/</div>
          <div className="ml-2 text-small text-[#191919]">Portfolio</div>
        </div>

      </div>
  );
}

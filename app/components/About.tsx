import { FaArrowRight } from "react-icons/fa6";
import { BiLogoTypescript, BiLogoJavascript } from "react-icons/bi";

export function About() {
  return (
    <div className="relative max-w-2xl mx-auto p-4">
      {/* <img src={'/static/images/maupak.png'} alt="Banner" className="absolute width-44 h-44 w-44 col-span-3 lg:col-span-2 row-span-2 rounded-lg z-0" /> */}
      {/* <div className="relative w-12 h-12 project-card border-2 border-[#191919] z-0"/>
      <div className="absolute text-small font-medium -rotate-90 -left-6 top-8">web dev</div> */}

      <div className="relative max-w-3xl mx-auto ml-16 mt-32 py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-6 items-end p-4 rounded-lg z-40">
        
        <h1 className="col-span-4 text-title text-3xl rounded-lg italic bg-[#F0F0E6]">Hi! I'm Laura,</h1>
        <p className="col-span-5 text-body rounded-lg bg-[#F0F0E6]">a web developer with academic experience working in small teams and
          creating web applications. </p>

        <div className="ml-2 flex flex-row gap-4 col-span-6">
          <a href="/more" className={"left-2 bottom-2 flex flex-row justify-center items-center text-center text-sm font-medium bg-[#191919] text-white p-1 rounded-lg"}>
            <div className={"ml-1 mr-2"}>more about me</div>
            <FaArrowRight className={"mr-1"} />
          </a>
        </div>


        {/* <p className="col-span-5 text-body rounded-lg">I studied Computing Science at UWS, Software Development at NCL and have
          been programming in various languages since I was 16.  </p>

        

        <p className="col-span-5 text-body rounded-lg">Currently I'm learning Typescript, JavaScript and React,
          while looking for a full-time, junior, internship or apprenticeship position as a web developer.
        </p>

        <div className="relative rounded-lg flex flex-row gap-2 flex-wrap justify-end ">
          <BiLogoTypescript className={"absolute top-2 right-2 mr-1 size-6 text-[#959492]"} />
          <BiLogoJavascript className={"size-6 text-[#959492]"} />
        </div> */}


      </div>
    </div>


  );
}

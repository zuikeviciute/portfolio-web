import { FaArrowRight } from "react-icons/fa6";

export function About() {
  return (
    <div className="relative max-w-3xl mx-auto p-4">

      <div className="max-w-3xl mx-auto py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-6 items-end p-4 rounded-lg">
        {/* <img src={'/static/images/laura2.jpeg'} alt="Banner" className="width-44 h-36 w-full col-span-3 lg:col-span-2 row-span-2 right-2 rounded-lg mr-4 mb-4 lg:mb-1" /> */}
        <h1 className="col-span-3 text-title text-3xl rounded-lg italic">Hi! I'm Laura,</h1>
        <p className="col-span-4 text-body rounded-lg">a web developer with academic experience working in small teams,
          creating web applications with backend architecture and interactive front-end design. </p>

        <div className="ml-2 flex flex-row gap-4 col-span-6">
          <a href="/" className={"left-2 bottom-2 flex flex-row justify-center items-center text-center text-sm font-medium bg-[#191919] text-white p-1 rounded-lg"}>
            <div className={"ml-1 mr-2"}>more about me</div>
            <FaArrowRight className={"mr-1"} />
          </a>
        </div>

      </div>
    </div>


  );
}

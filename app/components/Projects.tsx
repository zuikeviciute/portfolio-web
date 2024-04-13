import { FaGithub} from "react-icons/fa";
const githubUrl = "https://github.com/zuikeviciute";

export function Projects() {
  return (
    <div className="py-4 mx-6">
      <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
        
        <div className="relative col-span-3 lg:col-span-2 order-1">
          <a href={"https://github.com/zuikeviciute/portfolio-web"}>
                <img src={"/static/images/portfolio_img.png"} alt="project image" className="object-cover h-56 w-full border-[#191919] border-2 rounded-lg hover:outline hover:outline-4 hover:outline-offset-0 outline-[#F56441]" />
                <div className={"absolute left-2 bottom-2 flex flex-row justify-center items-center text-center text-sm font-medium bg-[#191919] p-1 rounded-lg text-white"}>
                    <div className={"mx-2"}>{"Portfolio Website"}</div>
                </div>
            </a>
        </div>

        <div className="relative col-span-3 lg:col-span-3 order-2">
          <a href={"https://github.com/zuikeviciute/portfolio-web"}>
                <img src={"/static/images/maupak.png"} alt="project image" className="object-cover h-56 w-full border-[#191919] border-2 rounded-lg hover:outline hover:outline-4 hover:outline-offset-0 outline-[#FAA743]" />
                <div className={"absolute left-2 bottom-2 flex flex-row justify-center items-center text-center text-sm font-medium bg-[#191919] p-1 rounded-lg text-white"}>
                    <div className={"mx-2"}>{"Smart Projector App Design"}</div>
                </div>
            </a>
        </div>

        <div className="lg:col-span-1 lg:m-10 lg:pt-16 col-span-0 -order-1 lg:order-3">
          <div className="text-white text-md font-medium">2024</div>
        </div>

        <div className="lg:col-span-1 lg:m-10 pt-16 col-span-3 order-3">
          <div className="text-white text-md font-medium">2023</div>
        </div>

        <div className="relative col-span-3 order-4">
          <a href={"https://github.com/zuikeviciute/3D-Serious-Game"}>
                <img src={"/static/images/unity.png"} alt="project image" className="object-cover h-56 w-full border-[#191919] border-2 rounded-lg hover:outline hover:outline-4 hover:outline-offset-0 outline-[#BBC842]" />
                <div className={"absolute left-2 bottom-2 flex flex-row justify-center items-center text-center text-sm font-medium bg-[#191919] p-1 rounded-lg text-white"}>
                    <div className={"mx-2"}>{"3D Unity Game"}</div>
                </div>
            </a>
        </div>
{/* 
        <div className="relative lg:col-span-2 col-span-3 order-5">
          <a href={"https://zuikeviciute.vercel.app/"}>
                <img src={"/static/images/more_projects.png"} alt="project image" className="object-cover h-56 w-full border-[#191919] border-2 rounded-lg hover:outline hover:outline-4 hover:outline-offset-0 outline-[#BBC842]" />
                <div className={"absolute left-2 bottom-2 flex flex-row justify-center items-center text-center text-sm font-medium bg-[#191919] p-1 rounded-lg text-white"}>
                    <div className={"mx-2"}>{"Other"}</div>
                </div>
            </a>
        </div> */}
      </div>
    </div>
  );
}

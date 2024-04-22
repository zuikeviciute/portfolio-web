import { FaGithub } from "react-icons/fa";
import { CgFigma } from "react-icons/cg";
import { FaUnity } from "react-icons/fa";
import { useState } from "react";
const githubUrl = "https://github.com/zuikeviciute";

export function UnityDetails() {

    return (
        <div className="py-4 px-4 max-w-3xl mx-auto grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-4 rounded-lg">

            <img src={"/static/images/unity.png"} alt="Banner" className="project-card lg:col-span-3 col-span-3 h-44" />
            <div className="lg:col-span-5 col-span-5">
                <div className={"text-title text-2xl"}>3D Unity Game</div>
                <div className={"text-body"}>A prototype of a Serious Game for Computer Programming Education. Made with C#, Unity and Visual Studio.</div>

                <div className="ml-2 flex flex-row gap-4">
                    <a href="/unity" className={"left-2 bottom-2 flex flex-row justify-center items-center text-center text-sm font-medium bg-[#191919] text-white p-1 rounded-lg"}>
                        <FaGithub className={"ml-1"} />
                        <div className={"mx-2"}>github repo</div>
                    </a>

                    <a href="/unity" className={"left-2 bottom-2 flex flex-row justify-center items-center text-center text-sm font-medium bg-[#191919] text-white p-1 rounded-lg"}>
                        <FaUnity color={"#ffffff"} />
                        <div className={"mx-2"}>unity demo</div>
                    </a>
                </div>
            </div>

            <div className="lg:col-span-8 col-span-5">
                <div className={"text-small flex flex-row justify-center"}>-- section in progress --</div>
            </div>
        </div>

    );
}

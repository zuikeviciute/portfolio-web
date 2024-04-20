import type { MetaFunction } from "@remix-run/node";
import { TopBanner } from "~/components/TopBanner";
import { Projects } from "~/components/Projects";
import { About } from "~/components/About";
import { Tape } from "~/components/Tape";
import { Soon } from "~/components/Soon";
import { Footer } from "~/components/Footer";
import { Breadcrumb } from "~/components/Breadcrumb";
import { useState } from "react";
import { json, redirect } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Laura Zuikeviciute" },
    { name: "description", content: "Welcome to my website!" },
  ];
};

export default function Index() {
  const [buttonText, setButtonText] = useState("Notes");

  return (
    <main className={"bg-[url('/static/images/paperdark3.png')] w-screen h-screen overflow-x-hidden"}>
      <TopBanner />
      <About/>
      
      <Projects />
      <Tape />
      <Soon/>
      <Footer />
    </main>
  );
}

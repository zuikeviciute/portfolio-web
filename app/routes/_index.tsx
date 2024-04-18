import type { MetaFunction } from "@remix-run/node";
import { TopBanner } from "~/components/TopBanner";
import { Projects } from "~/components/Projects";
import { About } from "~/components/About";
import { Footer } from "~/components/Footer";
import { Contact } from "~/components/Contact";
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
    <main className={"bg-[#F8F5ED] w-screen h-screen overflow-x-hidden"}>
      <TopBanner />
      <About/>
      {/* <Contact /> */}
      <Projects />
      <Footer />
    </main>
  );
}

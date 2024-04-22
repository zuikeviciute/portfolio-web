import type { MetaFunction } from "@remix-run/node";
import { Contact } from "~/components/Contact";
import { About } from "~/components/About";
import { Footer } from "~/components/Footer";
import { Breadcrumb } from "~/components/Breadcrumb";
import { ProjectorDetails } from "~/components/ProjectorDetails";

export const meta: MetaFunction = () => {
  return [
    { title: "Laura Zuikeviciute" },
    { name: "description", content: "Welcome to my website!" },
  ];
};

export default function Notes() {
  return (
    <main className={"bg-[url('/static/images/paperMid.png')] w-screen h-screen overflow-x-hidden"}>
      <Contact />
      <Breadcrumb />
      <ProjectorDetails/>
      
      <Footer />
    </main>
  );
}

import type { MetaFunction } from "@remix-run/node";
import { TopBanner } from "~/components/TopBanner";
import { About } from "~/components/About";
import { Footer } from "~/components/Footer";
import { Contact } from "~/components/Contact";
import { ProjectNotes } from "~/components/ProjectNotes";

export const meta: MetaFunction = () => {
  return [
    { title: "Laura Zuikeviciute" },
    { name: "description", content: "Welcome to my website!" },
  ];
};

export default function Notes() {
  return (
    <main className={"bg-[#F8F5ED] w-screen h-screen overflow-x-hidden"}>
      <TopBanner />
      <About/>
      {/* <Contact /> */}
      <ProjectNotes/>
      <Footer />
    </main>
  );
}

import type { MetaFunction } from "@remix-run/node";
import { TopBanner } from "~/components/TopBanner";
import { Projects } from "~/components/Projects";
import { About } from "~/components/About";
import { Footer } from "~/components/Footer";
import { Contact } from "~/components/Contact";

export const meta: MetaFunction = () => {
  return [
    { title: "Laura Zuikeviciute" },
    { name: "description", content: "Welcome to my website!" },
  ];
};

export default function Index() {
  return (
    <main className={"bg-[#191919] w-screen h-screen overflow-x-hidden"}>
      <TopBanner />
      <About/>
      <Contact />
      <Projects />
      <Footer />
    </main>
  );
}

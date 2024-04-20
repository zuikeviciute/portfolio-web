import type { MetaFunction } from "@remix-run/node";
import { TopBanner } from "~/components/TopBanner";
import { About } from "~/components/About";
import { Soon } from "~/components/Soon";
import { Footer } from "~/components/Footer";
import { Breadcrumb } from "~/components/Breadcrumb";
import { ProjectNotes } from "~/components/ProjectNotes";

export const meta: MetaFunction = () => {
  return [
    { title: "Laura Zuikeviciute" },
    { name: "description", content: "Welcome to my website!" },
  ];
};

export default function Notes() {
  return (
    <main className={"bg-[url('/static/images/paperdark3.png')] w-screen h-screen overflow-x-hidden"}>
      <TopBanner />
      <Breadcrumb />
      <ProjectNotes/>
      <Soon/>
      <Footer />
    </main>
  );
}

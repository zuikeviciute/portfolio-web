import type { MetaFunction } from "@remix-run/node";
import { Contact } from "~/components/Contact";
import { About } from "~/components/About";
import { Footer } from "~/components/Footer";
import { DesignSystem } from "~/components/DesignSystem";
import { Breadcrumb } from "~/components/Breadcrumb";
import { Details } from "~/components/Details";

export const meta: MetaFunction = () => {
  return [
    { title: "Laura Zuikeviciute" },
    { name: "description", content: "Welcome to my website!" },
  ];
};

export default function Portfolio() {
  return (
    <main className={"paper-bg w-screen h-screen overflow-x-hidden"}>
      <Contact />
      <Breadcrumb />
      <Details/>
      <DesignSystem />
      <Footer />
    </main>
  );
}

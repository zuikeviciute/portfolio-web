import type { MetaFunction } from "@remix-run/node";
import { Navbar } from "~/components/Navbar";
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
    <main className={"bg-[#F8F5ED] w-screen h-screen overflow-x-hidden"}>
      <Navbar />
      {/* <Breadcrumb /> */}
      <Details/>
      <DesignSystem />
      <Footer />
    </main>
  );
}
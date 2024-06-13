import type { MetaFunction } from "@remix-run/node";
import { Navbar } from "~/components/Navbar";
import { Footer } from "~/components/Footer";

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
      <Footer />
    </main>
  );
}

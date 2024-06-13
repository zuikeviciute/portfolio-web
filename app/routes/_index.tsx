import type { MetaFunction } from "@remix-run/node";
import { Navbar } from "~/components/Navbar";
import { ProductTypes } from "~/components/ProductTypes";
import { Products } from "~/components/Products";
import { Footer } from "~/components/Footer";
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
      <Navbar />
      <ProductTypes />
      <Products />
      <Footer />
    </main>
  );
}

import Image from "next/image";
import Link from "next/link";


import Navbar from "../components/navbar";
import About from "@/components/about";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero/>
      <div className="border-b border-gray my-5 mx-4"></div>
     <About/>
      <div className="border-b border-gray my-5 mx-4"></div>
      <Contact/>
      <Footer/>
    </>
  );
}

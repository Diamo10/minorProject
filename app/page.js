import Image from "next/image";
import Link from "next/link";
import hoomeImage from "../public/home2.jpg";
import homeImage from "../public/home.jpg";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Home Section */}
      <section className="" id="home">
        <Image src={hoomeImage} alt={'HomeImage'} width={1920} height={1080} layout="responsive"/>
        <div className="text-olive font-bold text-2xl mx-4 tablet:text-6xl tablet:mt-8">Precision in Every Investment.</div>
        <div className="text-olive font-semibold text-xl mx-4 tablet:text-5xl tablet:mt-4">{`Your success is our algorithm's mission`}</div>
        <div className="mx-4 tablet:text-3xl tablet:mt-4 tablet:mb-3">Let our recommendation system guide you to a prosperous financial future.</div>





      </section>


      {/* About Section */}
      <section className="" id="about">
        
      </section>


    </>
  );
}

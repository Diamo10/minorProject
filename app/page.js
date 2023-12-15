import Image from "next/image";
import Link from "next/link";
import aboutImage from "../public/hello.jpg"

export default function Home() {
  return (
    <>
      <nav className="bg-col flex text-white m-auto h-[3rem] pl-[24px] pr-[24px]">
        <div className="text-white font-extrabold text-2xl m-auto">
          INVESTORHUB
        </div>
        <ul className="list-none flex m-auto">
          <li className="text-white ml-8">Home</li>
          <li className="ml-8">
            <Link href="#about">About us</Link>
          </li>
          <li className=" ml-8">Contact</li>
        </ul>
        <ul className="flex m-auto">
          <li className="ml-[36rem]">Login</li>
          <li className="ml-12 bg-white text-col m-auto h-[2rem] w-[6rem] rounded-[16px] p-auto">
            <div className="p-[4px] pl-[20px] ">Signup</div>
          </li>
        </ul>
      </nav>

      <section id="Home">
        <div className="grid grid-cols-2 min-h-screen min-w-full pl-[24px] pr-[24px]">
          <div className="m-auto text-col font-semibold">WE INVEST</div>
          <div>
            <Image></Image>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="min-h-screen bg-col text-white pl-[24px] pr-[24px] m-auto"
      >
        <div className="grid grid-cols-2 min-h-screen min-w-full pl-[24px] pr-[24px]">
        <div className="m-auto" >
            <Image
              src={aboutImage}
              width={1000}
              height={1200}
              alt="This is the about image"
            />
          </div>
          <div className="m-auto  font-semibold">About us </div>
        </div>
      </section>

      <section id="contact" className="min-h-screen">
        This is the Contact Section.
      </section>
    </>
  );
}

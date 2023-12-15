import Image from "next/image";
import Link from "next/link";
import aboutImage from "../public/hello.jpg";

export default function Home() {
  return (
    <>
      <nav className="bg-col flex text-white m-auto h-[3rem] pl-[24px] pr-[24px]">
        <div className="text-white font-extrabold text-2xl m-auto">
          INVESTORHUB
        </div>
        <ul className="list-none flex m-auto">
          <li className="text-white ml-8"><Link href="#home">Home</Link></li>
          <li className="ml-8">
            <Link href="#about">About us</Link>
          </li>
          <li className=" ml-8"><Link href="#contact">Contact</Link></li>
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
        className="min-h-full bg-col text-white pl-[24px] pr-[24px] m-auto"
      >
        <div className="grid grid-cols-2 h-[400px] pl-[24px] pr-[24px]">
          <div
            className="m-auto box-border border-4 rounded-xl
        "
          >
            <Image
              src={aboutImage}
              width={500}
              height={500}
              alt="This is the about image"
              loading="lazy"
            />
          </div>
          <div>
            <div className=" ml-[200px] font-extrabold text-2xl mt-[48px]">
              What is InvestorHub?{" "}
            </div>
            <div className="text-justify mt-[16px]">
              Investor is a web app that connects the entrpreneurs with the
              investor. Unlike traditional investing and pitching techinque,
              InvestorHub provied you the platform to pitch the idea only once
              and deploy to multiple investor. Investors can use our website to
              invest their principle for the right reason and to discover and
              implement a number of excellent ideas that are currently
              unacknowledged. It further helps to save time by building the
              connections quickly as our platform enables the connection between
              various investors and entrepreneurs. Integrating real-time
              information and idea participation is how we hope to enable
              investors to make informed decisions
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="min-h-screen">
        <div>
          Contact us
        </div>
        <div>phone number: 9815397684</div>
      </section>
    </>
  );
}

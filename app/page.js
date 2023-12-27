import Image from "next/image";
import Link from "next/link";
import hoomeImage from "../public/home2.jpg";
import aboutImage from "../public/about.jpg";
import homeImage from "../public/home.jpg";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Home Section */}
      <section className="" id="home">
        <Image
          src={hoomeImage}
          alt={"HomeImage"}
          width={1920}
          height={1080}
          layout="responsive"
          className="opacity-80"
        />
        <div className="text-olive font-bold text-2xl mx-4 tablet:text-6xl  tablet:relative tablet:mt-[-190px]">
          Precision in Every Investment.
        </div>
        <div className="text-olive font-semibold text-xl mx-4 tablet:text-5xl tablet:mt-4 tablet:relative">{`Your success is our algorithm's mission`}</div>
        <div className="mx-4 tablet:text-3xl tablet:mt-4 tablet:mb-3 tablet:relative">
          Let our recommendation system guide you to a prosperous financial
          future.
        </div>
      </section>

      <div className="border-b border-gray my-5 mx-4"></div>
      <div className="font-bold text-xl ml-6  ">
        <span className="">Why Investorhub?</span>
      </div>

      <div className="ml-6">
        <div className="mt-4 flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <span className="ml-2 font-semibold">
            Multiple startups at a place
          </span>
        </div>
        <div className="ml-8">
          <span className="text-gray">
            You can find the Multiple startup of different field in a place.
          </span>
        </div>
      </div>

      <div className="ml-6">
        <div className="mt-4 flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <span className="ml-2 font-semibold">
            Multiple startups at a place
          </span>
        </div>
        <div className="ml-8">
          <span className="text-gray">
            You can find the Multiple startup of different field in a place.
          </span>
        </div>
      </div>

      <div className="ml-6">
        <div className="mt-4 flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <span className="ml-2 font-semibold">
            Multiple startups at a place
          </span>
        </div>
        <div className="ml-8">
          <span className="text-gray">
            You can find the Multiple startup of different field in a place.
          </span>
        </div>
      </div>

      <div className="ml-6">
        <div className="mt-4 flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <span className="ml-2 font-semibold">
            Multiple startups at a place
          </span>
        </div>
        <div className="ml-8">
          <span className="text-gray">
            You can find the Multiple startup of different field in a place.
          </span>
        </div>
      </div>

      <div className="border-b border-gray my-5 mx-4"></div>

      {/* About Section */}
      <section className="" id="about">
        <div className="grid grid-cols-1 tablet:grid-cols-2 mx-6">
          <div className=" flex items-center">
            <Image
              src={aboutImage}
              alt="About image"
              width={700}
              height={700}
              layout="responsive"
              className="items-center"
            />
          </div>
          <div className=" tablet:mt-24">
            <span className="font-bold flex text-xl text-center justify-center mt-[24px]">
              About us
            </span>
            <div className="mt-8 ml-3">
              <div className="text-justify">
                {`Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting,`}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="border-b border-gray my-5 mx-4"></div>

      {/* contact section */}
      <section id="contact" className="mx-6 tablet:mx-[240px]">
        <p className="text-center font-bold text-xl mt-4">Contact us</p>
        <div className="grid grid-cols-1 tablet:grid-cols-2 tablet:gap-3 ">
          <div className="">
            <label for="fname" className="">First Name</label><br/>
            <input type="text" name="fname" className=" border border-gray text-black rounded-lg focus:ring-black block w-full p-2.5 placeholder:text-gray " placeholder="First Name" required/>
          </div>
          <div className=""> <label for="lname" className="">Last Name</label><br/>
            <input type="text" name="lname" className=" border border-gray text-black rounded-lg focus:ring-black block w-full p-2.5 placeholder:text-gray " placeholder="Last Name" required/>
            </div>

        </div>
        <div className=""> <label for="email" className="">Email</label><br/>
            <input type="email" name="email" className=" border border-gray text-black rounded-lg hover:ring-red-700 focus:ring-black block w-full p-2.5 placeholder:text-gray " placeholder="exmaple@email.com" required/>
            </div>
            <div className=""> 
            <label for="msg" className="">Message</label><br/>
            <textarea name="msg" className="textarea border border-gray  text-black rounded-lg block w-full p-2.5 mb-6" placeholder="Message"></textarea>
            </div>

        <div className="font-bold text-center mx-[80px] tablet:mx-[250px] bg-olive text-white p-[9px] rounded-lg  hover:font-extrabold cursor-pointer">
            Send Message
          </div>







      </section>


      <section className="text-center bg-olive text-white mt-12 " id="">
        <footer className="footer footer-center p-4 bg-base-300 text-base-content">
          <aside>
            <p>Copyright © 2023 - All right reserved by Investor Recommendor System</p>
          </aside>
        </footer>
      </section>
    </>
  );
}

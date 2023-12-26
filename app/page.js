import Image from "next/image";
import Link from "next/link";
import aboutImage from "../public/hello.jpg";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      <div className="m-4">
        <div className="flex justify-center mt-4">
          <div className="text-2xl font-bold text-olive ">
            <span className="text-[32px]">Precision in every Invesment.</span>
            <br />
            <span className="">{`Your sucsess is our algoritm's mission.`}</span>
          </div>
        </div>
        <div className=" flex justify-center text-xl">
          Let our recommendation engine guide you to a <br/>
          prosperous financial future.
        </div>
      </div>
    </>
  );
}

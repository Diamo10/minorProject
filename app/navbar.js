import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-col flex text-white m-auto h-[3rem] pl-[24px] pr-[24px]">
      <div className="text-white font-extrabold text-2xl m-auto">
        INVESTORHUB
      </div>
      <ul className="list-none flex m-auto">
        <li className="text-white ml-8">Home</li>
        <li className="ml-8"><Link href='./page/#about'>About us</Link></li>
        <li className=" ml-8">Contact</li>
      </ul>
      <ul className="flex m-auto">
        <li className="ml-[36rem]">Login</li>
        <li className="ml-12 bg-white text-col m-auto h-[2rem] w-[6rem] rounded-[16px] p-auto">
          <div className="p-[4px] pl-[20px] ">Signup</div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

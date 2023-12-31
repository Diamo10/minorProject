"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [state, setState] = useState(false);
  const [svgClicked, setSvgClicked] = useState(false);

  const toggleMenu = () => {
    setState(!state);
    setSvgClicked(!svgClicked);
  };

  return (
    <>
      {/* navbar */}
      <nav className="bg-olive text-white h-16 w-full flex overflow-hidden ">
        <button onClick={toggleMenu}>
          {svgClicked ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 tablet:hidden"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6   tablet:hidden"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
        <div className="flex items-center">
          <div className="font-bold text-[12px]  ml-3">Investor RECOMENDER SYSTEM</div>
          <div className="hidden tablet:inline-block tablet:right-28 tablet:absolute ">
            <ul className="my-8 flex">
              <li className="mx-4">
                <Link href="/">Home</Link>
              </li>
              <li className="mx-4">
                <Link href="/about">About</Link>
              </li>
              <li className="mx-4">
                <Link href="/contact">contact</Link>
              </li>
              <li className="mx-4">
                <Link href="/login">Login</Link>
              </li>
            </ul>
          </div>
          <Link href="/getstarted"><div className=" flex-between font-bold bg-white text-olive p-[9px] rounded-lg absolute right-1 mt-[-20px] mr-[8px] hover:font-extrabold cursor-pointer">Get Started
          </div></Link>
        </div>
      </nav>
      {state && (
        <>
          <div className=" tablet:hidden min-h-screen overflow-y-hidden min-w-full overflow-hidden  text-center text-lg font-semibold text-olive col-gap-9">
            <ul className="my-8">
              <li className="my-4">
                <Link href="/">Home</Link>
              </li>
              <li className="my-4">
                <Link href="/about">About</Link>
              </li>
              <li className="my-4">
                <Link href="/contact">contact</Link>
              </li>
              <li className="my-4">
                <Link href="/login">Login</Link>
              </li>
            </ul>
            <div className=" w-full flex font-bold bg-olive text-white p-[9px] rounded-lg  hover:font-extrabold cursor-pointer absolute bottom-2 justify-center">
              SIGNUP
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;

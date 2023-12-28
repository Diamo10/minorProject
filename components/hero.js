import React from 'react'
import Image from 'next/image';
import hoomeImage from "../public/home2.jpg";
import homeImage from "../public/home.jpg";

const Hero = () => {
  return (
    <>
    <section className="" id="home">
        <Image
          src={hoomeImage}
          alt={"HomeImage"}
          width={1920}
          height={1080}
          layout="responsive"
          className="opacity-50"
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

      </>
  )
}

export default Hero
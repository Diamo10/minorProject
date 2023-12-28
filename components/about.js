import Image from "next/image"
import aboutImage from "../public/about.jpg";


const About = () => {
  return (
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
  )
}

export default About
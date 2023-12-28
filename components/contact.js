"use client"
import { useState } from "react"

const Contact = () => {
    const [fname,setFname] = useState("");
    const [lname,setLname] = useState("");
    const [email,setEmail] = useState("");
    const [message, setMessage] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log( "First name:",fname);
        console.log("Second Name:",lname);
        console.log("Email:",email);
        console.log("Message:",message);
    }




  return (
    <>
    <section id="contact" className="mx-6 tablet:mx-[240px]">
    <form onSubmit={handleSubmit}>
    <p className="text-center font-bold text-xl mt-4">Contact us</p>
    <div className="grid grid-cols-1 tablet:grid-cols-2 tablet:gap-3 ">
      <div className="">
        <label htmlFor="fname" className="">First Name</label><br/>
        <input type="text" onChange={(e) =>setFname(e.target.value)} value={fname} name="fname" className=" border border-gray text-black rounded-lg focus:ring-black block w-full p-2.5 placeholder:text-gray " placeholder="First Name" required/>
      </div>
      <div className=""> <label htmlFor="lname" className="">Last Name</label><br/>
        <input type="text" onChange={(e) =>setLname(e.target.value)} value={lname} name="lname" className=" border border-gray text-black rounded-lg focus:ring-black block w-full p-2.5 placeholder:text-gray " placeholder="Last Name" required/>
        </div>

    </div>
    <div className=""> <label htmlFor="email" className="">Email</label><br/>
        <input type="email" onChange={(e) =>setEmail(e.target.value)} value={email} name="email" className=" border border-gray text-black rounded-lg hover:ring-red-700 focus:ring-black block w-full p-2.5 placeholder:text-gray " placeholder="exmaple@email.com" required/>
        </div>
        <div className=""> 
        <label htmlFor="msg" className="">Message</label><br/>
        <textarea name="msg" onChange={(e) =>setMessage(e.target.value)} value={message} className="textarea border border-gray  text-black rounded-lg block w-full p-2.5 mb-6" placeholder="Message"></textarea>
        </div>

    <button type="submit" className="font-bold text-center mx-[80px] tablet:mx-[250px] bg-olive text-white p-[9px] rounded-lg  hover:font-extrabold cursor-pointer">
        Send Message
      </button>
  </form>
  </section>
  </>
  )
}

export default Contact
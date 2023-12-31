"use client";
import { useState } from "react";
import { uploadIdeaForm, SignupFields } from "../../components/inputf";


const mobilecss =
  "border border-gray text-black rounded-lg focus:ring-black block w-full p-2.5 placeholder:text-gray";
const laptopcss = "border border-olive";

const Signup = () => {
  const [formData,setFormData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('form data:', formData)
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name] : e.target.value,
    }
    )
  }
  return (
    <>
     <div className="font-bold text-olive text-xl  ml-4 mt-4 mb-4">
        INVESTOR RECOMENDER SYSTEM
      </div>
      <div className="flex justify-center">
      <div className="  shadow-2xl shadow-olive  mt-[64px] border border-olive  rounded-3xl p-2">
        <form onSubmit={handleSubmit}>
        <div className="text-lg font-extrabold ">LOGIN</div>
            <div className="text-gray">{`Your success is our algorithm's mission.`}</div>
            <div className="border-b border-gray my-5 mx-4"></div>
          {SignupFields.map((field) => (
            <div className="my-2">
              <div key={field.id} className="">
                <label htmlFor={field.labelFor}>{field.labelText}</label>
                <input
                  type={field.type}
                  id={field.id}
                  name={field.name}
                  autoComplete={field.autoComplete}
                  required={field.isRequired}
                  placeholder={field.placeholder}
                  className={mobilecss}
                  onChange={handleChange}
                />
              </div>
            </div>
          ))}
           <div className="flex justify-center"> <button className="bg-olive text-white rounded-lg px-8 py-2 mt-6 ">Login</button></div>
        </form>
      </div>
      </div>
    </>
  );
};

export default Signup;

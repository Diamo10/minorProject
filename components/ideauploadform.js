'use client'
import { useState } from "react";
import { uploadIdeaForm } from "./inputf";

const Ideauploadform = () => {
    const [formData, setFormData] = useState({});
    
    const handleChange = (e)=>
    {
        setFormData(
            {
                ...formData,
                [e.target.name] : e.target.value,
            }
            
        )
    }
    console.log("hello")



    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log('form data:', formData);

    }
  return (
    <>
      <form className="m-2 p-2" onSubmit={handleSubmit}>
        {/* container */}
        <div className="flex justify-center p-4">
          <div className="bg-slate-300 border-olive border rounded-3xl min-w-[80%] shadow-olive shadow-2xl ">
            <div className="">
              <div className="bg-slate-300 rounded-3xl">
                <div className="p-4">
                  <label
                    htmlFor="title"
                    className="block font-extrabold text-3xl"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    required="true"
                    placeholder="Enter yout title here..."
                    className=" rounded-2xl p-3 min-w-[100%] focus:ring-olive"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* description container */}
        <div className="flex justify-center p-4">
          <div className="bg-slate-300 border-olive border rounded-3xl min-w-[80%] shadow-olive shadow-2xl ">
            <div className="">
              <div className="bg-slate-300 rounded-3xl">
                {
                    uploadIdeaForm.map((field)=>(
                        <div className="p-4" key={field.id}>
                  <label
                    htmlFor={field.labelFor}
                    className="block font-extrabold text-3xl"
                  >
                    {field.labelText}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    required={field.isRequired}
                    placeholder={field.placeholder}
                    multiple={field.multiple}
                    className={field.className}
                    onChange={handleChange}
                  />
                </div>
                    ))
                }
                 <div className="flex justify-center"> <button className="bg-olive text-white rounded-lg px-8 py-2 mt-6 mb-6 ">Login</button></div>
                
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Ideauploadform;

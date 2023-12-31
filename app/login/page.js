

const Login = () => {
  return (
    <>
    {/* name of the website */}
      <div className="font-bold text-olive text-xl  ml-4 mt-4 mb-4">
        INVESTOR RECOMENDER SYSTEM
      </div>
      {/* container */}
      <div className="flex justify-center p-4 mt-[132px]">
        {/* card */}
        <div className=" border border-olive rounded-2xl p-4 min-w-[85%] shadow-2xl">
          {/* text */}
          <div className="">
            <div className="text-lg font-extrabold ">LOGIN</div>
            <div className="text-gray">{`Your success is our algorithm's mission.`}</div>
            <div className="border-b border-gray my-5 mx-4"></div>
            {/* form */}
            <form className="mt-12">
              <div className=""> <label htmlFor="email" className="">Email</label><br/>
                <input type="email" name="email" className=" border border-gray text-black rounded-lg focus:ring-black block w-full p-2.5 placeholder:text-gray" placeholder="Sugamgelal@gmail.com" required/>
              </div>
              <div className=""> <label htmlFor="password" className="">password</label><br/>
                <input type="password" name="password" className=" border border-gray text-black rounded-lg focus:ring-black block w-full p-2.5 placeholder:text-gray"  required/>
              </div>
              {/* login btn */}
              <div className="flex justify-center"> <button className="bg-olive text-white rounded-lg px-8 py-2 mt-6 ">Login</button></div>
            </form>
          </div>
        </div>
      </div>
      <div className="flex justify-center"> <div className="text-gray">{`Don't Have an account?`}<span className="text-olive ml-2 font-semibold">Signup</span></div></div>


    
    
    </>
  )
}

export default Login
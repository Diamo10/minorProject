import Link from "next/link";


const GetStarted = () => {
  return (
    <>
      <div className="font-bold text-olive text-xl  ml-4 mt-4 mb-4">
        INVESTOR RECOMENDER SYSTEM
      </div>

      <div className="border-b border-gray my-5 mx-4"></div>

      <div className="font-semibold text-xl text-center m-8">
        Join as an Investor or an Entrepreneur
      </div>

      <div className="grid grid-cols-1 m-auto tablet:grid-cols-2">
        {/* card */}
        <div className=" flex justify-center">
          <div className="border border-olive  max-w-[75%] rounded-lg p-4 mx-8">
            <div className="flex justify-between">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                />
              </svg>

              <input type="radio"></input>
            </div>
            <div className="mt-3 font-semibold">
              I am a Investor, Looking for a Start up
            </div>
          </div>
        </div>
        {/* card */}

        <div className=" flex justify-center mt-4">
          <div className="border border-olive max-w-[75%] rounded-lg p-4 mx-8">
            <div className="flex justify-between">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                />
              </svg>
              <input type="radio"></input>
            </div>
            <div className="mt-3 font-semibold">
              I am a Entrepreneur, Looking for an Investor
            </div>
          </div>
        </div>
      </div>

      {/* Signup button */}

      <div className="flex justify-center">
        <div className="bg-olive rounded-lg px-8 py-2 mt-8 text-white font-semibold cursor-pointer hover:font-bold"> Create Account </div>
      </div>
      <div className="flex justify-center mt-4">
        <div className="text-gray">Already Have a account?<span className="text-olive ml-2 font-semibold"><Link href="/login">Login</Link></span></div>
      </div>
      



    </>
  );
};

export default GetStarted;

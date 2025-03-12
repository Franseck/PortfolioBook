import React from 'react'

import logo from "../assets/Logo.png"
import h2 from "../assets/h2.jpg"


const LastPage = () => {
  return (
   <>
         <div className='h-full'>
         <main className='h-full w-full bg-gradient-to-r from-gray-100 to-neutral-400 page-shadow flex justify-center text-center items-center'>
<div className="font-special">
  <div
    className="relative bg-black w-[400px] sm:w-[450px] group transition-all duration-700 aspect-video flex items-center justify-center "
  >
    <div
      className="transition-all flex flex-col items-center py-5 justify-start duration-300 group-hover:duration-1000 bg-white w-full h-full absolute group-hover:-translate-y-16"
    >
      <p className="text-xl sm:text-2xl font-semibold text-gray-800 font-special">
        Thank You !!
      </p>
      <p className="px-10 text-[10px] sm:text-[12px] text-gray-700 font-special">
      Thank you for viewing my profile.
      </p>
      <p className="text-[10px] sm:text-[12px text-gray-700 font-special">
        Wishing  you a peaceful career!
      </p>
      <p className="font-nothing text-md text-orange-900 pt-5">Seckin</p>
    </div>
    <button
      className="seal w-14 aspect-square rounded-full z-40 text-[10px] flex items-center justify-center font-semibold [clip-path:polygon(50%_0%,_80%_10%,_100%_35%,_100%_70%,_80%_90%,_50%_100%,_20%_90%,_0%_70%,_0%_35%,_20%_10%)] group-hover:opacity-0 transition-all duration-1000 group-hover:scale-0 group-hover:rotate-180 border-4 "
    >
     <img src={logo} alt="logo"  />
    </button>
    <div
      className="tp transition-all duration-1000 group-hover:duration-100 bg-neutral-800 absolute group-hover:[clip-path:polygon(50%_0%,_100%_0,_0_0)] w-full h-full [clip-path:polygon(50%_50%,_100%_0,_0_0)]"
    ></div>
    <div
      className="lft transition-all duration-700 absolute w-full h-full bg-neutral-900 [clip-path:polygon(50%_50%,_0_0,_0_100%)]"
    ></div>
    <div
      className="rgt transition-all duration-700 absolute w-full h-full bg-neutral-800 [clip-path:polygon(50%_50%,_100%_0,_100%_100%)]"
    ></div>
    <div
      className="btm transition-all duration-700 absolute w-full h-full bg-neutral-900 [clip-path:polygon(50%_50%,_100%_100%,_0_100%)]"
    ></div>
  </div>
</div>
</main>
</div>
</>
  )
}

export default LastPage
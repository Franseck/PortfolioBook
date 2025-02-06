import React from 'react'
import firstPic from "../assets/h1.jpg"

const FirstPage = () => {
  return (
    <div className='h-full'>
        <main className='h-full w-full bg-gradient-to-r from-gray-100 to-neutral-400 page-shadow'>
            <div className='p-16 space-y-4'>
                <div>
<img src={firstPic} alt="developer" className='w-[300px] rounded-lg mx-auto opacity-50'/>
                </div>
            <div> 
<div className='mt-2 p-5'>
    <p className='font-nothing text-lg '>Hello ! </p>
    <p className='text-4xl md:text-6xl font-fred text-black/80 p-5'>I'm Seckin</p>
    <p className='text-black/75 font-special pb-7 text-right '>Full Stack Developer</p>
<div className='flex flex-col justify-center items-center '>
    <p className='font-handle'>Traveling is my passion. Creating and discovering new things is my philosophy of life. </p>
    <br />
       <p className='font-handle'>
    My biggest goal is to use my skills and experience in the field of photography and design; to create an unique and user-friendly method that aims to do something that has not been done before.
    </p>
     < div className="mt-4 font-special">
    <a href="mailto:seco102@hotmail.com" className=''>
      <button className="relative border hover:border-gray-600 duration-500 group cursor-pointer text-gray-50  overflow-hidden h-12 w-52 rounded-xl bg-gray-800 p-2 flex justify-center items-center font-extrabold">
  <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-gray-900 delay-150 group-hover:delay-75"></div>
  <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-gray-800 delay-150 group-hover:delay-100"></div>
  <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-gray-700 delay-150 group-hover:delay-150"></div>
  <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-gray-600 delay-150 group-hover:delay-200"></div>
  <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-gray-500 delay-150 group-hover:delay-300"></div>
  <p className="z-10">Contact me</p>
</button>
      </a>
         </div>
         </div>
</div>
            </div>
            </div>
        </main>

    </div>
  )
}

export default FirstPage
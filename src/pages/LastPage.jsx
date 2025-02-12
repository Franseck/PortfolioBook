import React from 'react'
import Cover from './Cover'
import lastPic from "../assets/last-page.png"
import h2 from "../assets/h2.jpg"


const LastPage = () => {
  return (
   <>
        <main className='h-full w-full bg-gradient-to-r from-gray-100 to-neutral-400 page-shadow relative'>
            <div className='p-16 space-y-4'>
                <div>
<img src={h2} alt="developer" className='w-[300px] rounded-lg mx-auto opacity-50'/>
                </div>
            <div> 
<div className='mt-2 p-5'>
    <p className='font-nothing text-lg '>Hello ! </p>
</div>
</div>
</div>
</main>


</>
  )
}

export default LastPage
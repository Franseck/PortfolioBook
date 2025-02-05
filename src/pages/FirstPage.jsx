import React from 'react'
import firstPic from "../assets/man.jpg"

const FirstPage = () => {
  return (
    <div className='h-full'>
        <main className='h-full w-full bg-secondary page-shadow'>
            <div className='p-10 space-y-4'>
                <div>
<img src={firstPic} alt="developer" className='w-[300px] rounded-lg mx-auto '/>
                </div>
            <div> 
<div>
    <p>Hello ! </p>
    <p className='text-4xl md:text-6xl font-bold text-black/80'>I'm Seckin</p>
    <p className='text-blac/75'>Full Stack Developer</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus quas, nesciunt rerum doloribus earum sunt et veritatis consequatur a molestiae?</p>
    <a className='inline-block primary-btn' 
    href="mailto:seco102@hotmail.com">Contact Me</a>
</div>
            </div>
            </div>
        </main>

    </div>
  )
}

export default FirstPage
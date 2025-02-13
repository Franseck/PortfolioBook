import React from 'react'

const Cover = ({coverImg , title}) => {

    const coverImgStyle ={
        backgroundImage: `url(${coverImg})`,
        backgroundRepeat: "no-repeat",
       backgroundSize: "620px 750px",
        backgroundPosition:"center",
                         
    }

  return (
    <div className='h-full bg-black ' style={coverImgStyle}>
        <div className='h-full flex justify-center text-gray-300 '>
                    <div className='mt-4 '>
     <p className='text-xl md:text-2xl font-fred mb-2'>A Journey to</p>
    <p className="font-fred  absolute right-2 text-4xl tracking-widest">My Portfolio</p>
<div className='flex flex-col justify-center items-center '>
    <p className='font-fred absolute bottom-6 text-5xl '>Seckin Ozturk </p>
</div>
</div>
        </div>


    </div>
  )
}

export default Cover
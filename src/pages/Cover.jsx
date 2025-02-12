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
        <div className='h-full flex justify-center '>
                    <div className='mt-2'>
     <p className='text-2xl md:text-3xl font-fred text-black/80  '>A Journey to</p>
    <p className='text-black/75 font-fred  absolute right-2 text-4xl tracking-widest'>My Portfolio</p>
<div className='flex flex-col justify-center items-center '>
    <p className='font-fred absolute bottom-6 text-5xl '>Seckin Ozturk </p>
</div>
</div>
        </div>


    </div>
  )
}

export default Cover
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
        <div className='h-full flex justify-center items-center'>
            <h1 className='text-primary text-5xl font-bold font-outline-2'>{title}</h1>
        </div>


    </div>
  )
}

export default Cover
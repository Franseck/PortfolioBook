import React from 'react'
import ServicesBox from '../components/ServicesBox'


const ServicesPage = () => {
  return (
    <div className='h-full page-shadow bg-gradient-to-r from-gray-100 to-neutral-400 p-10 font-special'>
      <div>
        <div className="relative ">
          <div className="text-center text-4xl xl:text-7xl font-bold text-black/5 font-special">
            SERVICES
          </div>
          <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl md:text-3xl font-special">
            Services
          </h1>
        </div>
      </div>
        <div>
            <ServicesBox/>
        </div>
    </div>
  )
}

export default ServicesPage
import React from 'react'
import ServicesBox from '../components/ServicesBox'
import Header from '../components/Header'

const ServicesPage = () => {
  return (
    <div className='h-full page-shadow bg-white px-10'>
<Header
    title="Services"
        subtitle="Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet."
/>
        <div>
            <ServicesBox/>
        </div>
    </div>
  )
}

export default ServicesPage
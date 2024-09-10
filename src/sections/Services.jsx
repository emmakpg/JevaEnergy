import Divider from '@/components/Divider'
import React from 'react'
import ServiceCard from '@/components/ServiceCard';
import {ServicesHome} from '@/constants/index.js'

export const Services = () => {
  return (
    <section className='max-container py-12' id='#services'>
      <div>
        <h6 className='uppercase text-sky-500 text-center'>What we offer</h6>
        <h1 className='text-center text-primary lg:text-4xl text-[30px] font-medium leading-7'>Over 20 years of combined expertise</h1>
        <h6 className='text-center lg:text-[22px] py-4 font-thin'>We pride ourselves on the wealth of experience in our chosen markets.</h6>
      </div>
      <div className="flex justify-center mt-5 mb-16 xs:mb-10">
        <Divider divideColor="bg-primary"/>
       
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-10'>
        { ServicesHome.map((service,index)=>(
        <div key={index}>
        <ServiceCard
        bImage={service.bImage}
        label={service.label}
        link={service.link}
        icon={service.icon}
       
        />
        </div>
        ))}
        
       </div>
      
        
    </section>
  )
}

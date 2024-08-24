import Divider from '@/components/Divider'
import React from 'react'
import { MdEngineering } from "react-icons/md";
import Link from 'next/link';
import ServiceCard from '@/components/ServiceCard';
import {ServicesHome} from '@/constants/index.js'

export const Services = () => {
  return (
    <section className='max-container py-12' id='#services'>
      <div>
        <h6 className='uppercase text-sky-500 text-center'>What we offer</h6>
        <h1 className='text-center text-sky-800 text-4xl font-medium'>Over 20 years of combined expertise</h1>
        <h6 className='text-center text-lg py-4 font-thin'>We pride ourselves on the wealth of experience in our chosen markets.</h6>
      </div>
      <div className="flex justify-center mt-5 mb-16">
        <Divider divideColor="sky-800"/>
       
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-10'>
        { ServicesHome.map((service,index)=>(
        <div key={index}>
        <ServiceCard
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

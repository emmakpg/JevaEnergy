"use client"
import React from 'react'
import Divider from '@/components/Divider'
import Button from '@/components/Button'
import CountUp from 'react-countup';





export const About = () => {
  return (
    <section id='#about' className='max-container' >
      <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-1'>
       <div> 
      <div className="flex justify-start mt-5 mb-7">
        <Divider divideColor="sky-800"/>
      </div>
      <h1 className='text-sky-800 text-[35px] font-medium mb-5'>We're proud of our journey</h1>
      <p className='pr-6 text-lg font-thin leading-normal'>
      Founded in 2023, Jeva Energy & Solutions has emerged as a prominent provider of upstream and downstream oil and gas services
       in Ghana and West Africa. With a deep-rooted commitment to the industry, we have effectively delivered a diverse array of services. We are focused on ongoing growth and expansion,
       striving to enhance industry value and contribute to the advancement of the oil and gas sector both locally and regionally.
      </p>
        <div className='py-8'>
        <Button label="Find out more" link="/about"/>
        </div>
      </div>
      <div>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-1 pt-8">
          <div className="flex items-center m-2 py-4 ">
            <div className='px-8'>
            <h1 className='text-[60px] text-center font-medium tracking-widest text-sky-800'>
              <CountUp
              start={0}
              end={200}
              duration={4}
              />
              </h1>
            <p className='font-thin text-lg'>Personnels</p>
            </div>
            <div class="h-full w-[1.5px] bg-gray-300"></div>
            
          </div>
          <div className="flex items-center py-8  pl-8">
            <div className=''>
            <h1 className='text-[60px] font-medium tracking-widest text-sky-800'>
            <CountUp
              start={0}
              end={2}
              duration={5}
              />
              </h1>
            <p className='font-thin pr-10 text-lg'>Countries</p>
            </div>
            <div class="h-full w-[1.5px] bg-gray-300"></div>
            
          </div>
          <div className="flex items-center py-8 m-2 ">
            <div className=''>
            <h1 className='text-[60px] text-center font-medium tracking-widest text-sky-800'>
            <CountUp
              start={0}
              end={40}
              duration={5}
              />k
              </h1>
            <p className='font-thin text-lg text-center'>cubic square meter Operating Capacity</p>
            </div>
          
            
          </div>

        </div>
       
      </div>

      </div>
    </section>
  )
}

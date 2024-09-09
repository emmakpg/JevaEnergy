"use client"
import React from 'react'
import Divider from '@/components/Divider'
import Button from '@/components/Button'
import CountUp from 'react-countup';





export const About = () => {
  return (
    <section className='max-container' >
      <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-1'>
       <div> 
      <div className="flex justify-start mt-5 xs:mt-[-8px] mb-7">
        <Divider divideColor="bg-primary"/>
      </div>
      <h1 className="text-primary lg:text-[35px] text-[30px] font-medium mb-5 xs:leading-8">We&apos;re proud of our journey</h1>
      <p className="pr-6 lg:text-[18px] font-thin leading-normal">
      Founded in 2023, Jeva Energy & Solutions has emerged as a prominent provider of upstream and downstream oil and gas services
       in Ghana and West Africa. With a deep-rooted commitment to the industry, we have effectively delivered a diverse array of services. We are focused on ongoing growth and expansion,
       striving to enhance industry value and contribute to the advancement of the oil and gas sector both locally and regionally.
      </p>
        <div className="py-8">
        <Button label="Find out more" link="/about"/>
        </div>
      </div>
      <div>
        <div className="hidden lg:grid lg:grid-cols-3 gap-1 pt-8">
          <div className="flex items-center m-2 py-4 ">
            <div className="px-8">
            <h1 className="text-[60px] text-center font-medium tracking-widest text-primary">
              <CountUp
              start={0}
              end={200}
              duration={3}
              />
              </h1>
            <p className='font-thin text-lg'>Personnels</p>
            </div>
            <div class="h-full w-[1.5px] bg-gray-300 "></div>
            
          </div>
          <div className="flex items-center py-8  pl-8 xs:text-center">
            <div className=''>
            <h1 className='text-[60px] font-medium text-center  text-primary pr-10 ml-2'>
            <CountUp
              start={0}
              end={2}
              duration={3}
              />
              </h1>
            <p className='font-thin pr-10 text-lg'>Countries</p>
            </div>
            <div class="h-full w-[1.5px] bg-gray-300 ml-5"></div>
            
          </div>
          <div className="flex items-center py-8 m-2 ">
            <div className=''>
            <h1 className='text-[60px] text-center font-medium tracking-widest text-primary'>
            <CountUp
              start={0}
              end={30}
              duration={4}
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

import React from 'react'
import Image from 'next/image'
import { Header } from '@/components/Header'
import Divider from '@/components/Divider'

const UnskilledLabor = () => {
  return (
    <div>
    <Header
     pageTitle="Unskilled Labor"
     imgURL="bg-unskilled-labor"
     subText=""
     />
  
  <section className="max-container  lg:py-32  sm:py-4">
  
  <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5">
  <div className="m-5">
  <div className="flex  mt-10">
  <Divider divideColor="bg-primary"/>
  </div>
  
  
  <h2 className="text-primary lg:text-2xl text-lg font-medium m-6 ml-4">Dependable Support for General Tasks</h2>
<p className="lg:text-lg font-thin leading-normal ml-4 m-6">
For positions that require less specialized skills, we offer a reliable and hardworking unskilled labor force.
From general support tasks to on-site assistance, our laborers ensure the smooth day-to-day execution of your projects, 
contributing to your business&apos;s overall success.
</p>

<h2 className="text-primary lg:text-2xl text-lg font-medium m-6 ml-4">Workforce Flexibility and Efficiency</h2>
<p className="lg:text-lg font-thin leading-normal ml-4 m-6">
At Jeva Energies & Solutions, our manpower supply services are designed to provide you with a flexible, efficient, and dedicated workforce,
adaptable to the dynamic needs of any project. We prioritize meeting your timelines and staying within budget, offering seamless integration with your operational framework.
</p>


  
  </div>
  <div className="">
    <div className="lg:mt-20">
      <Image src="/assets/images/unskilled_labor1.webp"
      alt="core_values"
      width={600}
      height={600}
      className="shadow-lg lg:rounded-lg"
      />
  
    </div>
   
  </div>
  
  </div>
  
  </section>
  
  
  
  
     
  </div>
  )
}

export default UnskilledLabor
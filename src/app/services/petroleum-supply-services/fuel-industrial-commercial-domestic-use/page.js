import React from 'react'
import Image from 'next/image'
import { Header } from '@/components/Header'
import Divider from '@/components/Divider'


const ICDUse = () => {
  return (
    
    <div>
    <Header
     pageTitle="Fuels for Industrial, Commercial, and Domestic Use"
     imgURL="bg-filling"
     subText="We supply a variety of fuels to keep your operations running efficiently, from automotive to heavy machinery and household needs"
     />
  
  <section className="max-container  lg:py-32  sm:py-4">
  
  <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5">
  <div className="m-5">
  <div className="flex  mt-10">
  <Divider divideColor="bg-primary"/>
  </div>
  
  

  <h2 className="text-primary lg:text-2xl text-lg font-medium m-6 ml-4">Liquified Petroleum Gas (LPG)</h2>
<p className="lg:text-lg font-thin leading-normal ml-4">
A clean and efficient energy source ideal for both domestic heating and industrial processes.
</p>

<h2 className="text-primary lg:text-2xl text-lg font-medium m-6 ml-4">Gasoline</h2>
<p className="lg:text-lg font-thin leading-normal ml-4">
High-quality fuel designed for superior performance in vehicles and industrial engines.
</p>

<h2 className="text-primary lg:text-2xl text-lg font-medium m-6 ml-4">Kerosene</h2>
<p className="lg:text-lg font-thin leading-normal ml-4">
Versatile fuel used in household lighting and heating, as well as for industrial applications.
</p>

<h2 className="text-primary lg:text-2xl text-lg font-medium m-6 ml-4">Aviation Turbine Kerosene (ATK)</h2>
<p className="lg:text-lg font-thin leading-normal ml-4">
Premium-grade fuel formulated for the aviation industry, ensuring optimal engine performance.
</p>

<h2 className="text-primary lg:text-2xl text-lg font-medium m-6 ml-4">Gas Oil (Diesel)</h2>
<p className="lg:text-lg font-thin leading-normal ml-4">
Essential for heavy machinery, generators, and equipment used in construction, mining, and agriculture.
</p>

<h2 className="text-primary lg:text-2xl text-lg font-medium m-6 ml-4">Bunker Fuel</h2>
<p className="lg:text-lg font-thin leading-normal ml-4">
Reliable marine fuel that powers global shipping vessels, delivering efficient energy for long-haul operations.
</p>
  
  
  </div>
  <div className="lg:mt-12">
    <div className="lg:mt-12">
      <Image src="/assets/images/filling1.webp"
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

export default ICDUse
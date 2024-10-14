import React from 'react'
import Image from 'next/image'
import { Header } from '@/components/Header'
import Divider from '@/components/Divider'

const SpecialtyProducts = () => {
  return (
   
    <div>
    <Header
     pageTitle="Industrial Oils, Lubricants, and Specialty Products"
     imgURL="bg-lubricant"
     subText="Maximize the efficiency and lifespan of your machinery with our premium-grade industrial oils and lubricants"
     />
  
  <section className="max-container  lg:py-32  sm:py-4">
  
  <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5">
  <div className="m-5">
  <div className="flex  mt-10">
  <Divider divideColor="bg-primary"/>
  </div>
  
  

  <h2 className="text-primary lg:text-2xl text-lg font-medium m-6 ml-4">Residual Fuel Oils</h2>
<p className="lg:text-lg font-thin leading-normal ml-4">
Heavy-duty fuels used in large-scale power generation and industrial applications.
</p>

<h2 className="text-primary lg:text-2xl text-lg font-medium m-6 ml-4">Marine Gas Oil (MGO)</h2>
<p className="lg:text-lg font-thin leading-normal ml-4">
Quality fuel optimized for maritime use, ensuring smooth sailing and operational reliability.
</p>

<h2 className="text-primary lg:text-2xl text-lg font-medium m-6 ml-4">Lubricants</h2>
<p className="lg:text-lg font-thin leading-normal ml-4">
Our wide selection of lubricants minimizes friction, reduces wear, and enhances the longevity of your machinery and equipment.
</p>


  
  </div>
  <div className="lg:mt-2">
    <div className="lg:mt-12">
      <Image src="/assets/images/fuel1.webp"
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

export default SpecialtyProducts
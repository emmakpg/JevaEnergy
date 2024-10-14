import React from 'react'
import Image from 'next/image'
import { Header } from '@/components/Header'
import Divider from '@/components/Divider'

const PetroleumDerivative = () => {
  return (
    
    <div>
    <Header
     pageTitle="Asphalt, Waxes, and Petroleum Derivatives"
     imgURL="bg-asphalt"
     subText="Jeva Energies & Solutions provides essential products for infrastructure, manufacturing, and industrial processes"
     />
  
  <section className="max-container  lg:py-32  sm:py-4">
  
  <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5">
  <div className="m-5">
  <div className="flex  mt-10">
  <Divider divideColor="bg-primary"/>
  </div>
  
  

  <h2 className="text-primary lg:text-2xl text-lg font-medium m-6 ml-4">Asphalt & Bitumen</h2>
<p className="lg:text-lg font-thin leading-normal ml-4">
Core materials used in road construction, roofing, and other infrastructure projects.
</p>

<h2 className="text-primary lg:text-2xl text-lg font-medium m-6 ml-4">Waxes and Petroleum Products</h2>
<p className="lg:text-lg font-thin leading-normal ml-4">
High-quality industrial waxes, used in a variety of manufacturing processes.
</p>

<h2 className="text-primary lg:text-2xl text-lg font-medium m-6 ml-4">Coke</h2>
<p className="lg:text-lg font-thin leading-normal ml-4">
A key component in steel and aluminum production, offering high-quality petroleum coke for industrial use.
</p>


  
  </div>
  <div className="lg:mt-2">
    <div className="lg:mt-12">
      <Image src="/assets/images/asphalt1.webp"
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

export default PetroleumDerivative
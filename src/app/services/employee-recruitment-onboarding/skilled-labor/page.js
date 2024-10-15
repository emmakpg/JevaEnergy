import React from 'react'
import Image from 'next/image'
import { Header } from '@/components/Header'
import Divider from '@/components/Divider'

const SkilledLabor = () => {
  return (
     
    <div>
    <Header
     pageTitle="Skilled Labor"
     imgURL="bg-skilled-labor"
     subText="High-Quality Performance"
     />
  
  <section className="max-container  lg:py-32  sm:py-4">
  
  <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5">
  <div className="m-5">
  <div className="flex  mt-10">
  <Divider divideColor="bg-primary"/>
  </div>
  
  

<p className="lg:text-lg font-thin leading-normal ml-4 m-6">
Our skilled labor pool is handpicked for roles requiring specialized technical skills. Whether it&apos;s in construction, manufacturing, 
or technical services, our workers deliver high-quality performance,driving productivity and maintaining safety standards on-site.
</p>



  
  </div>
  <div className="">
    <div className="lg:mt-2">
      <Image src="/assets/images/skilled_labor1.webp"
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

export default SkilledLabor
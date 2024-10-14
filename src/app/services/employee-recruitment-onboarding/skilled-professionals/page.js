import React from 'react'
import Image from 'next/image'
import { Header } from '@/components/Header'
import Divider from '@/components/Divider'

const SkilledProfessionals = () => {
  return (
<div>
    <Header
     pageTitle="Skilled Professionals"
     imgURL="bg-skilled-prof"
     subText="Expertise Across Multiple Industries"
     />
  
  <section className="max-container  lg:py-32  sm:py-4">
  
  <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5">
  <div className="m-5">
  <div className="flex  mt-10">
  <Divider divideColor="bg-primary"/>
  </div>
  
  

<p className="lg:text-lg font-thin leading-normal ml-4 m-6">
We supply highly qualified professionals equipped with technical knowledge and industry expertise.
 Our skilled professionals cover various sectors, including engineering, project management, IT, and more. Each expert is carefully selected
to match your project needs, ensuring efficient execution and optimal results.
</p>



  
  </div>
  <div className="">
    <div className="lg:mt-2">
      <Image src="/assets/images/skilled_prof1.webp"
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

export default SkilledProfessionals
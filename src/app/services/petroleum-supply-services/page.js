

import { Header } from "@/components/Header"
import Divider from "@/components/Divider"
import Image from "next/image"
import Button from "@/components/Button"
import { petrol_supply } from "@/constants"
import Card from "@/components/Card"



const MarineServices = () => {
  return (
  
  <div>
    <Header
     pageTitle="Petroleum Supply Services"
     imgURL="bg-petrolhead"
     subText="Powering Industries with Reliable Energy Solutions"
     />

<section className="max-container  lg:py-32  sm:py-4">

<div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5">
  <div className="m-5">
  <div className="flex  mt-10">
  <Divider divideColor="bg-primary"/>
  </div>

    <p className="lg:text-lg font-thin ml-4 mt-6">At Jeva Energies & Solutions, we provide a comprehensive portfolio of petroleum products designed to 
      meet the diverse energy needs of industries worldwide. Our dedication to quality and service ensures that our clients receive the 
      highest-grade fuels, lubricants, and petroleum derivatives to optimize their operations. We serve industrial, commercial, 
      and domestic sectors with reliable energy solutions tailored to their specific needs.</p>
          


  </div>
  <div>
    <div className="lg:mt-2 py-10">
      <Image src="/assets/images/petroleum.webp"
      alt="core_values"
      width={700}
      height={700}
      className="shadow-lg lg:rounded-lg"
      />

    </div>
   
  </div>

</div>

</section>

<section className="py-4 bg-[#f5f5f5] lg:py-16">

<div className="max-container">

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-10">
   {petrol_supply.map((item)=>(
   
      <Card
      key={item.title}
      title={item.title}
      caption={item.value}
      imageURL={item.imageURL}
      link={item.link}
      
      />

    

   ))

}

  </div>


</div>

</section>

<section>
      <div className="relative bg-petroltruck w-full h-[500px] bg-cover bg-center">
      <div className="absolute inset-0 bg-black bg-opacity-70 z-0"></div>
      

      <div className="relative z-30">
      <h6 className='uppercase text-sky-300 text-lg text-center lg:pt-20'></h6>
      <div className="flex justify-center mt-5 pt-5 mb-10 xs:pt-8">
      <Divider divideColor="bg-white"/>
    </div>  
         
      <p className='max-container text-center lg:text-lg leading-normal lg:pt-4 font-thin text-white'>
        At Jeva Energies & Solutions, we are committed to delivering high-quality, reliable petroleum products that drive operational efficiency
         and business growth. Whether you&apos;re seeking industrial fuels, lubricants, or specialized petroleum derivatives, we are your trusted partner
        for all your energy needs. Choose Jeva Energies & Solutions for top-tier products and services that fuel your success.
        </p>
          

        
        <div className='flex justify-center py-8 mt-8'>
        <Button label="Reach Out To Us" link="/contact-us"/>
        </div>
      </div>

    
     

     
      
    </div>
      
    </section>
     
</div>
  )
}

export default MarineServices
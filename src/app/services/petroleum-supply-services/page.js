

import { Header } from "@/components/Header"
import Divider from "@/components/Divider"
import Image from "next/image"
import Button from "@/components/Button"
import { petroleum_supply } from "@/constants"
import PCard from "@/components/PCard"



const MarineServices = () => {
  return (
  
  <div>
    <Header
     pageTitle="Petroleum Supply Services"
     imgURL="bg-petrolhead"
     subText="Provide essential logistical and operational support for offshore oil and gas activities"
     />

<section className="max-container  lg:py-32  sm:py-4">

<div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5">
  <div className="m-5">
  <div className="flex  mt-10">
  <Divider divideColor="bg-primary"/>
  </div>
    <h2 className="text-primary lg:text-[35px] text-[25px] xs:leading-8 font-medium m-6 ml-4">Ensure Uninterrupted Operations</h2>

    <p className="lg:text-lg font-thin ml-4">For industries relying on a steady supply of petroleum products, Jeva Energies & Solutions 
      offers comprehensive services to ensure your operations remain uninterrupted. Whether it&apos;s bulk supply, filling stations, or specialized 
      deliveries for the mining and other industries, our expertise guarantees a consistent and high-quality fuel supply.
       From initial consultation to final delivery, we provide tailored solutions to 
      meet your unique needs and keep your projects running smoothly.</p>

    <p className="lg:text-lg font-thin ml-4 py-4">We provide a reliable and consistent supply of refined petroleum products.
       Our extensive distribution network ensures that our clients receive high-quality products on time, every time.</p>
          


  </div>
  <div>
    <div className="lg:mt-12 py-10">
      <Image src="/assets/images/petroleum.webp"
      alt="core_values"
      width={700}
      height={700}
      className="shadow-lg rounded-lg"
      />

    </div>
   
  </div>

</div>

</section>

<section className="sm:py-4 bg-[#f5f5f5] lg:py-16">

<div className="max-container">

<div className="max-container grid sm:grid-cols-1 md:grid-cols-1 gap-10">
        {
          petroleum_supply.map((item,index)=>(
            <div key={index}>
              <PCard
              imageUrl={item.imageURL}
              label={item.title}
              value={item.value}
              />
              </div>

          ))
        }

        <div>
          
          
        </div>
        
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
        At Jeva Energies & Solutions, we are dedicated to raising industry standards by combining local knowledge with global expertise. Our mission is to foster sustainable growth and operational excellence across Africa,
         setting new standards for innovation and reliability in the energy sector. 
        If you&apos;re interested in partnering with us or learning more about how we can contribute to your success, please don&apos;t hesitate to reach out. </p>
          

        
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
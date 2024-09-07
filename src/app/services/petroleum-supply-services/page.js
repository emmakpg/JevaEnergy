

import { Header } from "@/components/Header"
import Divider from "@/components/Divider"
import Image from "next/image"
import Button from "@/components/Button"



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
    <h2 className="text-primary text-[35px] font-medium m-6 ml-4">Ensure Uninterrupted Operations</h2>

    <p className="text-lg font-thin leading-normal ml-4">For industries relying on a steady supply of petroleum products, Jeva Energies & Solutions 
      offers comprehensive services to ensure your operations remain uninterrupted. Whether it's bulk supply, filling stations, or specialized 
      deliveries for the mining and other industries, our expertise guarantees a consistent and high-quality fuel supply.
       From initial consultation to final delivery, we provide tailored solutions to 
      meet your unique needs and keep your projects running smoothly.</p>

    <p className="text-lg font-thin leading-normal ml-4 py-4">We provide a reliable and consistent supply of refined petroleum products.
       Our extensive distribution network ensures that our clients receive high-quality products on time, every time.</p>
          


  </div>
  <div>
    <div className="lg:mt-32">
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

<h2 className="text-primary text-2xl font-medium m-6 ml-4">1. Bulk Supply</h2>
<p className="text-lg font-thin leading-normal ml-4">
a.	Providing large-scale petroleum product deliveries to meet the high demands of industrial clients.
</p>
<p className="text-lg font-thin leading-normal ml-4 py-4">
b.	Ensuring a reliable and consistent supply chain to support continuous operations and prevent downtime.
</p>

<h2 className="text-primary text-2xl font-medium m-6 ml-4">2. Filling Stations</h2>
<p className="text-lg font-thin leading-normal ml-4">
a.	Operating state-of-the-art filling stations to supply petroleum products directly to individual consumers and businesses.
</p>
<p className="text-lg font-thin leading-normal ml-4 py-4">
b.	Offering high-quality fuels and efficient customer service to ensure a seamless fueling experience.
</p>

<h2 className="text-primary text-2xl font-medium m-6 ml-4">3.	Mining Industries</h2>
<p className="text-lg font-thin leading-normal ml-4">
a.	Delivering specialized petroleum products tailored to the unique requirements of the mining sector.
</p>
<p className="text-lg font-thin leading-normal ml-4 py-4">
b.	Ensuring timely and reliable fuel supply to support the uninterrupted operation of mining equipment and activities.
</p>

<h2 className="text-primary text-2xl font-medium m-6 ml-4">4.	Other Industrial Sectors</h2>
<p className="text-lg font-thin leading-normal ml-4">
a.	Serving a wide range of industries including construction, manufacturing, and transportation with customized petroleum solutions.
</p>
<p className="text-lg font-thin leading-normal ml-4 py-4">
b.	Providing tailored fuel delivery services to meet the specific operational needs of each sector, ensuring efficiency and reliability.
</p>


<p className="text-lg font-thin leading-normal ml-4 py-12 mx-24">
At Jeva Energies & Solutions, we are dedicated to raising industry standards by combining local knowledge with global expertise. Our mission is to foster sustainable growth and operational excellence across Africa, setting new standards for innovation and reliability in the energy sector. 
If you're interested in partnering with us or learning more about how we can contribute to your success, please don't hesitate to reach out.
</p>

</div>

</section>

<section>
      <div className="relative bg-petroltruck w-full h-[500px] bg-cover bg-center">
      <div className="absolute inset-0 bg-black bg-opacity-70 z-0"></div>
      

      <div className="relative z-30">
        <h6 className='uppercase text-sky-300 text-lg text-center pt-8'></h6>
        <div className="flex justify-center mt-5 mb-10">
        <Divider divideColor="bg-white"/>
      </div>  
           
        <p className='max-container text-center text-lg leading-normal lg:pt-4 font-thin text-white'>
        At Jeva Energies & Solutions, we are dedicated to raising industry standards by combining local knowledge with global expertise. Our mission is to foster sustainable growth and operational excellence across Africa,
         setting new standards for innovation and reliability in the energy sector. 
        If you're interested in partnering with us or learning more about how we can contribute to your success, please don't hesitate to reach out. </p>
          

        
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
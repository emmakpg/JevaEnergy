
import { Header } from "@/components/Header"
import Divider from "@/components/Divider"
import Card from "@/components/Card"
import { protocol_logistics } from "@/constants"
import Button from "@/components/Button"
import Image from "next/image"

const ProtocolServices = () => {
  return (
    <div>
    <Header
     pageTitle="Protocol & Logistics Services"
     imgURL="bg-pg_protocol"
     subText="Our protocol and logistics services ensure seamless transportation and logistical support for focused industry operations."
     />

<section className="max-container  lg:py-32  sm:py-4">

<div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5">
  <div className="m-5">
  <div className="flex  mt-10">
  <Divider divideColor="bg-primary"/>
  </div>
    <h2 className="text-primary lg:text-[35px] text-[25px] leading-7 lg:leading-10 font-medium m-6 ml-4">Comprehensive Transportation and Logistical Support</h2>

    <p className="lg:text-lg font-thin leading-normal ml-4">At Jeva Energies & Solutions, we offer a full suite of protocol and logistics services 
      designed to meet the diverse needs of our clients across various industries. Our services ensure seamless transportation, efficient
       supply chain management, and tailored support to enhance operational efficiency and reduce costs.</p>

  </div>
  <div>
    
  <div className="lg:mt-4">
    <Image src="/assets/images/tls.webp"
    alt="core_values"
    width={700}
    height={700}
    className="shadow-lg lg:rounded-lg"
    />

  </div>
  </div>
  

</div>

</section>

<section className="py-8 bg-[#f5f5f5] lg:py-16">

<div className="max-container">

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10 px-10">
   {protocol_logistics.map((item)=>(
   
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
    <div className="relative bg-pg_protocol w-full lg:h-[500px] h-[350px] bg-cover bg-center">
    <div className="absolute inset-0 bg-black bg-opacity-70 z-0"></div>
    

    <div className="relative z-30">
      <h6 className='uppercase text-sky-300 text-lg text-center lg:pt-20'></h6>
      <div className="flex justify-center mt-5 pt-5 mb-10 xs:pt-8">
      <Divider divideColor="bg-white"/>
    </div>  
         
      <p className='max-container text-center lg:text-lg leading-normal lg:pt-4 font-thin text-white'>
      Reach out to Jeva Energies & Solutions today to discover how our integrated protocol and logistics services can streamline your operations,
      reduce costs, and enhance your overall efficiency.
      </p>
        

      
      <div className='flex justify-center py-8 pl-4'>
      <Button label="Reach Out To Us" link="/contact-us"/>
      </div>
    </div>

  
   

   
    
  </div>
    
  </section>

   
</div>
  )
}

export default ProtocolServices
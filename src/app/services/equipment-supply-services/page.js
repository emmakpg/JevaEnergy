import { Header } from "@/components/Header"
import Divider from "@/components/Divider"
import Image from "next/image"
import Button from "@/components/Button"
import Card from "@/components/Card"
import { equipment_supply } from "@/constants"

const EquipmentSupply = () => {
  return (
    <div>
    <Header
     pageTitle="Equipment/Material Supply Services"
     imgURL="bg-equipment-hero"
     subText="Our extensive network of suppliers and manufacturers ensures that we can provide the best tools and materials for any project."
     />

     
<section className="max-container  lg:py-32  sm:py-4">

<div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5">
  <div className="m-5">
  <div className="flex  mt-10 lg:mt-20 lg:mb-10 mb-4">
  <Divider divideColor="bg-primary"/>
  </div>

    <p className="lg:text-lg font-thin leading-normal ml-4">At Jeva Energies & Solutions, we are dedicated to providing comprehensive
       equipment and material supply services, meticulously tailored to meet the unique demands of the oil and gas industry. 
       Our goal is to enhance your operational efficiency through the supply of high-quality products and timely services. 
      We offer a wide range of solutions, categorized to meet your specific requirements.</p>
          


  </div>
  <div>
  <div className="lg:mt-4">
    <Image src="/assets/images/equipment.webp"
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
   {equipment_supply.map((item)=>(
   
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


<section className="">
      <div className="relative bg-equipment-hero w-full h-[500px] bg-cover bg-center">
      <div className="absolute inset-0 bg-black bg-opacity-70 z-0"></div>
      

      <div className="relative z-30">
        <h6 className='uppercase text-sky-300 text-lg text-center lg:pt-24 pt-8'>Take the Next Step</h6>
        <div className="flex justify-center mt-5 mb-10">
        <Divider divideColor="bg-white"/>
      </div>  
           
        <p className='max-container text-center lg:text-lg leading-normal lg:pt-4 font-thin text-white'>
        At Jeva Energies & Solutions, we are committed to delivering reliable, cost-effective, and high-quality solutions that help your
         business thrive. By partnering with us, you gain a dedicated ally focused on enhancing your operational efficiency and achieving your 
         business goals. Let us be your trusted provider for all your equipment and material supply needs.
        </p>
          

        
        <div className='flex justify-center py-8 mt-8 xs:m-0'>
        <Button label="Reach Out To Us" link="/contact-us"/>
        </div>
      </div>

    
     

     
      
    </div>
      
    </section>
</div>
  )
}

export default EquipmentSupply
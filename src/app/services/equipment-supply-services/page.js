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

    <p className="lg:text-lg font-thin leading-normal ml-4">Jeva Energies & Solutions specializes in the supply and installation of critical oil
       field equipment, including computers, communication devices, and personal protective equipment. We provide a wide range of high-quality
        equipment and materials necessary for focused industry needs,
       supported by our extensive network of suppliers and manufacturers. Our offerings include:</p>
          


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


</div>
  )
}

export default EquipmentSupply
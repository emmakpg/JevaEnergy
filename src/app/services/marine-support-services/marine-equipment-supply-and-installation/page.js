import Image from 'next/image'
import { Header } from '@/components/Header'
import Divider from '@/components/Divider'

const MarineEquipmentSupply = () => {
  return (
   
    <div>
    <Header
     pageTitle="Marine Equipment Supply and Installation"
     imgURL="bg-marine_equipment"
     subText="Enhancing Vessel Performance"
     />
  
  <section className="max-container  lg:py-32  sm:py-4">
  
  <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5">
  <div className="m-5">
  <div className="flex  mt-10">
  <Divider divideColor="bg-primary"/>
  </div>
  
  <h2 className="text-primary lg:text-2xl text-lg font-medium m-6 ml-4">Navigational Equipment</h2>
  <p className="lg:text-lg font-thin leading-normal ml-4 m-6">
  We provide advanced navigational systems designed for safe and efficient vessel
   operations across various marine environments.
  </p>

  <h2 className="text-primary lg:text-2xl text-lg font-medium m-6 ml-4">Communication Equipment</h2>
  <p className="lg:text-lg font-thin leading-normal ml-4 m-6">
  Our cutting-edge communication systems enable clear and reliable connectivity, 
  ensuring smooth communication between offshore vessels and onshore teams.
  </p>
  
  
  
  </div>
  <div className=''>
    <div className="lg:mt-10">
      <Image src="/assets/images/marine_maintain.webp"
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

export default MarineEquipmentSupply
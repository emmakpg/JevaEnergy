import Image from 'next/image'
import { Header } from '@/components/Header'
import Divider from '@/components/Divider'
import RCard from '@/components/RCard'
import { transportation_sub } from '@/constants'

const TailoredTravel = () => {
  return (
   
    <div>
    <Header
     pageTitle="Tailored Travel & Logistics Solutions"
     imgURL="bg-logistics-hero"
     subText="End-to-End Management with a Personal Touch"
     />
  
  <section className="max-container  lg:py-32  sm:py-4">
  
  <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5">
  <div className="m-5">
  <div className="flex  mt-10">
  <Divider divideColor="bg-primary"/>
  </div>
  

  <p className="lg:text-lg font-thin leading-normal ml-4 m-6">
  Working with trusted travel agencies, we handle everything from flight bookings to accommodations and itinerary planning. Whether it’s local or international, we take the complexity out of travel, 
  ensuring every trip is effortless and enjoyable from beginning to end.
  </p>
  
  
  </div>
  <div className=''>
    <div className="">
      <Image src="/assets/images/vip1.webp"
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

export default TailoredTravel
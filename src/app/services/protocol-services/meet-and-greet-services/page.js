import Image from 'next/image'
import { Header } from '@/components/Header'
import Divider from '@/components/Divider'

const MeetGreet = () => {
  return (
    <div>
    <Header
     pageTitle="Meet & Greet Services"
     imgURL="bg-meet-greet"
     subText="Warm Welcomes, Lasting Impressions"
     />
  
  <section className="max-container  lg:py-32  sm:py-4">
  
  <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5">
  <div className="m-5">
  <div className="flex  mt-10">
  <Divider divideColor="bg-primary"/>
  </div>
  

  <p className="lg:text-lg font-thin leading-normal ml-4 m-6">
  First impressions count, and we make sure your guests receive the best. Our meet-and-greet services, from airport pickups to hotel transfers, provide a welcoming, professional reception that leaves a positive mark. We focus on the details,
  so your visitors feel valued from the moment they arrive.
  </p>
  
  
  </div>
  <div className=''>
    <div className="">
      <Image src="/assets/images/meet_greet1.webp"
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

export default MeetGreet
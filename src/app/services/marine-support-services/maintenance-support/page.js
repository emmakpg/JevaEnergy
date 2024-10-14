import Image from 'next/image'
import { Header } from '@/components/Header'
import Divider from '@/components/Divider'

const MaintenanceSupport = () => {
  return (

    <div>
    <Header
     pageTitle="Maintenance and Support"
     imgURL="bg-marine_maintenance"
     subText="Sustaining Operational Reliability"
     />
  
  <section className="max-container  lg:py-32  sm:py-4">
  
  <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5">
  <div className="m-5">
  <div className="flex  mt-10">
  <Divider divideColor="bg-primary"/>
  </div>
  

  <p className="lg:text-lg font-thin leading-normal ml-4 m-6">
  Our dedicated team ensures continuous reliability and performance through our expert maintenance services. We offer comprehensive support for all marine equipment,
   ensuring seamless operations throughout the lifecycle of your assets.
  </p>
  
  
  
  </div>
  <div className=''>
    <div className="">
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

export default MaintenanceSupport
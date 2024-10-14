import Image from 'next/image'
import { Header } from '@/components/Header'
import Divider from '@/components/Divider'

const ShipsChannelling = () => {
  return (
 
    <div>
    <Header
     pageTitle="Ships Channelling"
     imgURL="bg-ship_channelling"
     subText="Comprehensive Vessel Support"
     />
  
  <section className="max-container  lg:py-32  sm:py-4">
  
  <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5">
  <div className="m-5">
  <div className="flex  mt-10">
  <Divider divideColor="bg-primary"/>
  </div>
  
  
  <p className="lg:text-lg font-thin leading-normal ml-4 m-6">
  We provide various provisions and essential ship supplies, ensuring vessels are fully stocked for their voyages.
   Our ships chandelling services cater to the diverse operational needs of marine vessels, offering timely and reliable support.
  </p>

  
  
  
  </div>
  <div>
    <div className="">
      <Image src="/assets/images/marinelogistics.webp"
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

export default ShipsChannelling
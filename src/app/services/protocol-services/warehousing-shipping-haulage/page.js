import Image from 'next/image'
import { Header } from '@/components/Header'
import Divider from '@/components/Divider'

const WareHousing = () => {
  return (
    <div>
    <Header
     pageTitle="Warehousing, Shipping & Haulage"
     imgURL="bg-warehouse"
     subText="End-to-End Logistics to Keep You on Track"
     />
  
  <section className="max-container  lg:py-32  sm:py-4">
  
  <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5">
  <div className="m-5">
  <div className="flex  mt-10">
  <Divider divideColor="bg-primary"/>
  </div>
  

  <p className="lg:text-lg font-thin leading-normal ml-4 m-6">
  We don't just move people—we move products too. Our warehousing solutions ensure secure storage of your goods, while our expert shipping and haulage services guarantee timely delivery across the globe. Whether it’s heavy machinery,
   temperature-sensitive items, or everyday goods, we handle every aspect of your logistics with precision.
  </p>
  
  
  </div>
  <div className=''>
    <div className="">
      <Image src="/assets/images/haulage.webp"
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

export default WareHousing
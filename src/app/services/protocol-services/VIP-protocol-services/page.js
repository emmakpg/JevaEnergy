import Image from 'next/image'
import { Header } from '@/components/Header'
import Divider from '@/components/Divider'

const VIPProtocol = () => {
  return (
   
    <div>
    <Header
     pageTitle="VIP Protocol Services"
     imgURL="bg-vip"
     subText="Elite Treatment from Start to Finish"
     />
  
  <section className="max-container  lg:py-32  sm:py-4">
  
  <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5">
  <div className="m-5">
  <div className="flex  mt-10">
  <Divider divideColor="bg-primary"/>
  </div>
  

  <p className="lg:text-lg font-thin leading-normal ml-4 m-6">
  Experience top-tier, hassle-free service with our VIP protocol solutions. From private airport transfers to discreet, high-level event support, our team ensures seamless handling of all formalities. With professionalism and attention to detail, 
  we guarantee a smooth, stress-free experience for you and your guests.
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

export default VIPProtocol
import Image from 'next/image'
import Button from '@/components/Button'
import { Header } from '@/components/Header'
import Divider from '@/components/Divider'

const OnsiteWorkshop = () => {
  return (
   
  <div>
  <Header
   pageTitle="Advanced System & On-Site Workshop Services"
   imgURL="bg-workshop"
   subText="Jeva Energies & Solutions offers high-quality bolting products designed for securing critical connections across a range of applications."
   />

<section className="max-container  lg:py-32  sm:py-4">

<div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5">
<div className="m-5">
<div className="flex  mt-10">
<Divider divideColor="bg-primary"/>
</div>
  <h2 className="text-primary lg:text-[35px] text-[25px] leading-8 font-medium m-6 ml-4">Advanced Systems and On-Site Services</h2>

  <p className="lg:text-lg font-thin leading-normal ml-4">Jeva Energies & Solutions provides cutting-edge solutions designed to enhance safety, 
    efficiency, and operational reliability across various industries.</p>


        


</div>
<div>
  <div className="lg:mt-0">
    <Image src="/assets/images/officehero.webp"
    alt="core_values"
    width={700}
    height={700}
    className="shadow-lg lg:rounded-lg"
    />

  </div>
 
</div>

</div>

</section>

<section className="sm:py-4 bg-[#f5f5f5] lg:py-16">

<div className="max-container">

<h2 className="text-primary lg:text-2xl text-lg font-medium m-6 ml-4">Fire Suppression Systems</h2>
<p className="lg:text-lg font-thin leading-normal ml-4">
Our advanced fire suppression systems offer rapid response and effective fire control to protect valuable assets and enhance safety.
</p>


<h2 className="text-primary lg:text-2xl text-lg font-medium m-6 ml-4">Auto Lubrication Systems</h2>
<p className="lg:text-lg font-thin leading-normal ml-4">
We supply state-of-the-art auto lubrication systems that ensure consistent lubrication of machinery, reducing wear and extending equipment lifespan.
</p>


<h2 className="text-primary lg:text-2xl text-lg font-medium m-6 ml-4">On-Site Workshop Services</h2>
<p className="lg:text-lg font-thin leading-normal ml-4">
Our mobile workshops are fully equipped to perform a variety of repair and maintenance tasks, providing immediate support and minimizing operational disruptions.
</p>



</div>

</section>

<section>
    <div className="relative bg-workshop w-full lg:h-[500px] h-[350px] bg-cover bg-center">
    <div className="absolute inset-0 bg-black bg-opacity-70 z-0"></div>
    

    <div className="relative z-30">
      <h6 className='uppercase text-sky-300 text-lg text-center lg:pt-20'></h6>
      <div className="flex justify-center mt-5 pt-5 mb-10 xs:pt-8">
      <Divider divideColor="bg-white"/>
    </div>  
         
      <p className='max-container text-center lg:text-lg leading-normal lg:pt-4 font-thin text-white'>
      Jeva Energies & Solutions is dedicated to delivering these advanced systems and services to ensure optimal performance
       and safety across diverse industrial applications. 
      If you&apos;re interested in learning more or wish to discuss your needs, please contact us to explore how we can support your business.
      </p>
        

      
      <div className='flex justify-center py-8'>
      <Button label="Reach Out To Us" link="/contact-us"/>
      </div>
    </div>

  
   

   
    
  </div>
    
  </section>
   
</div>
  )
}

export default OnsiteWorkshop
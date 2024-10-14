
import Button from '@/components/Button'
import { Header } from '@/components/Header'
import Divider from '@/components/Divider'

import { marine_support } from '@/constants'
import Image from 'next/image'
import Card from '@/components/Card'


const MarineSupport = () => {
  return (
    <div>
  <Header
   pageTitle="Marine Support Services"
   imgURL="bg-marine"
   subText="Optimizing Maritime Operations with Precision and Expertise"
   />

<section className="max-container  lg:py-32  sm:py-4">

<div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5">
<div className="m-5">
<div className="flex lg:mb-10 mb-4 lg:mt-20">
<Divider divideColor="bg-primary"/>
</div>


  <p className="lg:text-lg font-thin ml-4">At Jeva Energies & Solutions, we deliver comprehensive marine support services designed
     to meet the complex demands of the maritime industry. Our services span the supply, installation, and maintenance of essential marine
      equipment, coupled with expert logistics solutions. With a focus on operational efficiency,
     safety, and reliability, we ensure seamless maritime operations for our clients.</p>


        


</div>

<div className="mt-12">
    <Image src="/assets/images/marine.webp"
    alt="core_values"
    width={600}
    height={600}
    className="shadow-lg lg:rounded-lg"
    />

  </div>

</div>


</section>


<section className="py-4 bg-[#f5f5f5] lg:py-16">

<div className="max-container">

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-10">
   {marine_support.map((item)=>(
   
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


<section className="bg-white lg:py-10 pb-6">
<div className="max-container">
  
<h2 className="text-primary lg:text-[30px] text-[25px] leading-8 font-medium m-6 ml-4">Why Partner with Jeva Energies & Solutions?</h2>
<p className="lg:text-lg font-thin leading-normal ml-4 lg:pb-20">
At Jeva Energies & Solutions, we are committed to enhancing the operational efficiency and safety of your maritime operations. 
Our specialized marine support services, coupled with industry expertise and dedication, make us the ideal partner for your marine logistics, 
equipment, and support needs. Trust us to keep your maritime ventures running smoothly and effectively.
</p>



</div>

</section>

<section className="">
      <div className="relative bg-marine w-full h-[500px] bg-cover bg-center">
      <div className="absolute inset-0 bg-black bg-opacity-70 z-0"></div>
      

      <div className="relative z-30">
        <h6 className='uppercase text-sky-300 text-lg text-center lg:pt-24 pt-8'>Contact Us Today</h6>
        <div className="flex justify-center mt-5 mb-10">
        <Divider divideColor="bg-white"/>
      </div>  
           
        <p className='max-container text-center lg:text-lg leading-normal lg:pt-4 font-thin text-white'>
        Take your maritime operations to the next level with Jeva Energies & Solutions.
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

export default MarineSupport
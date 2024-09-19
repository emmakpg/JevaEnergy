
import Image from 'next/image'
import Button from '@/components/Button'
import { Header } from '@/components/Header'
import Divider from '@/components/Divider'

const BoltFitting = () => {
  return (
   
  <div>
  <Header
   pageTitle="Bolt & Fittings"
   imgURL="bg-bolt"
   subText="Jeva Energies & Solutions offers high-quality bolting products designed for securing critical connections across a range of applications."
   />

<section className="max-container  lg:py-32  sm:py-4">

<div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5">
<div className="m-5">
<div className="flex  mt-10">
<Divider divideColor="bg-primary"/>
</div>
  <h2 className="text-primary lg:text-[35px] text-[25px] leading-8 font-medium m-6 ml-4">Bolting Products for Your Most Critical Connections</h2>

  <p className="lg:text-lg font-thin leading-normal ml-4">Jeva Energies & Solutions offers high-quality bolting products designed for securing 
    critical connections across a range of applications. Whether for offshore drilling and production equipment, power-generating turbo machinery, pumps, valves, pressure vessels, or industrial machinery, 
    our products are engineered to meet the highest standards of reliability and performance.</p>


        


</div>
<div>
  <div className="lg:mt-4">
    <Image src="/assets/images/bolt1.webp"
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

<h2 className="text-primary lg:text-2xl text-lg font-medium m-6 ml-4">Bolt and Fitting Types</h2>
<p className="lg:text-lg font-thin leading-normal ml-4">
U-bolt, Stud Bolt, Hex Bolts, Screws, etc.
</p>


<h2 className="text-primary lg:text-2xl text-lg font-medium m-6 ml-4">Bolting Specifications</h2>
<p className="lg:text-lg font-thin leading-normal ml-4">
ASME B18, A193, A194, A320, etc.
</p>


<h2 className="text-primary lg:text-2xl text-lg font-medium m-6 ml-4">Coating</h2>
<p className="lg:text-lg font-thin leading-normal ml-4">
Xylan/PTFE, HDG, Zinc, Chromium, etc.
</p>



<h2 className="text-primary lg:text-2xl text-lg font-medium m-6 ml-4">Product Certificate</h2>
<p className="lg:text-lg font-thin leading-normal ml-4">
BS EN 10204 Type 3.1
</p>



</div>

</section>

<section>
    <div className="relative bg-bolt w-full lg:h-[500px] h-[350px] bg-cover bg-center">
    <div className="absolute inset-0 bg-black bg-opacity-70 z-0"></div>
    

    <div className="relative z-30">
      <h6 className='uppercase text-sky-300 text-lg text-center lg:pt-20'></h6>
      <div className="flex justify-center mt-5 pt-5 mb-10 xs:pt-8">
      <Divider divideColor="bg-white"/>
    </div>  
         
      <p className='max-container text-center lg:text-lg leading-normal lg:pt-4 font-thin text-white'>
      Jeva Energies & Solutions is leading the way in the production of engineered bolting for engineering services and safety-related
       applications across Africa. If you&apos;re interested in learning more or wish to discuss your needs,
       please contact us to explore how we can support your business.
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

export default BoltFitting
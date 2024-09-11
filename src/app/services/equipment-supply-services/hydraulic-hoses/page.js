
import Image from 'next/image'
import Button from '@/components/Button'
import { Header } from '@/components/Header'
import Divider from '@/components/Divider'


const HydraulicHose = () => {
  return (
   
  <div>
  <Header
   pageTitle="Hydraulic Hoses"
   imgURL="bg-hose"
   subText="Jeva Energies & Solutions offers high-quality bolting products designed for securing critical connections across a range of applications."
   />

<section className="max-container  lg:py-32  sm:py-4">

<div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5">
<div className="m-5">
<div className="flex  mt-10">
<Divider divideColor="bg-primary"/>
</div>
  <h2 className="text-primary lg:text-[35px] text-[25px] leading-8 font-medium m-6 ml-4">Hose Assemblies Management Services </h2>

  <p className="text-lg font-thin leading-normal ml-4">Jeva Energies & Solutions also specializes in hose assemblies and complementary products,
     catering to diverse needs across the oil and gas, renewable energy,
     general industrial, and marine sectors in West Africa. Our services include:</p>


        


</div>
<div>
  <div className="lg:mt-4">
    <Image src="/assets/images/water.webp"
    alt="core_values"
    width={700}
    height={700}
    className="shadow-lg rounded-lg"
    />

  </div>
 
</div>

</div>

</section>

<section className="sm:py-4 bg-[#f5f5f5] lg:py-16">

<div className="max-container">

<h2 className="text-primary lg:text-2xl text-lg font-medium m-6 ml-4">High-Pressure Pipes and Fittings</h2>
<p className="text-lg font-thin leading-normal ml-4">
Engineered to withstand high fluid pressures, ideal for drilling and injection systems.
</p>


<h2 className="text-primary lg:text-2xl text-lg font-medium m-6 ml-4">Specialist Hose Assemblies</h2>
<p className="text-lg font-thin leading-normal ml-4">
Pre-assembled and ready for immediate use in hydraulic, pneumatic, and other fluid transfer systems.
</p>


<h2 className="text-primary lg:text-2xl text-lg font-medium m-6 ml-4">End Connections and Fittings</h2>
<p className="text-lg font-thin leading-normal ml-4">
  Components used to connect hoses to pipes, valves, and other equipment, ensuring secure and reliable connections.
</p>



<h2 className="text-primary lg:text-2xl text-lg font-medium m-6 ml-4">Metallic Hoses</h2>
<p className="text-lg font-thin leading-normal ml-4">
Offering high strength and flexibility, these hoses are designed for extreme temperatures and pressures and are used in high-vibration environments.
</p>


<h2 className="text-primary lg:text-2xl text-lg font-medium m-6 ml-4">Field Support Services</h2>
<p className="text-lg font-thin leading-normal ml-4">
Providing on-site assistance for hose maintenance, repair, and installation needs.
</p>


<h2 className="text-primary lg:text-2xl text-lg font-medium m-6 ml-4">Recertification - Pressure Testing</h2>
<p className="text-lg font-thin leading-normal ml-4">
Controlled testing to verify that hoses can continue to withstand the required pressure, ensuring safety and reliability.
</p>


</div>

</section>

<section>
    <div className="relative bg-hose w-full lg:h-[500px] h-[320px] bg-cover bg-center">
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
  
      
      <div className='flex justify-center pt-8'>
      <Button label="Reach Out To Us" link="/contact-us"/>
      </div>
    </div>

  
   

   
    
  </div>
    
  </section>
   
</div>
  )
}

export default HydraulicHose
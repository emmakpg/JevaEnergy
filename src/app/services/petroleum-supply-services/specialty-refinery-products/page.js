import Image from 'next/image'
import { Header } from '@/components/Header'
import Divider from '@/components/Divider'

const SpecialtyRefinery = () => {
  return (
    
    <div>
    <Header
     pageTitle="Specialty and Refinery Products"
     imgURL="bg-bulk"
     subText="We also supply specialty products and refinery fractions essential for refining and petrochemical operations"
     />
  
  <section className="max-container  lg:py-32  sm:py-4">
  
  <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5">
  <div className="m-5">
  <div className="flex  mt-10">
  <Divider divideColor="bg-primary"/>
  </div>
  
  

  <h2 className="text-primary lg:text-2xl text-lg font-medium m-6 ml-4">Naphtha</h2>
<p className="lg:text-lg font-thin leading-normal ml-4">
A critical chemical feedstock for petrochemical production and refining processes.
</p>

<h2 className="text-primary lg:text-2xl text-lg font-medium m-6 ml-4">Refinery Petroleum Fractions</h2>
<p className="lg:text-lg font-thin leading-normal ml-4">
Diverse fractions used across multiple industries for energy production and manufacturing.
</p>

<h2 className="text-primary lg:text-2xl text-lg font-medium m-6 ml-4">Other Designated Petroleum Products</h2>
<p className="lg:text-lg font-thin leading-normal ml-4">
We provide specialized petroleum products tailored to meet the unique demands of various industries.
</p>


  
  </div>
  <div className="lg:mt-2">
    <div className="lg:mt-12">
      <Image src="/assets/images/refinery.webp"
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

export default SpecialtyRefinery
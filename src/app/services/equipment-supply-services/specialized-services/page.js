import Image from 'next/image'
import { Header } from '@/components/Header'
import Divider from '@/components/Divider'

const SpecializedServices = () => {
  return (
    
  <div>
  <Header
   pageTitle="Specialized Services"
   imgURL="bg-specialized"
   subText="Expert Solutions for Industry Demands"
   />

<section className="max-container  lg:py-32  sm:py-4">

<div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5">
<div className="m-5">
<div className="flex  mt-10">
<Divider divideColor="bg-primary"/>
</div>

     <h2 className="text-primary lg:text-2xl text-lg font-medium m-6 ml-4">Cold Room Services</h2>
<p className="lg:text-lg font-thin leading-normal ml-4">
Installation and maintenance of cold rooms to safely store temperature-sensitive materials, ensuring product integrity.
</p>


<h2 className="text-primary lg:text-2xl text-lg font-medium m-6 ml-4">Personal Protective Equipment (PPE)</h2>
<p className="lg:text-lg font-thin leading-normal ml-4">
Safety is our priority. We offer a comprehensive range of PPE to protect your workforce in challenging environments.
</p>



</div>
<div className=''>
  <div className="lg:mt-10">
    <Image src="/assets/images/specialized.webp"
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

export default SpecializedServices
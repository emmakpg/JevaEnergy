import Image from 'next/image'
import Button from '@/components/Button'
import { Header } from '@/components/Header'
import Divider from '@/components/Divider'

const OfficeSupplies = () => {
  return (
    
  <div>
  <Header
   pageTitle="Office Equipment and Workplace Appliances"
   imgURL="bg-office"
   subText="Enhancing Workplace Efficiency and Comfort"
   />

<section className="max-container  lg:py-32  sm:py-4">

<div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5">
<div className="m-5">
<div className="flex  mt-10">
<Divider divideColor="bg-primary"/>
</div>

     <h2 className="text-primary lg:text-2xl text-lg font-medium m-6 ml-4">Office Appliances</h2>
<p className="lg:text-lg font-thin leading-normal ml-4">
From essential office machines like printers, copiers, and shredders to
 breakroom appliances, we supply equipment that boosts productivity and workplace comfort.
</p>


<h2 className="text-primary lg:text-2xl text-lg font-medium m-6 ml-4">Workplace Furniture</h2>
<p className="lg:text-lg font-thin leading-normal ml-4">
We provide a wide range of ergonomic furniture and fittings, ensuring that your 
workplace is functional, comfortable, and conducive to efficiency.
</p>



</div>
<div className=''>
  <div className="lg:mt-10">
    <Image src="/assets/images/office.webp"
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

export default OfficeSupplies
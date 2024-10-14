
import Image from 'next/image'
import Button from '@/components/Button'
import { Header } from '@/components/Header'
import Divider from '@/components/Divider'


const HydraulicHose = () => {
  return (
   
  <div>
  <Header
   pageTitle="IT and Office Solutions"
   imgURL="bg-it_office"
   subText="Optimizing Administrative Efficiency"
   />

<section className="max-container  lg:py-32  sm:py-4">

<div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5">
<div className="m-5">
<div className="flex  mt-10">
<Divider divideColor="bg-primary"/>
</div>

     <h2 className="text-primary lg:text-2xl text-lg font-medium m-6 ml-4">Computers & Data Storage Systems</h2>
<p className="lg:text-lg font-thin leading-normal ml-4">
We provide high-performance computing systems and 
secure data storage solutions, ensuring seamless operations and effective data management.
</p>


<h2 className="text-primary lg:text-2xl text-lg font-medium m-6 ml-4">Computer Accessories & Consumables</h2>
<p className="lg:text-lg font-thin leading-normal ml-4">
Equip your IT infrastructure with top-quality peripherals and consumables, maximizing efficiency in every task.
</p>



<h2 className="text-primary lg:text-2xl text-lg font-medium m-6 ml-4">Office Stationery</h2>
<p className="lg:text-lg font-thin leading-normal ml-4">
Our extensive range of office supplies ensures that your administrative tasks are streamlined for daily operations.</p>




        


</div>
<div className='lg:mt-10'>
  <div className="lg:mt-10">
    <Image src="/assets/images/it_office.webp"
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

export default HydraulicHose
import Image from 'next/image'
import Button from '@/components/Button'
import { Header } from '@/components/Header'
import Divider from '@/components/Divider'

const OnsiteWorkshop = () => {
  return (
   
  <div>
  <Header
   pageTitle="Parts and Chemicals Supply"
   imgURL="bg-parts_n_chem"
   subText="Supporting Continuous Operations"
   />

<section className="max-container  lg:py-32  sm:py-4">

<div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5">
<div className="m-5">
<div className="flex  mt-10">
<Divider divideColor="bg-primary"/>
</div>

     <h2 className="text-primary lg:text-2xl text-lg font-medium m-6 ml-4">Spare Parts</h2>
<p className="lg:text-lg font-thin leading-normal ml-4">
We maintain an inventory of critical spare parts, minimizing downtime and keeping your systems operational.
</p>


<h2 className="text-primary lg:text-2xl text-lg font-medium m-6 ml-4">Chemical Supply</h2>
<p className="lg:text-lg font-thin leading-normal ml-4">
Our premium-quality chemicals are tailored to meet the rigorous standards of the oil and gas industry,
 supporting smooth and efficient operations.
</p>



</div>
<div className=''>
  <div className="lg:mt-2">
    <Image src="/assets/images/parts.webp"
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

export default OnsiteWorkshop
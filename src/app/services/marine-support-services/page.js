
import Button from '@/components/Button'
import { Header } from '@/components/Header'
import Divider from '@/components/Divider'
import PCard from '@/components/PCard'
import { csr } from '@/constants'
import Image from 'next/image'

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
</div>
  )
}

export default MarineSupport
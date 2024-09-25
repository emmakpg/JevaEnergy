
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
   subText="At Jeva Energies & Solutions, we are committed to creating a positive impact beyond our core oil and gas business."
   />

<section className="max-container  lg:py-32  sm:py-4">

<div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5">
<div className="m-5">
<div className="flex lg:mb-10 mb-4 lg:mt-20">
<Divider divideColor="bg-primary"/>
</div>
  <p className="lg:text-lg font-thin ml-4">At Jeva Energies & Solutions, we are committed to creating a positive impact 
    beyond our core oil and gas business. Our Corporate Social Responsibility (CSR) initiatives focus on education, health, sanitation, 
    and environmental stewardship, aimed at fostering sustainable community development.</p>


        


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
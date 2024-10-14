
import Image from 'next/image'
import Button from '@/components/Button'
import { Header } from '@/components/Header'
import Divider from '@/components/Divider'

const BoltFitting = () => {
  return (
   
  <div>
  <Header
   pageTitle="Communication and Connectivity"
   imgURL="bg-connectivity"
   subText="Ensuring Seamless Field Operations"
   />

<section className="max-container  lg:py-32  sm:py-4">

<div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5">
<div className="m-5">
<div className="flex  mt-10">
<Divider divideColor="bg-primary"/>
</div>


     <h2 className="text-primary lg:text-2xl text-lg font-medium m-6 ml-4">Communication Equipment</h2>
<p className="lg:text-lg font-thin leading-normal ml-4">
We offer advanced communication systems that guarantee reliable 
connectivity across your field operations, promoting effective collaboration.
</p>



        


</div>
<div className='lg:mt-12'>
  <div className="lg:mt-10">
    <Image src="/assets/images/communication.webp"
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

export default BoltFitting

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
We provide cutting-edge communication systems designed to ensure seamless and reliable connectivity across all your field operations. 
Our solutions promote real-time collaboration, enabling your teams to communicate effortlessly, whether they are on-site, in remote locations, 
or across different branches. With our advanced technology, you can enhance operational efficiency, reduce downtime, and improve decision-making 
processes by fostering quick and clear information exchange. Our systems are built for reliability, ensuring that your field operations stay 
connected even in the most challenging environments, supporting the smooth execution of your projects.
</p>



        


</div>
<div className=''>
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
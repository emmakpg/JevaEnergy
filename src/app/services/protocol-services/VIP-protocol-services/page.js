import Image from 'next/image'
import Button from '@/components/Button'
import { Header } from '@/components/Header'
import Divider from '@/components/Divider'
import RCard from '@/components/RCard'
import { logistics_sub } from '@/constants'

const Logistics = () => {
  return (
   
  <div>
  <Header
   pageTitle="Logistics Services"
   imgURL="bg-logistics-hero"
   subText="Jeva Energies & Solutions offers comprehensive logistics services to support industries operating in remote locations."
   />

<section className="max-container  lg:py-32  sm:py-4">

<div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5">
<div className="m-5">
<div className="flex  mt-10">
<Divider divideColor="bg-primary"/>
</div>
  <h2 className="text-primary lg:text-[35px] text-[25px] leading-7 font-medium m-6 ml-4">Maintaining Smooth Operations</h2>

  <p className="lg:text-lg font-thin leading-normal ml-4">Jeva Energies & Solutions offers comprehensive logistics services to support
     industries operating in remote locations. From the transport of personnel and bulky equipment to hazardous materials, our solutions are
     designed to keep your projects on track from initial planning to final delivery.</p>


        


</div>
<div>
  <div className="lg:mt-4">
    <Image src="/assets/images/logistics_page.webp"
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

<div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10">
        {
          logistics_sub.map((item,index)=>(
            <div key={index}>
              <RCard
              imageUrl={item.imageURL}
              label={item.title}
              value={item.value}
              />
              </div>

          ))
        }

        <div>
          
          
        </div>
        
      </div>



</div>

</section>


   
</div>
  )
}

export default Logistics
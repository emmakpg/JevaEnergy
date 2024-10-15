import Image from 'next/image'
import { Header } from '@/components/Header'
import Divider from '@/components/Divider'
import RCard from '@/components/RCard'
import { transportation_sub } from '@/constants'

const Transportation = () => {
  return (
   
  <div>
  <Header
   pageTitle="Transportation and Protocol Services"
   imgURL="bg-transport"
   subText="We provide a well-maintained fleet of vehicles, ranging from sedans and SUVs to
     trucks and specialized vehicles, all available for lease or rental."
   />

<section className="max-container  lg:py-32  sm:py-4">

<div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5">
<div className="m-5">
<div className="flex  mt-10 lg:mb-10 mb-4">
<Divider divideColor="bg-primary"/>
</div>

  <p className="lg:text-lg font-thin leading-normal ml-4">We provide a well-maintained fleet of vehicles, ranging from sedans and SUVs to
     trucks and specialized vehicles, all available for lease or rental. Our flexible leasing options, coupled with advanced vehicle tracking systems, allow for real-time monitoring, route optimization, and proactive maintenance. Additionally, our protocol services include driver management, immigration assistance, lounge access, airline bookings,
     and hotel arrangements, ensuring a smooth and secure travel experience.</p>


        


</div>
<div>
  <div className="lg:mt-5">
    <Image src="/assets/images/transportation1.webp"
    alt="services"
    width={700}
    height={700}
    className="shadow-lg rounded-lg"
    />

  </div>
 
</div>

</div>

</section>

<section className="py-5 bg-[#f5f5f5] lg:py-16">

<div className="max-container">

<div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10">
        {
          transportation_sub.map((item,index)=>(
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

export default Transportation
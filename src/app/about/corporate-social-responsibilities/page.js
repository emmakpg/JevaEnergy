
import Image from 'next/image'
import Button from '@/components/Button'
import { Header } from '@/components/Header'
import Divider from '@/components/Divider'
import PCard from '@/components/PCard'
import { csr } from '@/constants'

const CSR = () => {
  return (
   
  <div>
  <Header
   pageTitle="Corporate Social Responsibilities"
   imgURL="bg-csr"
   subText="At Jeva Energies & Solutions, we are committed to creating a positive impact beyond our core oil and gas business."
   />

<section className="max-container  lg:py-32  sm:py-4">

<div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5">
<div className="m-5">
<div className="flex lg:mb-10 mb-4">
<Divider divideColor="bg-primary"/>
</div>
  <p className="lg:text-lg font-thin ml-4">At Jeva Energies & Solutions, we are committed to creating a positive impact 
    beyond our core oil and gas business. Our Corporate Social Responsibility (CSR) initiatives focus on education, health, sanitation, 
    and environmental stewardship, aimed at fostering sustainable community development.</p>


        


</div>


</div>

</section>

<section className="sm:py-4 bg-[#f5f5f5] lg:py-16">


<div className="max-container">

<div className="max-container grid sm:grid-cols-1 md:grid-cols-1 gap-10">
        {
          csr.map((item,index)=>(
            <div key={index}>
              <PCard
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

<section>
    <div className="relative bg-csr w-full lg:h-[500px] h-[350px] bg-cover bg-center">
    <div className="absolute inset-0 bg-black bg-opacity-70 z-0"></div>
    

    <div className="relative z-30">
      <h6 className='uppercase text-sky-300 text-lg text-center lg:pt-20'></h6>
      <div className="flex justify-center mt-5 pt-5 mb-10 xs:pt-8">
      <Divider divideColor="bg-white"/>
    </div>  
         
      <p className='max-container text-center lg:text-lg leading-normal lg:pt-4 font-thin text-white'>
      Through these CSR efforts, we aim to make a lasting, positive change in the communities we serve, aligning our business 
      success with the greater good.
      </p>
        

      
      <div className='flex justify-center py-8'>
      <Button label="Reach Out To Us" link="/contact-us"/>
      </div>
    </div>

  
   

   
    
  </div>
    
  </section>
   
</div>
  )
}

export default CSR
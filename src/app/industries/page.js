import Button from '@/components/Button'
import { Header } from '@/components/Header'
import Divider from '@/components/Divider'
import RCard from '@/components/RCard'
import { csr } from '@/constants'
import { industries } from '@/constants'

const Industries = () => {
  return (
    <div>
  <Header
   pageTitle="Industries We Serve"
   imgURL="bg-industry_hero"
   subText="At Jeva Energies & Solutions, we pride ourselves on being a dynamic force in West Africa’s thriving industries. "
   />

<section className="max-container  lg:py-32  sm:py-4">

<div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5">
<div className="m-5">
<div className="flex lg:mb-10 mb-4">
<Divider divideColor="bg-primary"/>
</div>
  <p className="lg:text-lg font-thin ml-4">At Jeva Energies & Solutions, we pride ourselves on being a dynamic force in West Africa’s thriving industries. With deep expertise in both downstream and upstream operations within the oil and gas sector, we have successfully expanded our capabilities to add significant value in other key sectors, including mining, construction, power, marine, food and beverage, and petrochemicals. Our integrated approach ensures that we bring innovation, reliability,
     and unmatched experience to every industry we serve.</p>


        


</div>


</div>

</section>

<section className="sm:py-4 bg-[#f5f5f5] lg:py-16">


<div className="max-container">

<div className="max-container grid sm:grid-cols-1 md:grid-cols-2 gap-10">
        {
          industries.map((item,index)=>(
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

<section>
    <div className="relative bg-industry_hero w-full lg:h-[500px] h-[350px] bg-cover bg-center">
    <div className="absolute inset-0 bg-black bg-opacity-70 z-0"></div>
    

    <div className="relative z-30">
      <h6 className='uppercase text-sky-300 text-lg text-center lg:pt-20'></h6>
      <div className="flex justify-center mt-5 pt-5 mb-10 xs:pt-8">
      <Divider divideColor="bg-white"/>
    </div>  
         
      <p className='max-container text-center lg:text-lg leading-normal lg:pt-4 font-thin text-white'>
      Overcome industry challenges with confidence. Harness our expertise to drive your success and growth across Africa with tailored, innovative solutions.
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

export default Industries
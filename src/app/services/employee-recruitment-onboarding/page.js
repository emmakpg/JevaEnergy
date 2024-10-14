
import { Header } from "@/components/Header"
import Divider from "@/components/Divider"
import Image from "next/image"
import Button from "@/components/Button"
import { man_supply } from "@/constants"
import Card from "@/components/Card"


const EmployeeRecruitment = () => {
  return (
    
      <div>
        <Header
         pageTitle="Employee Recruitment & Onboarding"
         imgURL="bg-pg_onboarding"
         subText="Ensuring a Skilled and Reliable Workforce"
         />

<section className="max-container  lg:py-32  sm:py-4">

<div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5">
  <div className="m-5">
  <div className="flex  mt-10">
  <Divider divideColor="bg-primary"/>
  </div>
  
  
    <p className="lg:text-lg font-thin leading-normal ml-4 m-6">
    At Jeva Energies & Solutions, we specialize in providing comprehensive manpower supply services across a range of industries.
    Whether your project requires skilled professionals or general labor, our flexible workforce solutions are tailored to meet the
    specific demands of your business. We understand that the right people are key to driving project success, and our approach ensures 
    that your operational goals are met efficiently.
    </p>


  </div>
  <div>
    <div className="lg:mt-2">
      <Image src="/assets/images/mansupply.webp"
      alt="core_values"
      width={700}
      height={700}
      className="shadow-lg lg:rounded-lg"
      />

    </div>
   
  </div>

</div>

</section>


<section className="py-4 bg-[#f5f5f5] lg:py-16">

<div className="max-container">

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-10">
   {man_supply.map((item)=>(
   
      <Card
      key={item.title}
      title={item.title}
      caption={item.value}
      imageURL={item.imageURL}
      link={item.link}
      
      />

    

   ))

}

  </div>


</div>

</section>

<section className="bg-white py-12">
<div className="max-container">
<h2 className="text-primary lg:text-[35px] text-[25px] font-medium m-6 ml-4">Why Partner with Jeva Energies & Solutions?</h2>

<h2 className="text-primary lg:text-2xl text-lg font-medium m-6 ml-4">Industry Expertise</h2>
<p className="lg:text-lg font-thin leading-normal ml-4">
Benefit from our deep industry knowledge and commitment to providing top-tier manpower solutions.
</p>

<h2 className="text-primary lg:text-2xl text-lg font-medium m-6 ml-4">Tailored Workforce</h2>
<p className="lg:text-lg font-thin leading-normal ml-4">
We align our manpower supply with your project goals, ensuring you have the right people in place to succeed.
</p>





</div>

</section>


<section>
      <div className="relative bg-manpower w-full h-[400px] bg-cover bg-center p-2">
      <div className="absolute inset-0 bg-black bg-opacity-70 z-0"></div>
      

      
    <div className="relative z-30">
      <h6 className='uppercase text-sky-300 text-lg text-center lg:pt-20 mt-8 lg:mt-0'>Ready to Strengthen Your Workforce?</h6>
      <div className="flex justify-center mt-1 pt-5 mb-2 xs:pt-8">
      <Divider divideColor="bg-white"/>
    </div>  
         
      <p className='max-container text-center lg:text-lg leading-normal lg:pt-4 font-thin text-white'>
      Partner with Jeva Energies & Solutions today for reliable manpower solutions that help your business thrive.
       Reach out to us to learn how we can support your specific labor needs and project requirements.
        </p>

        
        <div className='flex justify-center py-8 mt-8'>
        <Button label="Reach Out To Us" link="/contact-us"/>
        </div>
      </div>

    
     

     
      
    </div>
      
    </section>

    </div>
 
  )

}

export default EmployeeRecruitment
import Divider from "@/components/Divider"
import { Header } from "@/components/Header"
import Image from "next/image"
import Link from "next/link"
import Button from "@/components/Button"
import { consultancy_services } from "@/constants"
import RCard from "@/components/RCard"


const ConsultancyServices = () => {
  return (
    <div>
    <Header
     pageTitle="General Consultancy Services"
     imgURL="bg-pg_consultancy"
     subText="Reach out to us today to discuss how Jeva Energy & Solutions can address your training needs and enhance your team's safety and preparedness."
     />

     
<section className="max-container  lg:py-32  sm:py-4">

<div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5">
  <div className="m-5">
  <div className="flex  mt-10">
  <Divider divideColor="bg-primary"/>
  </div>
    <h2 className="text-primary lg:text-[35px] text-[25px] leading-8 font-medium m-6 ml-4">Empowering Your Workforce for Industry Excellence</h2>

    <p className="lg:text-lg font-thin leading-normal ml-4">At Jeva Energies & Solutions, we are committed to empowering your workforce with the 
      specialized skills and knowledge crucial for excelling in the demanding oil and gas industry. Our consultancy services deliver targeted
       training and competency development programs that prepare your team to effectively manage workplace risks, adhere to 
      rigorous industry regulations, and operate efficiently in high-stakes environments.</p>


<p className="lg:text-lg font-thin leading-normal ml-4 pt-2">We offer a diverse portfolio of safety and survival training courses, 
  meticulously designed to meet the unique demands of the oil and gas sector. Our programs focus on enhancing your workforce’s competency,
   ensuring they are fully equipped to handle emergencies with confidence and maintain safety in high-risk settings.</p>

  </div>
  <div>
    <div className="lg:mt-32">
      <Image src="/assets/images/consult.webp"
      alt="core_values"
      width={700}
      height={700}
      className="shadow-lg lg:rounded-lg"
      />

    </div>
   
  </div>

</div>

</section>

<section className="sm:py-4 bg-[#f5f5f5] lg:py-16 pt-6">

<div className="max-container">


<div className="max-container grid sm:grid-cols-1 md:grid-cols-2 gap-10">
        {
          consultancy_services.map((item,index)=>(
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
<section className="bg-white lg:py-10 pb-6">
<div className="max-container">
  
<h2 className="text-primary lg:text-[35px] text-[25px] leading-8 font-medium m-6 ml-4">Why Partner with Jeva Energies & Solutions?</h2>
<h2 className="text-primary text-2xl font-medium m-6 ml-4">Access to Industry Expertise</h2>
<p className="lg:text-lg font-thin leading-normal ml-4">
When you partner with Jeva Energies & Solutions, you gain access to a team of seasoned professionals with deep industry expertise. Our commitment to excellence and client success drives us to deliver 
solutions that make a tangible difference in your operations.
</p>

<h2 className="text-primary text-2xl font-medium m-6 ml-4">Tailored Support for Your Success</h2>
<p className="lg:text-lg font-thin leading-normal ml-4">
Whether your objective is to upskill your workforce, streamline operations, 
or stay ahead of industry changes, we provide the tailored support and guidance needed to achieve your goals.
</p>

</div>

</section>

<section className="">
      <div className="relative bg-consultancy_hero w-full h-[500px] bg-cover bg-center">
      <div className="absolute inset-0 bg-black bg-opacity-70 z-0"></div>
      

      <div className="relative z-30">
        <h6 className='uppercase text-sky-300 text-lg text-center lg:pt-24 pt-8'>Take the Next Step</h6>
        <div className="flex justify-center mt-5 mb-10">
        <Divider divideColor="bg-white"/>
      </div>  
           
        <p className='max-container text-center lg:text-lg leading-normal lg:pt-4 font-thin text-white'>
        Ready to elevate your workforce and optimize your operations? Contact Jeva Energies & Solutions today
        to explore how our consultancy services can address your specific needs and help your organization achieve sustained success
        in the oil and gas sector.
        </p>
          

        
        <div className='flex justify-center py-8 mt-8 xs:m-0'>
        <Button label="Reach Out To Us" link="/contact-us"/>
        </div>
      </div>

    
     

     
      
    </div>
      
    </section>
</div>
  )
}

export default ConsultancyServices
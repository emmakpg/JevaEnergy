import Divider from "@/components/Divider"
import { Header } from "@/components/Header"
import Image from "next/image"
import Link from "next/link"
import Button from "@/components/Button"


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
    <h2 className="text-primary text-[35px] font-medium m-6 ml-4 leading-10">Empowering Your Workforce for Industry Excellence</h2>

    <p className="text-lg font-thin leading-normal ml-4">At Jeva Energies & Solutions, we are committed to empowering your workforce with the 
      specialized skills and knowledge crucial for excelling in the demanding oil and gas industry. Our consultancy services deliver targeted
       training and competency development programs that prepare your team to effectively manage workplace risks, adhere to 
      rigorous industry regulations, and operate efficiently in high-stakes environments.</p>


  <div className="flex  mt-10">
  <Divider divideColor="bg-primary"/>
  </div>
<h2 className="text-primary text-[35px] font-medium m-6 ml-4 leading-10">Comprehensive Training Programs Tailored for Industry Needs</h2>

<p className="text-lg font-thin leading-normal ml-4">We offer a diverse portfolio of safety and survival training courses, 
  meticulously designed to meet the unique demands of the oil and gas sector. Our programs focus on enhancing your workforce’s competency,
   ensuring they are fully equipped to handle emergencies with confidence and maintain safety in high-risk settings.</p>

  </div>
  <div>
    <div className="lg:mt-32">
      <Image src="/assets/images/petroleum.webp"
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

<h2 className="text-primary text-2xl font-medium m-6 ml-4">Regulatory Compliance & Safety</h2>
<p className="text-lg font-thin leading-normal ml-4">
Our training emphasizes regulatory compliance, helping your team not only meet but exceed industry standards. 
By reducing risks and fostering a culture of safety, we contribute to creating a more secure and productive workplace.
</p>

<h2 className="text-primary text-2xl font-medium m-6 ml-4">Strategic Consultancy and Expert Guidance - Optimizing Operations for Success
</h2>
<p className="text-lg font-thin leading-normal ml-4">
Our consultancy services go beyond training by offering strategic planning and expert advice tailored to the
 complexities of the oil and gas sector. We collaborate closely with our clients to optimize operations, improve efficiency, and drive profitability.
</p>


<h2 className="text-primary text-2xl font-medium m-6 ml-4">Bespoke Solutions</h2>
<p className="text-lg font-thin leading-normal ml-4">
Understanding that each client’s needs are unique, we craft bespoke solutions that help you navigate the ever-evolving industry landscape, 
ensuring your business remains competitive, compliant, and resilient.
</p>


<h2 className="text-primary text-2xl font-medium m-6 ml-4">Workforce Development and Upskilling - Building a Future-Ready Team
</h2>
<p className="text-lg font-thin leading-normal ml-4">
We recognize the importance of continuous learning and development in the oil and gas industry. Our workforce development programs focus on upskilling your team, ensuring they are prepared to meet current and future industry challenges. Whether it’s technical skills,
 leadership development, or safety protocols, we provide comprehensive training that aligns with your strategic goals.
</p>


<h2 className="text-primary text-2xl font-medium m-6 ml-4">Operational Efficiency and Risk Mitigation - Streamlining Processes</h2>
<p className="text-lg font-thin leading-normal ml-4">
Jeva Energies & Solutions is dedicated to enhancing your operational efficiency. We assess your current processes and identify areas for improvement, implementing strategies that streamline operations and reduce costs. Our approach is proactive, 
focusing on risk mitigation to prevent disruptions and ensure smooth, uninterrupted operations.
</p>

<h2 className="text-primary text-[40px] font-medium m-6 ml-4">Why Partner with Jeva Energies & Solutions?</h2>
<h2 className="text-primary text-2xl font-medium m-6 ml-4">Access to Industry Expertise</h2>
<p className="text-lg font-thin leading-normal ml-4">
When you partner with Jeva Energies & Solutions, you gain access to a team of seasoned professionals with deep industry expertise. Our commitment to excellence and client success drives us to deliver 
solutions that make a tangible difference in your operations.
</p>

<h2 className="text-primary text-2xl font-medium m-6 ml-4">Tailored Support for Your Success</h2>
<p className="text-lg font-thin leading-normal ml-4">
Whether your objective is to upskill your workforce, streamline operations, 
or stay ahead of industry changes, we provide the tailored support and guidance needed to achieve your goals.
</p>


</div>

</section>

<section>
      <div className="relative bg-consultancy_hero w-full h-[500px] bg-cover bg-center">
      <div className="absolute inset-0 bg-black bg-opacity-70 z-0"></div>
      

      <div className="relative z-30">
        <h6 className='uppercase text-sky-300 text-lg text-center pt-8'>Take the Next Step</h6>
        <div className="flex justify-center mt-5 mb-10">
        <Divider divideColor="bg-white"/>
      </div>  
           
        <p className='max-container text-center text-lg leading-normal lg:pt-4 font-thin text-white'>
        Ready to elevate your workforce and optimize your operations? Contact Jeva Energies & Solutions today
        to explore how our consultancy services can address your specific needs and help your organization achieve sustained success
        in the oil and gas sector.
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

export default ConsultancyServices
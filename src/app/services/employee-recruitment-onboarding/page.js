
import { Header } from "@/components/Header"
import Divider from "@/components/Divider"
import Image from "next/image"
import Button from "@/components/Button"
import { manpower_supply } from "@/constants"
import RCard from "@/components/RCard"


const EmployeeRecruitment = () => {
  return (
    
      <div>
        <Header
         pageTitle="Employee Recruitment & Onboarding"
         imgURL="bg-pg_onboarding"
         subText="Securing the Skilled Workforce, You Need"
         />

<section className="max-container  lg:py-32  sm:py-4">

<div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5">
  <div className="m-5">
  <div className="flex  mt-10">
  <Divider divideColor="bg-primary"/>
  </div>
    <h2 className="text-primary lg:text-[35px] text-[25px] font-medium m-6 ml-4 leading-8">Securing the Skilled Workforce Your Industry Needs</h2>

    <p className="lg:text-lg font-thin leading-normal ml-4">In the dynamic and fast-growing sectors of West Africa—including Oil and Gas, Mining,
       Construction, Power, Marine, Food and Beverage, and Petrochemicals—access to a highly skilled and diverse workforce is critical to success. 
       Jeva Energies & Solutions is your trusted partner in streamlining the recruitment process, 
      offering a comprehensive suite of services to ensure you secure the best talent available.</p>

    <p className="lg:text-lg font-thin leading-normal ml-4 py-4">With deep expertise in navigating the complexities of talent acquisition, 
      Jeva Energies & Solutions is uniquely positioned to meet your labor demands with precision and efficiency. Our rigorous selection process 
      guarantees that only the most qualified and experienced professionals are provided to support your operations.</p>
          


  </div>
  <div>
    <div className="lg:mt-32">
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

<section className="sm:py-4 bg-[#f5f5f5] lg:py-16">

<div className="max-container">

<div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10">
        {
          manpower_supply.map((item,index)=>(
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

<section className="bg-white py-12">
<div className="max-container">
<h2 className="text-primary lg:text-[35px] text-[25px] font-medium m-6 ml-4">Manpower Categories</h2>
<p className="lg:text-lg font-thin leading-normal ml-4">
At Jeva Energies & Solutions, we offer a diverse range of specialized manpower to meet the demands of various industries.
Our offerings include, but are not limited to, the following roles:
</p>

<div className="grid md:grid-cols-4 sm:grid-cols-1 gap-0 py-4">
  <div>
    <ul className="list-disc pl-5 list-inside lg:text-lg font-thin leading-normal ml-4">
    <li> Assistant Subsea Engineer</li>
    <li>Drilling Fluid Officer (DFO)</li>
    <li>Engine Room Operator</li>
    <li>Trainee</li>
  <li>Rig Floor Mechanic</li>
  <li>Rig Administrator</li>
  <li>Auxiliary Driller</li>
  <li>Assistant Drilling Fluid Operator</li>
  <li>Painter</li>
  <li>Radio Operator</li>
  <li>Assistant Dynamic Positioning Operator (DPO)</li>
  <li>Catering Crew</li>
  <li>Laundry Personnel</li>

    </ul>
  </div>

  <div>
    <ul className="list-disc pl-5 list-inside lg:text-lg font-thin leading-normal ml-4">
   
  <li>Marine Control Room Operator (CCRO)</li>
  <li>Pumpman</li>
  <li>Account Manager</li>
  <li>Assistant Driller</li>
  <li>Derrickman</li>
  <li>Floorman</li>
  <li>Roustabout</li>
  <li>Chief Electrician</li>
  <li>Electrician</li>
  <li>Chief Mechanic</li>
  <li>Mechanic</li>
  <li>Crane Operator</li>
  
    </ul>
  </div>
  <div>
    <ul className="list-disc pl-5 list-inside lg:text-lg font-thin leading-normal ml-4">
    
  
  <li>Welder</li>
  <li>Material and Logistics Coordinator</li>
  <li>Deck Operator</li>
  <li>Assistant Mechanic / Oiler</li>
  <li>Mechanical Planner</li>
  <li>Steward</li>
  <li>Galley Assistant</li>
  <li>Driver</li>
  <li>Project Coordinator</li>
  <li>Protocol Assistant</li>
  <li>FMTA</li>
  <li>CSV POB Coordinator</li>
  <li>Permit to Work (PTW) Coordinator</li>

    </ul>
  </div>
  <div>
    <ul className="list-disc pl-5 list-inside lg:text-lg font-thin leading-normal ml-4">
   

  <li>Metering Engineer</li>
  <li>Junior Offshore Installation Engineer (OIE)</li>
  <li>HSE Advisor</li>
  <li>Production Supervisor</li>
  <li>Production Control Room Operator (CCRO)</li>
  <li>Production Technician</li>
  <li>Maintenance Technicians and Supervisors</li>
  <li>Control System Technician</li>
  <li>Marine Supervisor</li>
  <li>Marine Supervisor</li>
  <li>Deck Supervisor</li>
  
    </ul>
  </div>

</div>


</div>

</section>


<section>
      <div className="relative bg-manpower w-full h-[400px] bg-cover bg-center p-2">
      <div className="absolute inset-0 bg-black bg-opacity-70 z-0"></div>
      

      
    <div className="relative z-30">
      <h6 className='uppercase text-sky-300 text-lg text-center lg:pt-20'></h6>
      <div className="flex justify-center mt-5 pt-5 mb-10 xs:pt-8">
      <Divider divideColor="bg-white"/>
    </div>  
         
      <p className='max-container text-center lg:text-lg leading-normal lg:pt-4 font-thin text-white'>
        Jeva Energies & Solutions is committed to helping you build a workforce that drives your business forward. 
        Contact us today to discover how we can assist you in assembling the skilled professionals your industry demands.
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
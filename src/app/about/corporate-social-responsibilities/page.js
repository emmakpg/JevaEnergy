
import Image from 'next/image'
import Button from '@/components/Button'
import { Header } from '@/components/Header'
import Divider from '@/components/Divider'

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
<div className="flex mb-10 mt-10">
<Divider divideColor="bg-primary"/>
</div>
  <p className="text-lg font-thin leading-normal ml-4">JAt Jeva Energies & Solutions, we are committed to creating a positive impact 
    beyond our core oil and gas business. Our Corporate Social Responsibility (CSR) initiatives focus on education, health, sanitation, 
    and environmental stewardship, aimed at fostering sustainable community development.</p>


        


</div>


</div>

</section>

<section className="sm:py-4 bg-[#f5f5f5] lg:py-16">

<div className="max-container">


<h2 className="text-primary lg:text-2xl text-lg font-medium m-6 ml-4">Girl Child Education</h2>
<p className="text-lg font-thin leading-normal ml-4">
 We support education through scholarships, mentorship programs, and infrastructure development, 
especially for young girls 
in underserved regions. These initiatives aim to empower girls with the knowledge and skills to succeed in various fields.
</p>

<h2 className="text-primary lg:text-2xl text-lg font-medium m-6 ml-4">Health Screenings</h2>
<p className="text-lg font-thin leading-normal ml-4">
We provide free medical check-ups, diagnostic tests, 
and health education, helping communities in need access early disease detection and preventive care.
</p>

<h2 className="text-primary lg:text-2xl text-lg font-medium m-6 ml-4">Sanitation and Hygiene</h2>
<p className="text-lg font-thin leading-normal ml-4">
Our sanitation projects focus on improving access to clean water, 
building sanitation facilities, and educating communities on hygiene practices to prevent waterborne diseases.
</p>



<h2 className="text-primary lg:text-2xl text-lg font-medium m-6 ml-4">Environmental Stewardship</h2>
<p className="text-lg font-thin leading-normal ml-4">
We promote sustainable practices like waste management and resource conservation, 
working with communities to raise awareness about protecting the environment.
</p>



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
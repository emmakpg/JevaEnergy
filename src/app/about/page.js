"use client"
import { Header } from "@/components/Header"
import Divider from "@/components/Divider";
import Image from "next/image";
import CountUp from 'react-countup';

 const AboutPage = () => {
  return (
    <div>
        <Header 
         pageTitle="About Us"
         imgURL="bg-about_us"
         subText="Jeva Energies & Solutions enhances operational efficiency and speeds up project delivery across various sectors. 
         Reach out to discover how we can drive your success."
         />

<section className="max-container  lg:py-32  sm:py-4">

<div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5">
  <div className="m-5">
  <div className="flex  lg:mt-24 mt-4 ">
  <Divider divideColor="bg-primary"/>
  </div>
    <h2 className="text-primary lg:text-[35px] text-[30px] leading-8 font-medium m-6 ml-4">We&apos;re proud of our journey</h2>

    <p className="lg:text-lg font-thin  ml-4">Founded in 2023, Jeva Energies & Solutions is a key provider of upstream and downstream oil and gas services in Ghana and West Africa. Committed to industry growth, we deliver diverse services
       and focus on enhancing value and advancing the sector locally and regionally.</p>
          


  </div>
  <div>
    <div>
      <Image src="/assets/images/pg_corevalues.webp"
      alt="about_jeva"
      width={700}
      height={700}
      className="shadow-lg rounded-lg"
      />

    </div>
   
  </div>

</div>

</section>

<section className="lg:py-24 py-8 bg-gray-100">
<div>
        <h6 className="uppercase text-sky-500 text-center"> How it all started</h6>
        <h1 className="text-center text-primary lg:text-4xl text-[30px] font-medium">The beginning of our story </h1>
        <div className="flex justify-center my-8">
        <Divider divideColor="bg-primary"/>
        </div>
        <h6 className="text-center text-primary text-xl font-semibold">2023 – Establishing Jeva Energies & Solutions</h6>

        <p className="text-center py-4 lg:text-lg font-thin">	Incorporated Jeva Oil, Jeva Energies, and Jeva Energies & Solutions in Ghana</p>
        <p className="text-center py-4 lg:text-lg font-thin">	Secured first-year projects</p>
        <p className="text-center py-4 lg:text-lg font-thin" style={{ whiteSpace: 'pre-wrap'}}>	Launched services in General Consultancy, Petroleum Product Supply,<br/>
          Protocol & Logistics, and Manpower Supply & Technical Assistance</p>

        <p className="text-center py-4 lg:text-lg font-thin">Built a solid operational foundation with a focus on expanding service 
          offerings and meeting client needs</p>

          <h6 className="text-center text-primary text-xl font-semibold pt-4">2024 – Strategic Expansion and Growth</h6>

<p className="text-center py-4 lg:text-lg font-thin">Expanded operations into Côte d&apos;Ivoire and other key African markets</p>
<p className="text-center py-4 lg:text-lg font-thin">	Secured first-year projects</p>
<p className="text-center py-4 lg:text-lg font-thin">Continued evolution and enhancement of service offerings to align with client requirements and industry demands</p>

      </div>


</section>

<section>
      <div className="relative bg-hero_core w-full h-[500px] bg-cover bg-center">
      <div className="absolute inset-0 bg-black bg-opacity-70 z-0"></div>
      

      <div className="relative z-30">
        <h6 className='uppercase text-sky-300 text-lg text-center pt-8'>Growth so far</h6>
        <div className="flex justify-center mt-5 mb-10">
        <Divider divideColor="bg-white"/>
      </div>
      
        <h1 className='text-center text-white text-[30px] font-normal'>JEVA In Numbers</h1>
         
           
        <p className='text-center lg:text-lg pt-4 font-thin text-white'>
        Jeva Energies & Solutions, founded a year ago, has quickly established itself in Ghana with a largely Ghanaian team.<br/>
        Despite being new, we have achieved significant milestones and remain committed to exceptional regional service. </p>

      <div className="lg:hidden text-white py-8">
      <ul className="list-disc pl-5 list-inside font-thin leading-normal ml-4 px-2">
    <li>2 countries of presence and expansion (Ghana & Ivory Coast)</li>
    <li>200 staff size</li>
    <li>300,000 cubic square meter operating capacity</li>
    </ul>
      </div>
          
      </div>
      <div className="hidden lg:mx-28 relative lg:grid md:grid-cols-4 sm:grid-cols-1 gap-5 z-50 py-4">
        <div className="">
        <h1 className="text-center text-white text-8xl font-normal">
        <CountUp
              start={0}
              end={2}
              duration={3}
              />
          </h1>
        <p className='text-center text-lg pt-4 font-thin text-white'>countries of presence and expansion (Ghana & Ivory Coast)</p>
        </div>
        <div>
        <h1 className="text-center text-white text-8xl font-normal">
        <CountUp
              start={0}
              end={20}
              duration={7}
              />
          +
          </h1>
        <p className='text-center text-lg pt-4 font-thin text-white'>More than 20 years combined experiences of expertise</p>
        </div>
        <div>
        <h1 className="text-center text-white text-8xl font-normal">
        <CountUp
              start={0}
              end={200}
              duration={7}
              />
        </h1>
        <p className='text-center text-lg pt-4 font-thin text-white'>Staff size</p>
        </div>
        <div>
        <h1 className="text-center text-white text-8xl font-normal">
        <CountUp
              start={0}
              end={30}
              duration={7}
              />
              k</h1>
        <p className='text-center text-lg pt-4 font-thin text-white'>cubic square meter operating capacity</p>
        </div>

      </div>

     
      
      </div>
      
    </section>
    </div>
  )
}

export default AboutPage;
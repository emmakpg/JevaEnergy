
import { Header } from "@/components/Header"
import Image from "next/image"
import Divider from "@/components/Divider"
import Link from "next/link"

const ProtocolServices = () => {
  return (
    <div>
    <Header
     pageTitle="Protocol & Logistics Services"
     imgURL="bg-pg_protocol"
     subText="Our protocol and logistics services ensure seamless transportation and logistical support for focused industry operations."
     />

<section className="max-container  lg:py-32  sm:py-4">

<div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5">
  <div className="m-5">
  <div className="flex  mt-10">
  <Divider divideColor="bg-primary"/>
  </div>
    <h2 className="text-primary text-[35px] leading-10 font-medium m-6 ml-4">Comprehensive Transportation and Logistical Support</h2>

    <p className="text-xl font-thin leading-normal ml-4">At Jeva Energies & Solutions, we offer a full suite of protocol and logistics services 
      designed to meet the diverse needs of our clients across various industries. Our services ensure seamless transportation, efficient
       supply chain management, and tailored support to enhance operational efficiency and reduce costs.</p>

  <h2 className="text-primary text-[35px] font-medium m-6 ml-4">Transportation and Protocol Services</h2>

<p className="text-xl font-thin leading-normal ml-4">At Jeva Energies & Solutions, we offer a full suite of protocol and logistics services 
  designed to meet the diverse needs of our clients across various industries. Our services ensure seamless transportation, efficient
   supply chain management, and tailored support to enhance operational efficiency and reduce costs.</p>


  </div>
  <div>
    <div className="lg:mt-40">
      <Image src="/assets/images/psupply.webp"
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

<h2 className="text-primary text-2xl font-medium m-6 ml-4">Extensive Fleet Selection</h2>
<p className="text-lg font-thin leading-normal ml-4">
Choose from a wide range of vehicles using our secure online portal for easy reservation and management.
</p>


<h2 className="text-primary text-2xl font-medium m-6 ml-4">Flexible Leasing Options</h2>
<p className="text-lg font-thin leading-normal ml-4">
Tailor your lease duration to meet specific needs with both long-term and short-term rentals.
</p>


<h2 className="text-primary text-2xl font-medium m-6 ml-4">Advanced Vehicle Tracking</h2>
<p className="text-lg font-thin leading-normal ml-4">
Benefit from real-time monitoring and data analytics for optimized routes and maintenance.
</p>


<h2 className="text-primary text-2xl font-medium m-6 ml-4">Streamlined Protocol Services</h2>
<p className="text-lg font-thin leading-normal ml-4">
Receive prompt assistance with visas, work permits, police clearance, and more.
</p>

<h2 className="text-primary text-2xl font-medium m-6 ml-4">Customized Accommodation Solutions</h2>
<p className="text-lg font-thin leading-normal ml-4">
Centralized booking system with negotiated rates and exclusive deals across Ghana and West Africa.
</p>
</div>

</section>

<section className="max-container  lg:py-16  sm:py-4">

<div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5">
  <div className="m-5">
  <div className="flex  mt-10">
  <Divider divideColor="bg-primary"/>
  </div>
    <h2 className="text-primary text-[45px] leading-10 font-medium m-6 ml-4">Logistics Services</h2>
    <h2 className="text-primary text-[35px] leading-10 font-medium m-6 ml-4">Maintaining Smooth Operations</h2>

    <p className="text-lg font-thin leading-normal ml-4">Jeva Energies & Solutions offers comprehensive logistics services to support industries
       operating in remote locations. From the transport of personnel and bulky equipment to hazardous materials, our solutions are designe
       to keep your projects on track from initial planning to final delivery.</p>


  </div>
  <div>
    <div className="lg:mt-14">
      <Image src="/assets/images/logistics.webp"
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

<h2 className="text-primary text-2xl font-medium m-6 ml-4">Global Freight Forwarding</h2>
<p className="text-lg font-thin leading-normal ml-4">
Custom-tailored solutions for domestic and international logistics via air, sea, road, and rail.
</p>


<h2 className="text-primary text-2xl font-medium m-6 ml-4">Customs Brokerage and Clearance</h2>
<p className="text-lg font-thin leading-normal ml-4">
Expertise in smooth and compliant cross-border movement of goods, minimizing delays.
</p>


<h2 className="text-primary text-2xl font-medium m-6 ml-4">Trucking and Haulage</h2>
<p className="text-lg font-thin leading-normal ml-4">
Reliable scheduling and advanced technology for efficient freight delivery throughout West Africa.
</p>


<h2 className="text-primary text-2xl font-medium m-6 ml-4">Ship Agency and Husbandry</h2>
<p className="text-lg font-thin leading-normal ml-4">
Comprehensive support for vessel operations during port calls, safeguarding your interests.
</p>

<h2 className="text-primary text-2xl font-medium m-6 ml-4">Specialized Oil and Gas Logistics</h2>
<p className="text-lg font-thin leading-normal ml-4">
Expertise in handling complex project cargo for the oil and gas sector, ensuring safe and timely delivery.
</p>

<h2 className="text-primary text-2xl font-medium m-6 ml-4">Consolidation and Groupage</h2>
<p className="text-lg font-thin leading-normal ml-4">
Cost-effective shipping solutions by consolidating smaller consignments into a single marine container.
</p>

<h2 className="text-primary text-2xl font-medium m-6 ml-4">Warehousing</h2>
<p className="text-lg font-thin leading-normal ml-4">
Strategic warehousing solutions to store raw materials and finished products closer to business locations for on-demand access.
</p>

<p className="text-2xl font-thin leading-normal ml-4 mt-4 pt-8">
<Link href="/contact-us" className="hover:underline text-fuchsia-700">Reach out to Jeva Energies & Solutions </Link>
 today to discover how our integrated protocol and logistics services can streamline your operations,
 reduce costs, and enhance your overall efficiency.
</p>
</div>



</section>
   
</div>
  )
}

export default ProtocolServices
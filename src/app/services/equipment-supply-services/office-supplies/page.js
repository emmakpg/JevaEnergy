import Image from 'next/image'
import Button from '@/components/Button'
import { Header } from '@/components/Header'
import Divider from '@/components/Divider'

const OfficeSupplies = () => {
  return (
    
  <div>
  <Header
   pageTitle="Office Supplies"
   imgURL="bg-office"
   subText="Jeva Energies & Solutions provides these essential office supplies to ensure your operations run smoothly and efficiently."
   />

<section className="max-container  lg:py-32  sm:py-4">

<div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5">
<div className="m-5">
<div className="flex  mt-10">
<Divider divideColor="bg-primary"/>
</div>
  <h2 className="text-primary lg:text-[35px] text-[25px] leading-9 font-medium m-6 ml-4">Essential Resources for Optimal Office Efficiency</h2>

  <p className="lg:text-lg font-thin leading-normal ml-4">At Jeva Energies & Solutions, we offer a curated selection of office supplies to enhance 
    your operational efficiency. Our range includes Engineering Tools, Communication Devices, Computing Equipment, and Stationery. 
    Each category is designed to meet the diverse needs of modern offices, ensuring smooth and productive workflows.
     Explore our offerings to find everything you need for a well-organized and efficient workspace.</p>


        


</div>
<div>
  <div className="lg:mt-4">
    <Image src="/assets/images/office1.webp"
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
<h2 className="text-primary text-2xl font-medium m-6 ml-4">Stationery and Printing</h2>
<ul className="list-disc pl-5 lg:list-inside lg:text-lg font-thin leading-normal ml-4">
    <li>Writing Instruments - Pens, pencils, markers, and highlighters.</li>
    <li>Paper Products - Notepads, notebooks, sticky notes, and various types of printing paper.</li>
    <li>Office Essentials - Binders, folders, staplers, and paper clips.</li>
    <li>Printing Supplies - Printers, cartridges, and binding materials.</li>
    </ul>


<h2 className="text-primary text-2xl font-medium m-6 ml-4">Communication and Computing</h2>
<ul className="list-disc pl-5 lg:list-inside lg:text-lg font-thin leading-normal ml-4">
    <li>Telecommunication - Desk phones, headsets, and conference call equipment</li>
    <li>Mailing and Shipping - Mailing bags, boxes, and packing tape.</li>
    <li>Computer Accessories - Keyboards, mice, monitors, and external drives.</li>
    <li>Software - Office suites, security software, and backup solutions.</li>
    </ul>


<h2 className="text-primary text-2xl font-medium m-6 ml-4">Organizational and Furniture</h2>
<ul className="list-disc pl-5 lg:list-inside lg:text-lg font-thin leading-normal ml-4">
    <li>Desk Accessories - Organizers, calendars, and desk mats.</li>
    <li>Office Furniture - Filing cabinets, ergonomic chairs, and meeting room equipment.</li>
    <li>Computer Accessories - Keyboards, mice, monitors, and external drives.</li>
    <li>Facilities Supplies - Cleaning supplies, ergonomic accessories, and personal protective equipment.</li>
    </ul>


<h2 className="text-primary text-2xl font-medium m-6 ml-4">Engineering and Miscellaneous </h2>
<ul className="list-disc pl-5 lg:list-inside lg:text-lg font-thin leading-normal ml-4">
    <li>Technical Instruments - Measurement tools and maintenance kits.</li>
    <li>Health and Safety - First aid kits, sanitizers, and fire extinguishers.</li>
    </ul>

</div>

</section>

<section>
    <div className="relative bg-office w-full lg:h-[500px] h-[320px] bg-cover bg-center">
    <div className="absolute inset-0 bg-black bg-opacity-70 z-0"></div>
    

    <div className="relative z-30">
      <h6 className='uppercase text-sky-300 text-lg text-center lg:pt-20'></h6>
      <div className="flex justify-center mt-5 pt-5 mb-10 xs:pt-8">
      <Divider divideColor="bg-white"/>
    </div>  
         
      <p className='max-container text-center lg:text-lg leading-normal lg:pt-4 font-thin text-white'>
      Jeva Energies & Solutions provides these essential office supplies to ensure your operations run smoothly and efficiently. 
      If you&apos;re interested in learning more or wish 
      to discuss your needs, please contact us to explore how we can support your business.
      </p>
  
      
      <div className='flex justify-center pt-8'>
      <Button label="Reach Out To Us" link="/contact-us"/>
      </div>
    </div>

  
   

   
    
  </div>
    
  </section>
   
</div>
  )
}

export default OfficeSupplies
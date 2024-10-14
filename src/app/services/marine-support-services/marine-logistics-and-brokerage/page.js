import Image from 'next/image'
import { Header } from '@/components/Header'
import Divider from '@/components/Divider'

const MarineLogistics = () => {
  return (

    <div>
    <Header
     pageTitle="Marine Logistics and Brokerage"
     imgURL="bg-marine_logistics"
     subText="Streamlined Maritime Solutions"
     />
  
  <section className="max-container  lg:py-32  sm:py-4">
  
  <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5">
  <div className="m-5">
  <div className="flex  mt-10">
  <Divider divideColor="bg-primary"/>
  </div>
  
  <h2 className="text-primary lg:text-2xl text-lg font-medium m-6 ml-4">Marine Logistics</h2>
  <p className="lg:text-lg font-thin leading-normal ml-4 m-6">
 Jeva Energies & Solutions offers specialized logistics solutions,
   handling the unique transport needs of the maritime industry with precision and efficiency.
  </p>

  <h2 className="text-primary lg:text-2xl text-lg font-medium m-6 ml-4">Brokerage Services</h2>
  <p className="lg:text-lg font-thin leading-normal ml-4 m-6">
  Our expert brokerage team secures optimal deals and facilitates transactions, 
  maximizing operational effectiveness in the maritime sector.
  </p>
  
  
  
  </div>
  <div className=''>
    <div className="lg:mt-10">
      <Image src="/assets/images/marinelogistics.webp"
      alt="core_values"
      width={600}
      height={600}
      className="shadow-lg lg:rounded-lg"
      />
  
    </div>
   
  </div>
  
  </div>
  
  </section>
  
  
  
  
     
  </div>
  )
}

export default MarineLogistics
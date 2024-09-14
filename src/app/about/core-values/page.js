import { Header } from "@/components/Header"
import Divider from "@/components/Divider"
import Image from "next/image"
import { core_values } from "@/constants"
import CvCard from "@/components/CvCard"

const CoreValues = () => {
  return (
    
    <div>
    <Header
     pageTitle="Core Values"
     imgURL="bg-hs_corevalues"
     subText="Empowering Success through Shared Values."
     />

     <section className="max-container  lg:py-32  sm:py-4">

      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5">
        <div className="m-5">
        <div className="flex  mt-24">
        <Divider divideColor="bg-primary"/>
        </div>
          <h2 className="text-primary lg:text-[35px] text-[30px] xs:leading-8 font-medium m-6 ml-4">Jeva Energy core values</h2>

          <p className="text-lg font-thin leading-normal ml-4">At Jeva, we have six core values. They define us as a company and express who we are,
             how we think and act. These core values guide us and motivate us to perform better, and they represent a critical success 
            factor in our efforts to achieve our common goals and create an attractive work place.</p>
                


        </div>
        <div>
          <div>
            <Image src="/assets/images/corevalues.webp"
            alt="core_values"
            width={700}
            height={700}
            className="shadow-lg rounded-lg"
            />

          </div>
         
        </div>

      </div>
    
     </section>
     <section className="sm:py-4 bg-[#f5f5f5] lg:py-24">
      <div className="max-container grid sm:grid-cols-1 md:grid-cols-2 gap-10">
        {
          core_values.map((item,index)=>(
            <div key={index}>
              <CvCard
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

     



     </section>
</div>
  )
}

export default CoreValues
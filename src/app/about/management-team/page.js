import { Header } from "@/components/Header"
import Divider from "@/components/Divider"
import Image from "next/image"
import { team } from "@/constants"
import TeamCard from "@/components/TeamCard"

const ManagementTeam = () => {
  return (
    <div>
      <Header
     pageTitle="Structure And Management"
     imgURL="bg-pg_consultancy"
     subText="Empowering Success through Shared Values."
     />

<section className="max-container  lg:py-32  sm:py-4">

<div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5">
  <div className="m-5 xs:m-0">
  <div className="flex  lg:mt-24">
  <Divider divideColor="bg-primary"/>
  </div>
    <h2 className="text-primary lg:text-[35px] text-[30px] xs:leading-8 font-medium m-6 ml-4">Our Team & Expertise</h2>

    <p className="text-lg font-thin leading-normal ml-4">
    Jeva Energy and Solutions is propelled by a remarkable team of industry specialists whose deep experience and 
    expertise drive our success. Our leadership consists of accomplished professionals who excel in their areas, contributing a wealth of knowledge and a history of excellence that guides our strategic direction and operational effectiveness. Every team member acts as a catalyst for innovation and growth, 
    dedicated to achieving outstanding results and advancing our mission of excellence in the energy sector.
    </p>
          


  </div>
  <div>
    <div className="">
      <Image src="/assets/images/pg_corevalues.jpg"
      alt="management"
      width={700}
      height={700}
      className="shadow-lg rounded-lg"
      />

    </div>
   
  </div>

</div>

</section>

<section>
<div>

<section className="sm:py-4 bg-[#f5f5f5] lg:py-4">

<h2 className="text-primary lg:text-[35px] text-[30px] leading-8 font-medium m-6 ml-4 text-center">Jeva Energies & Solutions Team Profile</h2>

      <div className="max-container">
        {
          team.map((item,index)=>(
            <div key={index}>
              <TeamCard
              imageUrl={item.image}
              name={item.name}
              role={item.position}
              about={item.about}
              />
              </div>

          ))
        }

        <div>
          
          
        </div>
        
      </div>

     



     </section>
</div>

</section>
    </div>
  )
}

export default ManagementTeam
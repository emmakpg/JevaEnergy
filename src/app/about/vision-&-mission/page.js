import { Header } from "@/components/Header"
import { AboutContent } from "@/constants"
import Divider from "@/components/Divider"

const VisionMission = () => {
  return (
    <div>
    <Header
     pageTitle="Vision & Mission"
     imgURL="bg-vision"
     subText="Aspiring to be recognized as the epitome of reliability and sustainability in the sector"
     />

<section className=" bg-[#f5f5f5]">

  <div className="max-container py-4">
  <div className="flex  mt-24">
        <Divider divideColor="bg-primary"/>
        </div>
          <h2 className="text-primary text-[30px] font-medium m-6 ml-4">{AboutContent.vision_title}</h2>

          <p className="text-lg font-thin leading-normal ml-4 lg:mr-52">{AboutContent.vision_content}</p>
  </div>
  <div className="max-container lg:pb-20">
  <div className="flex  mt-24">
        <Divider divideColor="bg-primary"/>
        </div>
          <h2 className="text-primary text-[30px] font-medium m-6 ml-4">{AboutContent.mission_title}</h2>

          <p className="text-lg font-thin leading-normal ml-4 lg:mr-52">{AboutContent.mission_content}</p>
  </div>
  </section>
</div>

  )
}

export default VisionMission
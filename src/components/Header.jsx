import Image from "next/image"
import Divider from "./Divider"

import Breadcrumb from "./Breadcrumb"

export const Header = ({pageTitle,subText,imgURL}) => {
  return (
    <section>
      <div className={`sm:py-16 lg:py-32 bg-cover bg-center bg-gray-900/50 bg-blend-darken ${imgURL}`}>

  
  <div className="px-4 mx-auto max-w-[1500px] sm:px-6 lg:px-1 xs:pt-8">
            <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                <div >
                
                  <div className="lg:flex justify-start mb-10 mt-5 hidden">
                  <Divider divideColor={"bg-white"}/>
                  </div>
                            
                  <h1 className="relative lg:text-4xl text-2xl px-5 font-medium text-sky-200 lg:text-7xl pt-8 lg:pt-0">{pageTitle}</h1>
                          
                  <p className="px-5 pt-5 lg:text-xl leading-normal font-normal text-gray-50 pb-8">{subText}</p>

                    </div>
                    
                    </div>
  </div>
  </div>
    </section>
  )
}

import  Button  from "@/components/Button"
import Image from "next/image"

import Divider from "@/components/Divider"
import {hero}  from "@/constants"
import HeroSwipe from "@/components/HeroSwipe"







export const Hero = () => {
  return (
    <section id="home">
      <div className="min-h-20 py-2 
      sm:py-16 lg:py-40 bg-cover bg-left bg-blend-luminosity bg-hero3">
  

    
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:ml-[10rem]">
            <div className="grid items-center grid-cols-1 gap-0 lg:grid-cols-2">
                <div>
                
                
            
     
                  <div>
                  <div className="flex justify-start mt-5 xs:hidden">
                <Divider divideColor="bg-white"/>
                </div>
                  <HeroSwipe/>
                  </div>
              

                    <div className="mt-10 xs:mb-2 xs:py-1 xs:flex xs:items-center xs:space-x-8 transition duration-100 ease-out">
                    <Button label="Find out more" link="/about"/>
                   

                    </div>
                </div>

            </div>
        </div>
   
</div>

    </section>
  )
}

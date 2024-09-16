import  Button  from "@/components/Button"
import Image from "next/image"

import Divider from "@/components/Divider"
import {hero}  from "@/constants"
import HeroSwipe from "@/components/HeroSwipe"







export const Hero = () => {
  return (
    <section id="home">
      <div className="lg:min-h-screen py-2 
      sm:py-16 lg:py-40 bg-cover bg-right-top  lg:bg-sky-900/40 bg-gray-900/60 bg-blend-darken bg-excited">
  

    
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:ml-[10rem]">
            <div className="grid items-center grid-cols-1 gap-0 lg:grid-cols-2">
                <div>
                
                
            
     
                  <div>
                  <div className="lg:flex justify-start mt-5 hidden">
                <Divider divideColor="bg-white"/>
                </div>
                  <HeroSwipe/>
                  </div>
              

                    <div className="mt-4 mb-2 py-1 flex items-center space-x-8 transition duration-100 ease-out">
                    <Button label="Find out more" link="/about"/>
                   

                    </div>
                </div>

            </div>
        </div>
   
</div>

    </section>
  )
}

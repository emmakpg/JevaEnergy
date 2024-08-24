import  Button  from "@/components/Button"
import Image from "next/image"

import Divider from "@/components/Divider"
import {hero}  from "@/constants"







export const Hero = () => {
  return (
    <section id="home">
      <div className="min-h-20 py-2 
      sm:py-16 lg:py-40 bg-cover bg-center bg-sky-500 bg-blend-darken bg-hero2" >
  

    
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:ml-[10rem]">
            <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                <div>
                <div className="flex justify-start mt-5">
                <Divider divideColor="white"/>
                </div>
                
            
     
                  <div>
                  <div>
                    <h1 className="text-[55px] font-medium text-white leading-10 sm:text-6xl lg:text-7xl pt-16" >
                        Collaborate remotely with 
                        <div className="relative inline-flex">
                            <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-[#4ADE80]"></span>
                            <h1 className="relative text-4xl font-bold text-black sm:text-6xl lg:text-[70px]"> Jeva.</h1>
                        </div>
                    </h1>

                    <p className="mt-8 text-base text-slate-100 leading-normal sm:text-xl">{hero[0].text}</p>
                  </div>
                  </div>
              

                    <div className="mt-10 sm:flex sm:items-center sm:space-x-8 transition duration-100 ease-out">
                    <Button label="Find out more" link="/about"/>
                   

                    </div>
                </div>

            </div>
        </div>
   
</div>

    </section>
  )
}

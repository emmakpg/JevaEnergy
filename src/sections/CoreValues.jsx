import Divider from "@/components/Divider"
import Button from "@/components/Button"

export const CoreValues = () => {
  return (
    <section id="#core-values">
      <div className="relative bg-hs_corevalues w-full h-[500px] bg-cover bg-center">
      <div className="absolute inset-0 bg-black bg-opacity-70 z-0"></div>
      

      <div className="relative z-30">
        <h6 className='uppercase text-sky-300 text-lg text-center pt-8'>Core Values</h6>
        <div className="flex justify-center mt-5 mb-10">
        <Divider divideColor="white"/>
      </div>
      
        <h1 className='text-center text-white text-[30px] font-normal'>Our core values define us as a company </h1>
           <h1 className='text-center text-white text-[30px] font-normal mt-[-10px]'>and express who we are,
           how we think and act</h1>
           
        <h6 className='text-center text-lg pt-4 font-thin text-white'>These core values guide us and motivate us to perform better, and they represent a critical success </h6>
           <h6 className='text-center text-lg font-thin text-white'> factor in our efforts to achieve our common goals and create an attractive work place.</h6>
      
          <div className='flex justify-center py-8 mt-10'>
        <Button label="See our core values" link="/about/core-values"/>
        </div>
      </div>

     
      
      </div>
      
    </section>
  )
}

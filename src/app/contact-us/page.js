"use client"
import { Header } from "@/components/Header"
import { useRef } from "react";
import Maps from "@/components/Maps";
import emailjs from '@emailjs/browser';
import Divider from "@/components/Divider";
import Button from "@/components/Button";


 const ContactUsPage = () => {

const form = useRef()

const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_h1vdjla', 'template_2f80t0p', form.current, {
        publicKey: 'gYPn306Z72ccInojJ',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset()
  };

  return (
    <section>
    <div>
        <Header
         pageTitle="Contact Us"
         imgURL="bg-pg_contactus"
         subText="Headquarters in Accra, Ghana. Jeva is committed to inter-regional expansion and is actively pursuing growth in Ivory Coast and other prospective African nations."
         />
    </div>

    <div>
    <section className="py-10 bg-gray-100 sm:py-16 lg:py-10">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        

        <div className="max-w-5xl mx-auto mt-12 sm:mt-16">
            <div className="grid grid-cols-1 gap-6 px-8 text-center md:px-0 md:grid-cols-3">
                <div className="overflow-hidden bg-white rounded-xl">
                    <div className="p-6">
                        <svg className="flex-shrink-0 w-10 h-10 mx-auto text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1"
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                        </svg>
                        <p className="mt-6 text-lg font-medium text-gray-900">+233 50 006 4104</p>
                        <p className="mt-1 text-lg font-medium text-gray-900">--- -- --- --</p>
                    </div>
                </div>

                <div className="overflow-hidden bg-white rounded-xl">
                    <div className="p-6">
                        <svg className="flex-shrink-0 w-10 h-10 mx-auto text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <p className="mt-6 text-lg font-medium text-gray-900">contact@example.com</p>
                        <p className="mt-1 text-lg font-medium text-gray-900">hr@example.com</p>
                    </div>
                </div>

                <div className="overflow-hidden bg-white rounded-xl">
                    <div className="p-6">
                        <svg className="flex-shrink-0 w-10 h-10 mx-auto text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <p className="mt-6 text-lg font-medium leading-relaxed text-gray-900">3rd Floor, One Airport Square <br/> Accra, Ghana</p>
                    </div>
                </div>
            </div>

            <div className="mt-6 overflow-hidden bg-white rounded-xl">
                <div className="px-6 py-12 sm:p-12">
                    <h3 className="text-[35px] font-normal text-center text-primary">Send us a message</h3>

                    <form action="#" method="POST" ref={form} className="mt-14" onSubmit={sendEmail}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                            <div>
                                <label for="" className="text-base font-medium text-gray-900"> Your name </label>
                                <div className="mt-2.5 relative">
                                    <input type="text" name="user_name" id="" placeholder="Enter your full name" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200
                                     bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" required />
                                </div>
                            </div>

                            <div>
                                <label for="" className="text-base font-medium text-gray-900"> Email address </label>
                                <div className="mt-2.5 relative">
                                    <input type="email" name="user_email" id="" placeholder="Enter email address" className="block w-full px-4 py-4
                                     text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md
                                      focus:outline-none focus:border-blue-600 caret-blue-600" required />
                                </div>
                            </div>

                            <div>
                                <label for="" className="text-base font-medium text-gray-900"> Phone number </label>
                                <div className="mt-2.5 relative">
                                    <input type="tel" name="user_phone" id="" placeholder="Enter your phone number" 
                                    className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border
                                     border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" required/>
                                </div>
                            </div>

                            <div>
                                <label for="" className="text-base font-medium text-gray-900"> Company name </label>
                                <div className="mt-2.5 relative">
                                    <input type="text" name="company" id="" placeholder="Enter your full name" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label for="" className="text-base font-medium text-gray-900"> Message </label>
                                <div className="mt-2.5 relative">
                                    <textarea name="message" id="" placeholder="" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md resize-y focus:outline-none focus:border-blue-600 caret-blue-600" rows="4"></textarea>
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                            
                                <button type="submit" className="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-lg font-medium text-white transition-all duration-200 bg-sky-900 hover:bg-sky-800 border border-transparent rounded-md focus:outline-none  focus:bg-sky-800 ">
                                    Send
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>

    </div>
 
    <div>
    <section>
      <div className="lg:h-[700px] h-[500px] lg:py-32 bg-cover bg-center bg-gray-900/30 bg-blend-darken bg-map">

  
  <div className="px-4 mx-auto max-w-[1500px] sm:px-6 lg:px-1 xs:pt-8">
            <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                <div >
                
                  <div className="lg:flex justify-start mb-10 mt-5 hidden">
                  <Divider divideColor={"bg-primary"}/>
                  </div>
                            
                  <h1 className="relative lg:text-4xl text-2xl px-5 font-medium text-primary lg:text-[50px] text-[40px] pt-8 lg:pt-0">Visit Us</h1>
                        

                <div className="pt-8 px-4">
                  <Button 
                  link="https://www.google.com/maps/place/5%C2%B036'02.0%22N+0%C2%B010'38.4%22W/@5.6005635,-0.1773366,17z/data=!3m1!4b1!4m4!3m3!8m2!3d5.6005635!4d-0.1773366?entry=ttu&g_ep=EgoyMDI0MDkxNS4wIKXMDSoASAFQAw%3D%3D"
                  label={"View full Map"}
                  />

</div>

                    </div>
                    
                    </div>
  </div>
  </div>
    </section>
    </div>
    </section>
  )
} 

export default ContactUsPage;
import Image from "next/image";
import { carnas_medium } from "./layout";
import { Services } from "@/sections/Services";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { CoreValues } from "@/sections/CoreValues";
import { Clients } from "@/sections/Clients";



export default function Home() {
  return (
   <>
 
   <section className="">
      <Hero/>
      
    </section>
    <section className="">
      <Services/>
    </section>
    <section className="padding">
      <About/>
    </section>
    <section className="">
      <CoreValues/>
    </section>
    <section className="padding">
      <Clients/>
    </section>
    </>
  );
}

"use client";
import { navLinks } from "@/constants"
import Link from "next/link"
import { FaBars } from "react-icons/fa";
import Image from "next/image"
import { FaAngleDown } from "react-icons/fa";
import { useState, useEffect } from "react";
import { DropDown } from "./DropDown";

export const Navbar = () => {

  const [isOpen, setIsOpen] = useState(true)

  const [isScrolled, setIsScrolled] = useState(false)

  const [menuItem, setmenuItem] = useState(null)

  useEffect(()=>{

    const handleScroll = () =>{

      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  },[])

  const toggleSubmenu = (menu) => {
    if (menuItem === menu) {
      setmenuItem(null); // Close if it's already open
    } else {
      setmenuItem(menu); // Open the selected submenu
    }
  };


  const handleScroll = () =>{


  }


  return (
    <header onScroll={handleScroll} className={`w-full sticky  ${isScrolled?'bg-[#202020]/40':'bg-[#202020]'} top-0 z-10 shadow-lg transition-colors`}>
         <nav className='flex justify-between items-center  p-4'>
           <div className="lg:mx-40">
           <Link href="/">
           <Image
           src="/assets/images/jeva_logo.png"
           alt="jeva_logo"
           width={300}
           height={150}
           />
            </Link>
            </div>
           
<div onMouseLeave={()=>setmenuItem(null)}>
            <ul className='flex-1 flex justify-end items-center gap-16 max-lg:hidden lg:mr-40'>
                {navLinks.map((item)=>(
                    <li key={item.label}>
                                      
                        <Link href={item.href} role="button" className='leading-normal text-xl text-sky-200 font-thin hover:text-gray-100 active:text-yellow-100'>
                        <div onMouseEnter={()=>toggleSubmenu(item.label)} className="flex flex-1 justify-center items-center">       
                        {item.label} {item.submenuAbout && <FaAngleDown />} {item.submenuServices && <FaAngleDown />}
                       
                   

                    
        </div>
                        </Link>
                    </li>
                    
                   
                ))}
            </ul>
            { menuItem === "About Us" &&
                            (<div className="absolute top-16 ml-28 bg-slate-100/90 rounded-lg">
                              <DropDown dropMenu={navLinks.find(link => link.label === "About Us").submenuAbout}/>
                            </div>)
                          }

              { menuItem === "Services" &&
                            (<div className="absolute top-16 ml-[17rem] bg-slate-100/90 rounded-lg ">
                              <DropDown dropMenu={navLinks.find(link => link.label === "Services").submenuServices}/>
                            </div>)
                          }
            </div>
            
            <div className="hidden max-lg:block">
           <FaBars className="text-white-400" size={40}/>

      
        </div>
        
         </nav>
       
    </header>
  )
}

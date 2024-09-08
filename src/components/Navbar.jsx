"use client";
import { navLinks } from "@/constants"
import Link from "next/link"
import { FaBars } from "react-icons/fa";
import Image from "next/image"
import { FaAngleDown } from "react-icons/fa";
import { useState, useEffect } from "react";
import { DropDown } from "./DropDown";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"




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
    <header onScroll={handleScroll} className={`w-full lg:sticky  ${isScrolled?'bg-[#202020]/40':'bg-[#202020]'} top-0 z-10 shadow-lg transition-colors`}>
         <nav className='flex justify-between items-center  p-4 z-50'>
           <div className="lg:mx-40">
           <Link href="/">
           <Image
           src="/assets/images/jeva_logo.png"
           alt="jeva_logo"
           width={220}
           height={30}
           className="lg:w-72"
           />
            </Link>
            </div>
           
<div onClick={()=>setmenuItem(null)}>
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
            
         

        <button type="button" class="inline-flex p-2 ml-1 text-white  transition-all duration-200 rounded-md sm:ml-4 lg:hidden
       focus:bg-gray-800 hover:bg-sky-900 hover:text-white">
        
         <svg className="block w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>

         <svg className="hidden w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        
         </nav>
       
    </header>
  )
}

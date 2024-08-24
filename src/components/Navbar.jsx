"use client";
import { navLinks } from "@/constants"
import Link from "next/link"
import { FaBars } from "react-icons/fa";
import Image from "next/image"
import { FaAngleDown } from "react-icons/fa";
import { useState } from "react";
import { DropDown } from "./DropDown";

export const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  const [menuItem, setmenuItem] = useState(null)

  const toggleSubmenu = (menu) => {
    if (menuItem === menu) {
      setmenuItem(null); // Close if it's already open
    } else {
      setmenuItem(menu); // Open the selected submenu
    }
  };



  return (
    <header className='padding-x py-5 absolute z-10 w-full'>
         <nav className='flex justify-between items-center max-container'>
           <Link href="/">
            <h1 className="font-bold text-4xl text-purple-200 tracking-tight">Jeva</h1>
            </Link>
           
<div onMouseLeave={()=>setmenuItem(null)}>
            <ul className='flex-1 flex justify-end items-center gap-16 max-lg:hidden'>
                {navLinks.map((item)=>(
                    <li key={item.label}>
                                      
                        <Link href={item.href} role="button" className='leading-normal text-xl text-sky-200 font-normal hover:text-gray-100 active:text-yellow-100'>
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
           <FaBars className="text-white-400"/>

      
        </div>
        
         </nav>
       
    </header>
  )
}

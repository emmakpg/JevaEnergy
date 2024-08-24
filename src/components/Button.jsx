
import Link from "next/link"
import Image from "next/image"
import { FaAngleRight } from "react-icons/fa";


 const Button = ({label,link}) => {
  return (
  <Link href={link}>
     <button type="button" className="flex justify-center items-center transition delay-150 ease-in
    gap-2 focus:outline-none text-white bg-sky-900 hover:bg-sky-800 hover:-translate-y-0.5  pr-7 pl-1 py-3.5  rounded-lg 
    "> 
       
        
        <FaAngleRight className="ml-1 -mr-1" />
         {label}

    </button>


    </Link> 
  )
}

export default Button
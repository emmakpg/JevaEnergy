import Spinner from "@/components/Spinner"
import { mobileMenu } from "@/constants"
import Link from "next/link"

const MobileMenu = ({handleMenuClose}) => {
  return (
    <div className="flex justify-center items-center h-screen bg-[#202020]/80 overflow-hidden">
        <ul className="flex flex-col">
    {
        mobileMenu.map((item)=>(
            <li key={item.label}>
            <Link href={item.href} role="button" onClick={handleMenuClose}
             className='leading-normal text-xl text-sky-200 font-thin hover:text-gray-100 active:text-yellow-100'>
                <div  className="flex flex-1 justify-center items-center"> 
                    {item.label}
                </div>
            </Link>
            </li>

        ))
    }
    </ul>
    </div>
  )
}

export default MobileMenu


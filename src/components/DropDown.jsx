
import Link from 'next/link'

export const DropDown = ({dropMenu}) => {
  return (
    <div className='relative flex flex-col justify-center items-center py-4 px-4 rounded-lg'>
        
        <div>
            {dropMenu.map((item)=>
            (
                <div key={item.label} className='leading-normal text-sky-700 hover:text-sky-500 py-2'>
                    <Link href={item.href}>
                    {item.label}
                    </Link>
                </div>
            ))}
        </div>
       

    </div>
 
  )
}

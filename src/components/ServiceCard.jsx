import React from 'react'
import Link from 'next/link'

const ServiceCard = ({label,icon,link}) => {
  return (
    <div className='group relative overflow-hidden rounded-lg'>
    <div className='flex flex-col justify-center bg-hero2 bg-cover bg-center bg-sky-800
     p-4  group-hover:scale-110 hover:bg-blend-luminosity transition-transform duration-500 '>
    <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <Link href={link} className='z-10'>
    <div className='px-4 pt-4'>{icon}</div>
    <p className='px-4 text-xl mb-10 mt-2 text-white font-thin'>{label}</p>
    </Link>
    </div>
    </div>
  )
}

export default ServiceCard
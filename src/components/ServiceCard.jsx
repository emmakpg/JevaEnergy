import Image from 'next/image'
import Link from 'next/link'

const ServiceCard = ({bImage,label,icon,link}) => {
  return (
    <div className='group relative overflow-hidden rounded-lg'>
    <div loading="eager" className={`flex flex-col justify-center bg-cover  bg-center ${bImage}  bg-[#F8BD7F]
     p-4  group-hover:scale-110 hover:bg-blend-luminosity transition-transform duration-500`}>
    <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <Link href={link} className='z-10'>
    <div className='px-4 pt-4'>
    <Image
          src={icon}
          alt="services"
          width={70}
          height={70}
          />
    </div>
    <p className='px-4 lg:text-xl mb-10 mt-2 text-white font-thin'>{label}</p>
    </Link>
    </div>
    </div>
  )
}

export default ServiceCard
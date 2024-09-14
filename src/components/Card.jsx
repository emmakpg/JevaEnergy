import Image from "next/image"
import Link from "next/link"

const Card = ({imageURL,title,caption,link}) => {
  return (

    <div id="C1" >
      <Link href={link}><div className="flex flex-col bg-white shadow-sm rounded-md h-full overflow-hidden">
      <Image
      src={imageURL}
      alt={title}
      width={700}
      height={700}
      className="rounded-t-md hover:scale-110 transition-transform duration-500"
      />
      <h2 className="text-primary text-lg font-medium py-4 mt-2 px-4 hover:underline">{title}</h2>

      <p className="lg:text-lg font-thin  ml-4 pb-4">
        {caption}
      </p>

      </div>
      </Link>

    </div>

  )
}

export default Card
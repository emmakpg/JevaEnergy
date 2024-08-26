import Image from "next/image"

const CvCard = ({imageUrl,label,value}) => {
  return (
    <div className="bg-white shadow-md rounded-md grid grid-cols-[1fr,5fr] p-10 ">
         <div className="pt-3"> <Image
          src={imageUrl}
          width={70}
          height={70}
          />
          </div>
          <div>
            <h2 className="text-sky-800 text-[25px] font-medium">{label}</h2>
            <p className="text-lg font-thin leading-normal">{value}</p>
          </div>


        
        </div>
  )
}

export default CvCard
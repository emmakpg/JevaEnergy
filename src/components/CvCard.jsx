import Image from "next/image"

const CvCard = ({imageUrl,label,value}) => {
  return (
    <div className="bg-white shadow-lg rounded-md grid grid-cols-[1fr,5fr] p-10">
         <div className="p-3 text-primary"> <Image
          src={imageUrl}
          alt="jeva_core_values"
          width={70}
          height={70}
          />
          </div>
          <div>
            <h2 className="text-primary text-[25px] font-medium">{label}</h2>
            <p className="lg:text-[20px] font-thin leading-normal">{value}</p>
          </div>


        
        </div>
  )
}

export default CvCard
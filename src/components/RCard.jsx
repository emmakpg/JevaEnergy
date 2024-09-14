import Image from "next/image"


const RCard = ({imageUrl,label,value}) => {
  return (
    <div className="bg-white shadow-md rounded-md grid lg:grid-cols-[1fr,4fr] grid-cols-1 p-4 h-full">
         <div className=" text-primary lg:p-4 mt-4"> <Image
          src={imageUrl}
          alt={label}
          width={170}
          height={170}
          className="lg:mt-6"
          />
          </div>
          <div className="lg:mt-10 py-4 pb-8 px-1"> 
            <h2 className="text-primary text-[25px] font-medium">{label}</h2>
            <p className="lg:text-lg font-thin leading-normal" style={{ whiteSpace: 'pre-wrap' }}>{value}</p>
          </div>


        
        </div>
  )
}

export default RCard
import Image from "next/image"


const PCard = ({imageUrl,label,value}) => {
  return (
    <div className="bg-white shadow-md rounded-md grid lg:grid-cols-[2fr,4fr] grid-cols-1">
         <div className=" text-primary lg:pr-4 "> <Image
          src={imageUrl}
          alt="jeva_core_values"
          width={500}
          height={500}
          className="rounded-l-lg"
          />
          </div>
          <div className="lg:mt-20 py-4 pb-8 px-4"> 
            <h2 className="text-primary text-[25px] font-medium">{label}</h2>
            <p className="lg:text-[20px] font-thin leading-normal" style={{ whiteSpace: 'pre-wrap' }}>{value}</p>
          </div>


        
        </div>
  )
}

export default PCard
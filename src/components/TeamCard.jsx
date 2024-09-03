import Image from "next/image"

const TeamCard = ({imageUrl,name,role,about}) => {
  return (
    <div className="bg-white shadow-lg rounded-md grid grid-cols-[2fr,3fr] p-10 m-8">
         <div className="p-3 text-primary mt-8 items-center"> <Image
          src={imageUrl}
          width={500}
          height={170}
          />
        </div>
          <div>
            <h2 className="text-primary text-[25px] font-medium">{name} - {role}</h2>
            <p className="text-lg font-thin leading-normal" style={{ whiteSpace: 'pre-wrap'}}>{about}</p>
          </div>


        
        </div>
  )
}

export default TeamCard
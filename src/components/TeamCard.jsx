import Image from "next/image"

const TeamCard = ({imageUrl,name,role,about}) => {
  return (
    <div className="bg-white shadow-lg rounded-md grid md:grid-cols-[2fr,3fr] sm:grid-cols-1 p-10 m-8">
         <div className="p-3 text-primary mt-8 items-center"> <Image
          src={imageUrl}
          alt="jeva_management"
          width={500}
          height={170}
          className="lg:rounded-lg"
          />
        </div>
          <div>
            <h2 className="text-primary text-[25px] lead-4 font-medium">{name} - {role}</h2>
            <p className="text-lg font-thin leading-normal" style={{ whiteSpace: 'pre-wrap'}}>{about}</p>
          </div>


        
        </div>
  )
}

export default TeamCard
import Image from "next/image"

const TeamCard = ({name,role,about}) => {
  return (
    <div className="bg-white shadow-lg rounded-md  p-10 m-8">
       
          <div>
            <h2 className="text-primary text-[28px] lead-4 font-medium lg:py-4">{name} - {role}</h2>
            <p className="text-lg font-thin leading-normal" style={{ whiteSpace: 'pre-wrap'}}>{about}</p>
          </div>


        
        </div>
  )
}

export default TeamCard
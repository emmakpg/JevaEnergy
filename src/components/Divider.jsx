import React from 'react'

const Divider = ({divideColor}) => {
  return (
   

    <>
     
    <div className={`bg-${divideColor} w-4 h-0.5 ml-5 mr-3`}></div>
    <div className={`bg-${divideColor} w-24 h-0.5`}></div>
    
    </>
  )
}

export default Divider
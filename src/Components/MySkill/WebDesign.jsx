import React from 'react'
import EducationItem1 from '../Resume_part/EducationItem1'
import EducationItem3 from '../Resume_part/EducationItem3'


const WebDesign = ({}) => {
  return (
   <>
   <div className='flex4'>
    <div><EducationItem1 text="Web Design"/></div>
    <div> <EducationItem3 text="65%"/> </div>
   </div>

   <progress className='width3' value="4433" max="10000" ></progress>
  
   </>
  )
}

export default WebDesign

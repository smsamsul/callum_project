import React from 'react'
import EducationItem1 from '../Resume_part/EducationItem1'
import EducationItem3 from '../Resume_part/EducationItem3'

const Reaact_js = () => {
  return (
    <>
    <div className='flex4'>
        <div> <EducationItem1 text="React js"/> </div>

        <div> <EducationItem3 text="70%"/>  </div>

    </div>

    <progress className='width3' value="799" max="1000"> 70%</progress>
    
    
    </>
  )
}

export default Reaact_js

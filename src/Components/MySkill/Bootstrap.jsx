import React from 'react'
import EducationItem1 from '../Resume_part/EducationItem1'
import EducationItem3 from '../Resume_part/EducationItem3'

const Bootstrap = () => {
  return (

    <>
    <div className='flex4'>
        <div> <EducationItem1 text="Bootstrap"/> </div>
        <div> <EducationItem3 text="99%"/> </div>
    </div>

    <progress className='width3' value="899" max="1000"> 99%</progress>
    </>
 
  )
}

export default Bootstrap

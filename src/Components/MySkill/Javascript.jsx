import React from 'react'
import EducationItem1 from '../Resume_part/EducationItem1'
import EducationItem3 from '../Resume_part/EducationItem3'


const Javascript = () => {
  return (

 <>
 <div className='flex4'>

<div> <EducationItem1 text="JavaScript"/> </div>

<div> <EducationItem3 text="80%"/></div>
  
</div>



<progress className='width3' value="3333" max="10000">80%</progress>
    
    </>

  )
}

export default Javascript

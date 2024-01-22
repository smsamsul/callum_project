import React from 'react'
import EducationItem1 from '../Resume_part/EducationItem1'
import EducationItem3 from '../Resume_part/EducationItem3'


const Angul_js = () => {
  return (
    <>

<div className='flex4'>

<div> <EducationItem1 text="Angulr js"/> </div> 
<div> <EducationItem3 text="60%"/></div> 
</div>

<progress className='width3'  value="333" max="1000">60%</progress>
      
</>
  )
}

export default Angul_js

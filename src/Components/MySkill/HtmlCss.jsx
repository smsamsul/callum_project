import React from 'react'
import EducationItem1 from '../Resume_part/EducationItem1'
import EducationItem3 from '../Resume_part/EducationItem3'

const HtmlCss = () => {
  return (
    <>
    <div className='flex4 '>

        <div> <EducationItem1 text="HTML/CSS"/> </div>

        <div>  <EducationItem3 text="95%"/> </div>

    </div>

    <progress className='width3' value="8999" max="10000"> 95%</progress>
    
    </>

  )
}

export default HtmlCss

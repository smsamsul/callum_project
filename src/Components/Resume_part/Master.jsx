import React from 'react'
import EducationItem1 from './EducationItem1'
import EducationIten2 from './EducationIten2'
import EducationItem3 from './EducationItem3'

const Master = () => {
  return (
    <>
   
    <div className='befor'> <EducationItem1 text="Master in Computer Engineering"/> </div>
   
    <EducationIten2 text="Harvard University / 2015 - 2017"/>

    <EducationItem3 text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text." design="width"/>
   
    
    </>
  )
}

export default Master

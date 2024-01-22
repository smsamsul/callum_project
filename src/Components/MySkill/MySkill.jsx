import React from 'react'
import MySkillHeading from './MySkillHeading'
import Myskill1stPart from './Myskill1stPart'
import Myskill2ndPart from './Myskill2ndPart'
import Button from '../Banner/Button'

const MySkill = () => {
  return (
    <>
    <MySkillHeading/>

    <div className='flex2 pbt'>
        <div> <Myskill1stPart/> </div>
        <div> <Myskill2ndPart/> </div>
       

    </div>
    <div className='center5'>  <Button btt="Download cv"  design="center2 hover"/> </div>
   
   
    </>
  )
}

export default MySkill

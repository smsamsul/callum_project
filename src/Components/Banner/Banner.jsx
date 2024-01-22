import React from 'react'
import Headingh2 from './Headingh2'
import Headingh1 from './Headingh1'
import Pragrapp from './Pragrapp'
import Button from './Button'
const Banner = () => {
  return (
   <>
   <div className='center'>
   <Headingh2 text="Hi, I'm a Freelancer" design="ass" />
    <Headingh1 text="callum develper" design="ass"/>
    <Pragrapp text="based in Los Angeles, USA." color="as"/>
    <Button btt="view my works" design="btton"/>


   </div>
   
    
   </>
  )
}

export default Banner

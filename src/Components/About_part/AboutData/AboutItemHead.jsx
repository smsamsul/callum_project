import React from 'react'
import AboutItem1 from './AboutItem1'
import Item2 from './Item2'
import Item3 from './Item3'
import Item4 from './Item4'


const AboutItemHead = () => {
  return (
  <>
  <div className='flex2'>
    <div> <AboutItem1 text="name:" head="Callum Smith" pd="padd"/> </div>
    <div><Item2/> </div>
    <div> <Item3 /></div>
    <div> <Item4 /> </div>
  </div>
  

  
  </>
  )
}

export default AboutItemHead

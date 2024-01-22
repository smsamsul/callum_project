import React from 'react'
import { FaPalette } from "react-icons/fa6";
import Headingh2 from '../Banner/Headingh2';
import Pragrapp from '../Banner/Pragrapp';
const ProjectItem = () => {
    
  return (
   <>

   <div className='text_center'><FaPalette/></div>
      
   <Headingh2 text="Graphic Design" design="text_center"/>
   <Pragrapp text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text." color="text_center wta"/>
   </>
  )
}

export default ProjectItem

import React from 'react'
import ProjectItem from './ProjectItem'
import { ProjectItem1 } from './ProjectItem1'
import { ProjectItem2 } from './ProjectItem2'
import ProjectItem3 from './ProjectItem3'
import ProjectItem4 from './ProjectItem4'
import ProjectItem5 from './ProjectItem5'

const ProjectItemHead = () => {
  return (
    <>
    <div className='flex3'>
    <div className='wrap'><ProjectItem/></div>

    <div className='wrap'><ProjectItem1/></div>

    <div className='wrap'><ProjectItem2/></div>

    <div className='wrap'><ProjectItem3/></div>

    <div className='wrap'><ProjectItem4/></div>

    <div className='wrap'><ProjectItem5/></div>
    

    </div>
 
    
    
    </>
  )
}

export default ProjectItemHead


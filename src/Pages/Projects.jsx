import React from 'react'
import ProjectHeading from '../Components/ProjectHeading'
import ProjectCards from '../Components/ProjectCards'

function Projects() {
  return (
    <div  className=' h-auto w-full bg-[#1D1D1C] p-7'>
        <ProjectHeading/>
        <ProjectCards/>
        <ProjectCards/>
  </div>
  )
}

export default Projects

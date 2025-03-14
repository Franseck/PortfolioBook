import React from 'react'
import Header from '../components/Header'
import ProjectBox from '../components/ProjectBox'

const ProjectsPage = ({ProjectData}) => {
  return (
<div className="h-full page-shadow bg-gradient-to-r from-gray-100 to-neutral-400 p-10 font-special">
  
      <Header
        title="Projects"
        subtitle="Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet."
      />


      <div>
        <ProjectBox ProjectData={ProjectData} />
      </div>
    </div>  )
}

export default ProjectsPage
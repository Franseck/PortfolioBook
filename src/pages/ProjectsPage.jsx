import React from 'react'
import Header from '../components/Header'
import ProjectBox from '../components/ProjectBox'

const ProjectsPage = ({ProjectData}) => {
  return (
<div className="h-full page-shadow bg-white p-10">
  
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
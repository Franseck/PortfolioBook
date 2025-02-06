import React from 'react'
import SkillLevels from '../components/SkillLevels'

const SkillsPage = () => {
  return (
    <div className="h-full page-shadow bg-gradient-to-r from-gray-100 to-neutral-400 px-10">
    <div>
     
      <div>
        <div className="relative  pt-8">
          <div className="text-center text-4xl xl:text-7xl font-bold text-black/5 font-special">
            SKILLS
          </div>
          <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl md:text-3xl font-special">
            Skills
          </h1>
        </div>
      </div>

      <div className="space-y-6 font-nothing">
          <SkillLevels skillName="HTML" percentage="90%" />
          <SkillLevels skillName="CSS" percentage="95%" />
          <SkillLevels skillName="JavaScript" percentage="85%" />
          <SkillLevels skillName="React JS" percentage="95%" />
          <SkillLevels skillName="TypeScript" percentage="75%" />
          <SkillLevels skillName="Next JS" percentage="65%" />
          <SkillLevels skillName="Tailwind" percentage="90%" />
          <SkillLevels skillName="SASS" percentage="95%" />
          <SkillLevels skillName="Styled-Components" percentage="80%" />
        </div>
      </div>
    </div>
  )
}

export default SkillsPage
import React from 'react'

const SkillLevels = ({ skillName, percentage }) => {
  return (
    <div className="mt-4 space-y-2">
    <div className="flex justify-between items-end">
      <p className="font-bold text-md">{skillName}</p>
      <p className="text-sm">{percentage}</p>
    </div>
    <div className="w-full bg-slate-200 h-2 rounded-full">
      <div
        style={{ width: `${percentage}` }}
        className="h-2 bg-primary rounded-full"
      ></div>
    </div>
  </div>
  )
}

export default SkillLevels
import { ReactNode } from 'react'

export type SkillTechProps = {
  tech: {
    icon: ReactNode
    name: string
  }
}

export const SkillTech = ({ tech }: SkillTechProps) => {
  return (
    <div className="p-6 rounded-lg bg-gray-600/20 text-gray-500 flex flex-col gap-2 hover:text-purple-500 hover:bg-gray-600/30 transition-all z-[20]">
      <div className="flex flex-col items-center justify-between">
        <p className="font-medium">{tech.name}</p>
        {tech.icon}
      </div>
    </div>
  )
}

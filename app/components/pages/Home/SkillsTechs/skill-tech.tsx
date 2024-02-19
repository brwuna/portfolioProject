import { CMSIcon } from '@/app/components/cms-icons'
import { SkillTech as ISkillTech } from '@/app/types/projects'

export type SkillTechProps = {
  tech: ISkillTech
}

export const SkillTech = ({ tech }: SkillTechProps) => {
  return (
    <div className="p-6 rounded-lg bg-gray-600/20 text-gray-500 flex flex-col gap-2 hover:text-purple-500 hover:bg-gray-600/30 transition-all z-[20]">
      <div className="flex flex-col items-center justify-between">
        <p className="font-medium">{tech.name}</p>
        <CMSIcon icon={tech.iconSvg} />
      </div>
    </div>
  )
}

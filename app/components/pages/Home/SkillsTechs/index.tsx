import { SectionTitle } from '@/app/components/SectionTitle'
import { SkillTech } from './skill-tech'
import { FaHtml5, FaCss3, FaReact } from 'react-icons/fa'
import { TbBrandJavascript } from 'react-icons/tb'
import { SkillTech as ISkillTech } from '@/app/types/projects'

type SkillTechsProps = {
  techs: ISkillTech[]
}

export const SkillsTech = ({ techs }: SkillTechsProps) => {
  const techListIcons = [
    {
      name: 'HTML',
      icon: <FaHtml5 style={{ width: '4.5rem', height: '4.5rem' }} />,
    },
    {
      name: 'CSS',
      icon: <FaCss3 style={{ width: '4.5rem', height: '4.5rem' }} />,
    },
    {
      name: 'JavaScript',
      icon: <TbBrandJavascript style={{ width: '4.5rem', height: '4.5rem' }} />,
    },
    {
      name: 'React',
      icon: <FaReact style={{ width: '4.5rem', height: '4.5rem' }} />,
    },
  ]

  return (
    <section className="container py-20">
      <SectionTitle
        subtitle="skills"
        title="Conhecimentos"
        className="md:mt-8 sm:mt-32"
      />

      <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[40px]">
        {techs?.map((tech) => (
          <SkillTech tech={tech} key={tech.name} />
        ))}
      </div>
    </section>
  )
}

import { SectionTitle } from '@/app/components/SectionTitle'
import { SkillTech } from './skill-tech'
import { FaHtml5, FaCss3, FaReact } from 'react-icons/fa'
import { TbBrandJavascript } from 'react-icons/tb'

export const SkillsTech = () => {
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
    <section className="container py-16">
      <SectionTitle subtitle="skills" title="Conhecimentos" />

      <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[40px]">
        {techListIcons.map((techName, index) => (
          <SkillTech tech={techName} key={index} />
        ))}
      </div>
    </section>
  )
}

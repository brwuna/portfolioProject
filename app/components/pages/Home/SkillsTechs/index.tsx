'use client'

import { SectionTitle } from '@/app/components/SectionTitle'
import { SkillTech } from './skill-tech'
import { SkillTech as ISkillTech } from '@/app/types/projects'
import { motion } from 'framer-motion'
type SkillTechsProps = {
  techs: ISkillTech[]
}

export const SkillsTech = ({ techs }: SkillTechsProps) => {
  return (
    <section className="container py-20">
      <SectionTitle
        subtitle="skills"
        title="Conhecimentos"
        className="md:mt-8 sm:mt-32"
      />

      <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[40px]">
        {techs?.map((tech, i) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.15, delay: i * 0.1 }}
          >
            <SkillTech tech={tech} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

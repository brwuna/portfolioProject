'use client'

import { Button } from '@/app/components/Button'
import { SectionTitle } from '@/app/components/SectionTitle'
import { TechBadge } from '@/app/components/Tech-badge'
import { TbBrandGithub } from 'react-icons/tb'
import { FiGlobe } from 'react-icons/fi'
import { FaHome } from 'react-icons/fa'
import { Link } from '@/app/components/Link'
import { HiArrowNarrowLeft } from 'react-icons/hi'
import { Project } from '@/app/types/projects'
import { RichText } from '@/app/components/rich-text'
import { motion } from 'framer-motion'
import { fadeUpAnimation, techBadgeAnimation } from '@/app/lib/animations'

type ProjectDetailsProps = {
  project: Project
}

export const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  return (
    <section className="w-full sm:min-h-[750px] flex flex-col items-center justify-center relative pb-10 sm:pb-24 py-24 px-6 overflow-hidden">
      <div className="absolute top-0 right-0 z-[20] p-8 self-end">
        <Link href="/" className="flex items-center">
          <FaHome size={18} />
          Home
        </Link>
      </div>
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          background: `url(${project.pageThumbnail.url}) no-repeat center/cover`,
        }}
      />

      <SectionTitle
        subtitle="project"
        title={project.title}
        className="text-center items-center sm:[&>h3]:text-4xl"
      />

      <motion.div
        className="text-gray-400 text-center max-w-[640px] my-4 sm:my-6 text-sm sm:text-base"
        {...fadeUpAnimation}
      >
        <RichText content={project.description.raw} />
      </motion.div>

      <div className="w-full max-w-[330px] flex flex-wrap gap-2 items-center justify-center">
        {project.technologies.map((tech, i) => (
          <TechBadge
            key={tech.name}
            name={tech.name}
            {...techBadgeAnimation}
            transition={{ duration: 0.3, delay: i * 0.1 }}
          />
        ))}
      </div>

      <motion.div
        className="my-6 sm:my-12 flex items-center gap-2 sm:gap-4 flex-col sm:flex-row z-[20]"
        {...fadeUpAnimation}
      >
        {project?.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noreferrer">
            <Button className="min-w-[180px]">
              <TbBrandGithub size={20} />
              Repositório
            </Button>
          </a>
        )}
        {project?.liveProjectUrl && (
          <a href={project.liveProjectUrl} target="_blank" rel="noreferrer">
            <Button className="min-w-[180px]">
              <FiGlobe size={20} />
              Projeto Online
            </Button>
          </a>
        )}
      </motion.div>

      <Link href="/projects" className="z-[20]">
        <HiArrowNarrowLeft size={20} />
        Voltar para projetos
      </Link>
    </section>
  )
}

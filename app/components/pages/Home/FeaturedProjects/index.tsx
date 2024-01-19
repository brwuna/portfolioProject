import { Divider } from '@/app/components/Divider/horizontal'
import { SectionTitle } from '@/app/components/SectionTitle'
import { ProjectCard } from './ProjectCard'
import { Link } from '@/app/components/Link'
import { HiArrowNarrowRight } from 'react-icons/hi'

export const FeaturedProjects = () => {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="destaques" title="Projetos em Destaque" />
      <Divider className="mb-16" />

      <div>
        <ProjectCard />
        <Divider className="my-16" />
        <ProjectCard />
        <Divider className="my-16" />

        <p className="flex items-center gap-1.5">
          <Link href="/projects" className="inline-flex">
            <span className="text-gray-300 text-lg z-[20]">
              Veja todos os projetos
            </span>
            <HiArrowNarrowRight size={20} />
          </Link>
        </p>
      </div>
    </section>
  )
}

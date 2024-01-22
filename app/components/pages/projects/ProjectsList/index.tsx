import { ProjectCard } from './ProjectCard'
import Link from 'next/link'

export const ProjectList = () => {
  return (
    <section className="container py-32 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x-4 gap-y-6">
      <Link href="/projects/nomedoprojeto" className="z-[20]">
        <ProjectCard />
      </Link>
    </section>
  )
}

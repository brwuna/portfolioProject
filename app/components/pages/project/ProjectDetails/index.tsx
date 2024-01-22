import { Button } from '@/app/components/Button'
import { SectionTitle } from '@/app/components/SectionTitle'
import { TechBadge } from '@/app/components/Tech-badge'
import { TbBrandGithub } from 'react-icons/tb'
import { FiGlobe } from 'react-icons/fi'
import { FaHome } from 'react-icons/fa'
import { Link } from '@/app/components/Link'
import { HiArrowNarrowLeft } from 'react-icons/hi'

export const ProjectDetails = () => {
  return (
    <section className="w-full sm:min-h-[750px] flex flex-col items-center justify-center relative pb-10 sm:pb-24 py-24 px-6 overflow-hidden">
      <div className="absolute top-0 right-0 z-[20] p-8 self-end">
        <Link href="/" className="flex items-center">
          <FaHome size={18} />
          Home
        </Link>
      </div>
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background:
            'url(https://images.unsplash.com/photo-1572177812156-58036aae439c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D) no-repeat center/cover',
        }}
      />

      <SectionTitle
        subtitle="projetos"
        title="Nome do Projeto"
        className="text-center items-center sm:[&>h3]:text-4xl"
      />

      <p className="text-gray-400 text-center max-w-[640px] my-4 sm:my-6 text-sm sm:text-base">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
        nesciunt enim iste sint dolorum assumenda dolores corporis soluta ab
        eligendi similique perferendis, ullam aut, cupiditate eveniet delectus,
        minus mollitia quo!
      </p>

      <div className="w-full max-w-[330px] flex flex-wrap gap-2 items-center justify-center">
        <TechBadge name="Next.js" />
        <TechBadge name="Next.js" />
        <TechBadge name="Next.js" />
        <TechBadge name="Next.js" />
      </div>

      <div className="my-6 sm:my-12 flex items-center gap-2 sm:gap-4 flex-col sm:flex-row z-[20]">
        <a href="https://github.com/brwuna" target="_blank" rel="noreferrer">
          <Button className="min-w-[180px]">
            <TbBrandGithub size={20} />
            Repositório
          </Button>
        </a>
        <a href="https://github.com/brwuna" target="_blank" rel="noreferrer">
          <Button className="min-w-[180px]">
            <FiGlobe size={20} />
            Projeto Online
          </Button>
        </a>
      </div>

      <Link href="/projects" className="z-[20]">
        <HiArrowNarrowLeft size={20} />
        Voltar para projetos
      </Link>
    </section>
  )
}

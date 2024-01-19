import { Link } from '@/app/components/Link'
import { TechBadge } from '@/app/components/Tech-badge'
import Image from 'next/image'
import { HiArrowNarrowRight } from 'react-icons/hi'

export const ProjectCard = () => {
  return (
    <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
      <div className="w-full h-full">
        <Image
          width={420}
          height={304}
          src="https://images.unsplash.com/photo-1572177812156-58036aae439c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Exemplo"
          className="w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full object-cover rounded-lg"
        />
      </div>

      <div>
        <h3 className="flex items-center gap-3 font-medium text-lg text-gray-300">
          Projects
        </h3>
        <p className="text-gray-400 my-6">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
          unde. Consequatur cupiditate obcaecati aut enim! Corporis debitis
          dicta ad, officia pariatur facere quod sed tenetur esse vitae, unde
          iusto deleniti.
        </p>

        <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
          <TechBadge name="JavaScript" />
          <TechBadge name="JavaScript" />
          <TechBadge name="JavaScript" />
          <TechBadge name="JavaScript" />
        </div>

        <Link href="/projects/meuprojeto">
          <span className="text-gray-300 text-lg z-[20]">Ver projeto</span>
          <HiArrowNarrowRight />
        </Link>
      </div>
    </div>
  )
}

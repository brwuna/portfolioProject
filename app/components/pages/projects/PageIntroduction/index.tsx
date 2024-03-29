import { Link } from '@/app/components/Link'
import { SectionTitle } from '@/app/components/SectionTitle'
import { HiArrowNarrowLeft } from 'react-icons/hi'

export const PageIntroduction = () => {
  return (
    <section className="w-full h-[290px] lg:h-[360px] flex flex-col items-center justify-center px-2">
      <SectionTitle
        subtitle="projetos"
        title="Meus Projetos"
        className="text-center items-center [&>h3]:-text-4xl"
      />

      <div className="flex flex-col items-center z-[20]">
        <p className="text-gray-400 text-center max-w-[640px] my-6 text-sm sm:text-base">
          Aqui você terá a oportunidade de visualizar alguns dos projetos que
          elaborei. Sinta-se à vontade para explorar e navegar entre eles,
          descobrindo as tecnologias empregadas e as funcionalidades integradas.
        </p>
        <Link href="/">
          <HiArrowNarrowLeft />
          Voltar para Home
        </Link>
      </div>
    </section>
  )
}

import Image from 'next/image'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { TbBrandGithub, TbBrandLinkedin, TbBrandWhatsapp } from 'react-icons/tb'

import { Button } from '@/app/components/Button'
import { TechBadge } from '@/app/components/Tech-badge'

const MOCK_CONTACTS = [
  {
    url: 'https://github.com/brwuna',
    icon: <TbBrandGithub />,
  },
  {
    url: 'https://www.linkedin.com/in/bruna-nascimento-1ba53a239/',
    icon: <TbBrandLinkedin />,
  },
  {
    url: 'https://www.linkedin.com/in/bruna-nascimento-1ba53a239/',
    icon: <TbBrandWhatsapp />,
  },
]

export const HeroSection = () => {
  const techNames = ['HTML', 'CSS', 'JavaScript', 'ReactJS']

  return (
    <section className="w-full lg:h-[755px] flex flex-col justify-center pb-10 sm:pb-32 py-32 lg:pb-[110px]">
      <div className="container flex items-center lg:items-start justify-between flex-col-reverse lg:flex-row">
        <div className="w-auto lg:w-full lg:max-w-[530px]">
          <p className="font-mono text-purple-400 text-3xl lg:text-4xl ">
            Hey{''}
            <span className="animate-blink-opacity text-purple-600 text-medium">
              💜
            </span>
          </p>
          <h2 className="text-lg mt-2 text-gray-400">
            meu nome é{' '}
            <span className="font-medium text-xl text-purple-400">Bruna</span>
          </h2>

          <p className="text-gray-400 my-4 text-sm sm:text-base">
            Sou formada em Biomedicina e atualmente estou fazendo minha
            transição de carreira 💙 aspiring Front End developer. Lorem, ipsum
            dolor sit amet consectetur adipisicing elit. Dignissimos deleniti
            aspernatur earum maxime aliquam similique nostrum eveniet magnam
            nisi ipsa asperiores debitis illo in nam, id quos? Corrupti,
            deserunt temporibus!
          </p>

          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
            {techNames.map((techName, index) => (
              <TechBadge name={techName} key={index} />
            ))}
          </div>

          <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
            <Button className="w-max shadow-button">
              Entre em contato
              <HiArrowNarrowRight size={18} className="animate-bounce" />
            </Button>

            <div className="text-gray-600 text-2xl flex items-center h-20 gap-3">
              {MOCK_CONTACTS.map((contact, index) => (
                <a
                  href={contact.url}
                  target="_blank"
                  key={`contact-${index}`}
                  rel="noreferrer"
                  className="hover:text-gray-100 transition-colors"
                >
                  {contact.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <Image
          className="w-[230px] h-[230px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0 rounded object-cover"
          width={420}
          height={404}
          src="/images/me7.png"
          alt="Foto de perfil"
        />
      </div>
    </section>
  )
}

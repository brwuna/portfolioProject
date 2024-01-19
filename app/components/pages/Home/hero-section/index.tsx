'use client'

import Image from 'next/image'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { TbBrandGithub, TbBrandLinkedin, TbBrandWhatsapp } from 'react-icons/tb'
import { TypeAnimation } from 'react-type-animation'

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
  const techNames = ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'TypeScript']

  return (
    <section className="w-full lg:h-[755px] flex flex-col justify-center pb-10 sm:pb-32 py-32 lg:pb-[110px] absolute top-[30px] z-20">
      <div className="container flex items-center lg:items-start justify-between flex-col-reverse lg:flex-row">
        <div className="w-auto lg:w-full lg:max-w-[530px]">
          <h1 className="text-white font-medium text-3xl mt-8 lg:text-4xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-950">
              Hello, I&apos;m <br></br>
            </span>
            <TypeAnimation
              sequence={[
                'Bruna',
                4000,
                'Web Developer',
                2000,
                'Mobile Developer',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

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
        <div className="custom-rounded bg-[#2523238c]/40 w-[250px] h-[250px] md:w-[360px] md:h-[360px] lg:w-[400px] lg:h-[400px]">
          <Image
            className="custom-rounded w-[250px] h-[250px] mb-6 md:flex md:w-[360px] md:h-[360px] lg:w-[400px] lg:h-[400px] lg:mb-0 object-cover"
            width={400}
            height={400}
            src="/images/avatar.png"
            alt="Foto de perfil"
          />
        </div>
      </div>
    </section>
  )
}

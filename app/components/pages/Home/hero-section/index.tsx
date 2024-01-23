'use client'

import Image from 'next/image'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { TypeAnimation } from 'react-type-animation'

import { Button } from '@/app/components/Button'
import { TechBadge } from '@/app/components/Tech-badge'
import { HomePageInfo } from '@/app/types/page-info'
import { RichText } from '@/app/components/rich-text'
import { CMSIcon } from '@/app/components/cms-icons'

type HomeSectionProps = {
  homeInfo: HomePageInfo
}

export const HeroSection = ({ homeInfo }: HomeSectionProps) => {
  const handleContact = () => {
    const contactSection = document.querySelector('#contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

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

          <div className="text-gray-400 text-justify my-4 text-sm sm:text-base">
            <RichText content={homeInfo.introduction.raw} />
          </div>

          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
            {homeInfo.technologies.map((tech) => (
              <TechBadge name={tech.name} key={tech.name} />
            ))}
          </div>

          <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
            <Button className="w-max shadow-button" onClick={handleContact}>
              Entre em contato
              <HiArrowNarrowRight size={18} className="animate-bounce" />
            </Button>

            <div className="text-gray-600 text-2xl flex items-center h-20 gap-3">
              {homeInfo.socials.map((contact, index) => (
                <a
                  href={contact.url}
                  target="_blank"
                  key={`contact-${index}`}
                  rel="noreferrer"
                  className="hover:text-gray-100 transition-colors"
                >
                  <CMSIcon icon={contact.iconSvg} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="custom-rounded bg-[#2523238c]/40 w-[270px] h-[270px] md:w-[360px] md:h-[360px] lg:w-[400px] lg:h-[400px]">
          <Image
            className="custom-rounded w-[270px] h-[270px] mb-6 md:flex md:w-[360px] md:h-[360px] lg:w-[400px] lg:h-[400px] lg:mb-0 object-cover"
            width={400}
            height={400}
            src={homeInfo.profilePicture.url}
            alt="Foto de perfil"
          />
        </div>
      </div>
    </section>
  )
}

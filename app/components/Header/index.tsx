'use client'

import Image from 'next/image'
import Link from 'next/link'
import { NavItem } from './nav-items'
import { motion } from 'framer-motion'

const NAV_ITEMS = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Projetos',
    href: '/projects',
  },
]

export const Header = () => {
  return (
    <header className="w-full h-full">
      <div className="flex flex-col h-[850px] gap-20">
        <motion.div
          className="relative flex flex-col h-full w-full"
          initial={{ top: -100 }}
          animate={{ top: 0 }}
          transition={{ duration: 0.5 }}
        >
          <video
            autoPlay
            muted
            loop
            className="rotate-180 absolute top-[-900px] lg:top-[-400px] lef-0 z-[1] w-full h-full object-cover"
          >
            <source src="/blackhole.webm" type="video/webm" />
          </video>

          <div className="w-full h-[75px] top-0 blackdrop-blur-md z-[30] px-5 lg:px-10 flex justify-between items-center lg:justify-end">
            <div className="lg:hidden">
              <Link href="/">
                <Image
                  width={45}
                  height={40}
                  src="/images/logo2.svg"
                  alt="Code"
                />
              </Link>
            </div>
            <nav className="flex items-center gap-4 sm:gap-9 lg:border lg:border-[#7042f861] lg:bg-[#0300145e] my-[20px] lg:px-[20px] lg:py-[10px] rounded-full">
              {NAV_ITEMS.map((item) => (
                <NavItem {...item} key={item.label} />
              ))}
            </nav>
          </div>
        </motion.div>
      </div>
    </header>
  )
}

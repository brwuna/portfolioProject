'use client'

import Image from 'next/image'
import Link from 'next/link'
import { NavItem } from './nav-items'

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
        <div className="relative flex flex-col h-full w-full">
          <video
            autoPlay
            muted
            loop
            className="rotate-180 absolute top-[-900px] lg:top-[-369px] lef-0 z-[1] w-full h-full object-cover"
          >
            <source src="/blackhole.webm" type="video/webm" />
          </video>

          <div className="w-full h-[75px] top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] blackdrop-blur-md z-[30] px-10 flex justify-between items-center lg:justify-end">
            <div className="text-2xl text-purple-400 font-mono lg:hidden">
              &lt;/&gt;
            </div>
            <nav className="flex items-center gap-4 sm:gap-9 border border-[#7042f861] bg-[#0300145e] my-[20px] px-[20px] py-[10px] rounded-full">
              {NAV_ITEMS.map((item) => (
                <NavItem {...item} key={item.label} />
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

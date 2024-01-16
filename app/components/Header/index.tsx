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
    <header className="absolute top-0 w-full z-10 h-24 flex items-center justify-center">
      <div className="container flex items-center justify-between">
        {/* <Link href="/">
          <Image width={58} height={49} src="/images/logo2.svg" alt="Logo" />
        </Link> */}

        <div className="text-3xl text-purple-400 font-mono">&lt;/&gt;</div>

        <nav className="flex items-center gap-4 sm:gap-9">
          {NAV_ITEMS.map((item) => (
            <NavItem {...item} key={item.label} />
          ))}
        </nav>

        {/* {NAV_ITEMS.map((item, index) => (
            <>
              <NavItem {...item} key={item.label} />
              {index === 0 && (
                <div className="text-3xl text-purple-400 font-mono">
                &lt;/&gt;
              </div>
              )}
            </>
          ))} */}
      </div>
    </header>
  )
}

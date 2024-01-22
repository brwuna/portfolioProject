import { Inter, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'
import { Metadata } from 'next'
import { Header } from './components/Header'
import { StarsCanvas } from './components/StarBackground'
import { ContactForm } from './components/ContactForm'
import { Footer } from './components/Footer'
import { BackToTop } from './components/BackToTop'

export const metadata: Metadata = {
  title: 'Bruna Nascimento - Portfolio',
  description: 'My portfolio',
}

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const plexMono = IBM_Plex_Mono({
  variable: '--font-plex-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${plexMono.variable}`}>
      <body>
        <StarsCanvas />
        <BackToTop />
        {children}
        <ContactForm />
        <Footer />
      </body>
    </html>
  )
}

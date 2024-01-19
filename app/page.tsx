import { StarsCanvas } from './components/StarBackground'
import { FeaturedProjects } from './components/pages/Home/FeaturedProjects'
import { SkillsTech } from './components/pages/Home/SkillsTech'
import { HeroSection } from './components/pages/Home/hero-section'

export default async function Home() {
  return (
    <>
      <StarsCanvas />
      <HeroSection />
      <SkillsTech />
      <FeaturedProjects />
    </>
  )
}

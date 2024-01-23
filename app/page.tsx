import { Header } from './components/Header'
import { FeaturedProjects } from './components/pages/Home/FeaturedProjects'
import { SkillsTech } from './components/pages/Home/SkillsTechs'
import { HeroSection } from './components/pages/Home/hero-section'
import { HomePageData } from './types/page-info'
import { fetchHygraphQuery } from './utils/fetch-hygraph-query'

const getPageData = async (): Promise<HomePageData> => {
  const query = `
    query PageInfoQuery {
      page(where: {slug: "home"}) {
        introduction {
          raw
        }
        technologies {
          name
        }
        profilePicture {
          url
        }
        socials {
          url
          iconSvg
        }
        skillsTechs {
          iconSvg
          name
        }
      }
    }
  `

  return fetchHygraphQuery(query, 60 * 60 * 24)
}

export default async function Home() {
  const { page: pageData } = await getPageData()
  return (
    <>
      <Header />
      <HeroSection homeInfo={pageData} />
      <SkillsTech />
      <FeaturedProjects />
    </>
  )
}

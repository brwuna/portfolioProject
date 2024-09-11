import { Header } from './components/Header'
import { FeaturedProjects } from './components/pages/Home/FeaturedProjects'
import { SkillsTech } from './components/pages/Home/SkillsTechs'
import { HeroSection } from './components/pages/Home/hero-section'
import { HomePageData } from './types/page-info'
import { fetchHygraphQuery } from './utils/fetch-hygraph-query'

export const metadata = {
  title: 'Home | Bruna Nascimento',
}

const getPageData = async (): Promise<HomePageData> => {
  const query = `
    query PageInfoQuery {
      page(where: {slug: "home"}) {
        introduction {
          raw
        }
        technologies(last: 100) {
          name
        }
        profilePicture {
          url
        }
        socials {
          url
          iconSvg
        }
        skillsTechs(last: 100) {
          iconSvg
          name
        }
        featuredProjects {
          slug
          thumbnail {
            url
          }
          title
          shortDescription
          technologies {
            name
          }
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
      <SkillsTech techs={pageData.skillsTechs} />
      <FeaturedProjects projects={pageData.featuredProjects} />
    </>
  )
}

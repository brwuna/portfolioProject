import type { RichTextContent } from '@graphcms/rich-text-types'
import { SkillTech, Project } from './projects'

export type Social = {
  url: string
  iconSvg: string
}

export type HomePageInfo = {
  introduction: {
    raw: RichTextContent
  }
  technologies: SkillTech[]
  profilePicture: {
    url: string
  }
  socials: Social[]
  skillsTechs: SkillTech[]
  featuredProjects: Project[]
}

export type ProjectPageData = {
  project: Project
}

export type ProjectsPageData = {
  projects: Project[]
}

export type ProjectPageStaticData = {
  projects: {
    slug: string
  }[]
}

export type HomePageData = {
  page: HomePageInfo
}

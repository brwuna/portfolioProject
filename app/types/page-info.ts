import type { RichTextContent } from '@graphcms/rich-text-types'
import { SkillTech } from './projects'

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
}

export type HomePageData = {
  page: HomePageInfo
}

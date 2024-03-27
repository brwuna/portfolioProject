import type { RichTextContent } from '@graphcms/rich-text-types'

export type SkillTech = {
  iconSvg: string
  name: string
}

export type ProjectSection = {
  title: string
  image: {
    url: string
  }
}

export type Project = {
  slug: string
  thumbnail: {
    url: string
  }
  title: string
  shortDescription: string
  technologies: SkillTech[]
  pageThumbnail: {
    url: string
  }
  sections: ProjectSection[]
  description: {
    raw: RichTextContent
    text: string
  }
  liveProjectUrl?: string
  githubUrl?: string
}

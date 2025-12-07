import type { LinkTargets } from '@/types/misc.types';

// general api interfaces
export interface PimcoreApiResponse {
  success: boolean
  data: {
    [key: string]: any
  }
}

export type PimcoreTranslationsBatch = {
  [key: string]: string
}

export interface PimcoreTranslationsBatchResponse {
  success: boolean
  data: PimcoreTranslationsBatch
}

export interface PimcoreTranslationsSingleResponse {
  success: boolean
  data: string
}

interface PimcoreApiResponseDataBase {
  id: number
  create_date: string
  modified_date: string
}

// project interfaces
export interface PimcoreProjectImage {
  path: string
  ratio?: string
  has_padding_bottom?: boolean
  metadata: {
    [key: string]: string
  }
}

export interface PimcoreProjectLink {
  href: string
  text?: string
  type: string
  is_file?: boolean
}

export interface PimcoreProject extends PimcoreApiResponseDataBase {
  name: string
  title: string
  description: string
  position: number
  links: {
    github?: PimcoreProjectLink
    live?: PimcoreProjectLink
  }
  tags: string[]
  thumbnail: PimcoreProjectImage
  gallery: PimcoreProjectImage[]
}

// profile interfaces
export interface PimcoreProfile extends PimcoreApiResponseDataBase {
  basic: PimcoreProfileBasics
  profile_picture: PimcoreProfilePicture
}

export interface PimcoreProfileBasics {
  heading: string
  subheading: string
  copy: string
}

export interface PimcoreProfilePicture {
  image: string
  social_link: {
    label: string
    href: string
  }
}

// qualification interfaces
export interface PimcoreSkill extends PimcoreApiResponseDataBase {
  name: string
  title: string
  icon?: string
  image?: string
  position: number
}

export interface PimcoreJob extends PimcoreApiResponseDataBase {
  title: string
  timeperiod: string
  company: string
  tasks: string
  skills: string
  career: string
  position: number
}

export interface PimcoreJobsResponse extends PimcoreApiResponse {
  data: {
    professional: PimcoreJob[]
    school: PimcoreJob[]
  }
}

export interface PimcoreResume extends PimcoreApiResponseDataBase {
  filepath: string
}

// about me interfaces
export interface PimcoreAboutMe extends PimcoreApiResponseDataBase {
  basic: {
    heading: string
    subheading: string
    personal_image: string
    intro_text: string
  }
  about_myself: {
    about_text: string
    interests: string
    first_project: string
  }
  professional: {
    backend: string
    backend_image: string
    frontend: string
    frontend_image: string
    today: string
  }
}

// linktree interfaces
export interface PimcoreLinktree extends PimcoreApiResponseDataBase {
  basic: {
    profile_picture: string
    fullname: string
    username: string
  }
  links: PimcoreLinktreeButtonList
  footerLinks: PimcoreLinktreeLinkList
}

export interface PimcoreLinktreeLink {
  href: string
  label: string
  target: LinkTargets
}

export interface PimcoreLinktreeButton extends PimcoreLinktreeLink {
  icon: {
    pack: string
    name: string
  }
}

export interface PimcoreLinktreeLinkList {
  [key: string]: PimcoreLinktreeLink
}

export interface PimcoreLinktreeButtonList {
  [key: string]: PimcoreLinktreeButton
}

// contact form interfaces
export interface PimcoreContactFormRequestData {
  name: string
  email: string
  subject: string
  message: string
}

// socials interfaces
export interface PimcoreSocialItem extends PimcoreApiResponseDataBase {
  name: string
  url: string
  tooltip: string
  icon: string
  position: number
}

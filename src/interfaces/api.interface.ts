// general api interfaces
export interface ApiResponse {
  success: boolean
  data: {
    [key: string]: any
  }
}

interface ApiResponseDataBase {
  id: number
  create_date: string
  modified_date: string
}

// project interfaces
export interface ProjectImage {
  path: string
  ratio?: string
  has_padding_bottom?: boolean
  metadata: {
    [key: string]: string
  }
}

export interface ProjectLink {
  href: string
  text?: string
  type: string
  is_file?: boolean
}

export interface Project extends ApiResponseDataBase {
  name: string
  title: string
  description: string
  position: number
  links: {
    github?: ProjectLink
    live?: ProjectLink
  }
  tags: string[]
  thumbnail: ProjectImage
  gallery: ProjectImage[]
}

// profile interfaces
export interface Profile extends ApiResponseDataBase {
  basic: ProfileBasics
  profile_picture: ProfilePicture
}

export interface ProfileBasics {
  heading: string
  subheading: string
  copy: string
}

export interface ProfilePicture {
  image: string
  social_link: {
    label: string
    href: string
  }
}

// qualification interfaces
export interface Skill extends ApiResponseDataBase {
  name: string
  title: string
  icon?: string
  image?: string
  position: number
}

export interface Job extends ApiResponseDataBase {
  title: string
  timeperiod: string
  company: string
  tasks: string
  skills: string
  career: string
  position: number
}

export interface JobsResponse extends ApiResponse {
  data: {
    professional: Job[]
    school: Job[]
  }
}

export interface Resume extends ApiResponseDataBase {
  filepath: string
}

// about me interfaces
export interface AboutMe extends ApiResponseDataBase {
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
export interface Linktree extends ApiResponseDataBase {
  basic: {
    profile_picture: string
    fullname: string
    username: string
  }
  links: LinktreeButtonList
  footerLinks: LinktreeLinkList
}

export interface LinktreeLink {
  href: string
  label: string
  target: string
}

export interface LinktreeButton extends LinktreeLink {
  icon: {
    pack: string
    name: string
  }
}

export interface LinktreeLinkList {
  [key: string]: LinktreeLink
}

export interface LinktreeButtonList {
  [key: string]: LinktreeButton
}

// contact form interfaces
export interface ContactFormRequestData {
  name: string
  email: string
  subject: string
  message: string
}

// socials interfaces
export interface SocialItem extends ApiResponseDataBase {
  name: string
  url: string
  tooltip: string
  icon: string
  position: number
}

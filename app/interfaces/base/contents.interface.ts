import type { PimcoreJob } from '@/interfaces/base/api.interface';

// introduction content
export interface JlsContentIntroduction {
  buttons: JlsContentIntroButton[]
}

export interface JlsContentIntroButton {
  name: string
  link: string
  isMirrored: boolean
  text: string
}

// qualification content
export interface JlsContentCareers {
  professional: JlsContentCareer
  school: JlsContentCareer
}

export interface JlsContentCareer {
  heading: string
  jobs: PimcoreJob[] | null
}

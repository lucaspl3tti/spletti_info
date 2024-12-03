import type { Job } from '@/interfaces/api.interface';

// introduction content
export interface Introduction {
  buttons: IntroButton[]
}

export interface IntroButton {
  name: string
  link: string
  isMirrored: boolean
}

// qualification content
export interface Careers {
  professional: Career
  school: Career
}

export interface Career {
  heading: string
  jobs: Job[] | null
}

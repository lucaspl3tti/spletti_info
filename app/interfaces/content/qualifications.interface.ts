import type { PimcoreJob, PimcoreSkill } from '@/interfaces/base/api.interface';

// jobs
export interface JlsJobProperties {
  job: PimcoreJob | null
  isDoubleSided?: boolean
}

export interface JlsJobMainProperties {
  title?: string
  tasks?: string[]
}

export interface JlsJobMetaProperties {
  timeperiod?: PimcoreJob['timeperiod']
  company?: PimcoreJob['company']
}

export interface JlsJobSkillsProperties {
  skills?: string[]
  align?: 'start'|'end'
}

// skills
export interface JlsSkillProperties {
  skill: PimcoreSkill | null
}

export interface JlsSkillIcon {
  name: string
  pack: string
}

// nav
export interface JlsQualificationNavProperties {
  skillsToggled: boolean
  jobsToggled: boolean
}

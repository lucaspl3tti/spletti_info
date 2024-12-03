import type { Job, Skill } from '@/interfaces/api.interface';

// jobs
export interface JobProperties {
  job: Job | null
  isDoubleSided?: boolean
}

// skills
export interface SkillProperties {
  skill: Skill | null
}

export interface SkillIcon {
  name: string
  pack: string
}

// nav
export interface QualificationNavProperties {
  skillsToggled: boolean
  jobsToggled: boolean
}

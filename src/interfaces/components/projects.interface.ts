import type {
  ProjectImage,
  ProjectLink,
  Project,
} from '@/interfaces/api.interface';

// project image
export interface ProjectImageProperties {
  thumbnail: ProjectImage | null
  images: ProjectImage[] | null
}

// project link
export interface ProjectLinkProperties {
  link: ProjectLink | null
}

export interface ProjectItemProperties {
  project: Project | null
}

import type {
  PimcoreProject,
  PimcoreProjectImage,
  PimcoreProjectLink,
} from '@/interfaces/base/api.interface';

import type { ClbImage } from '@/interfaces/components/image.interface';

export interface ProjectItemProperties {
  project: PimcoreProject | null
}

export interface ProjectImageProperties {
  thumbnail: PimcoreProjectImage | null
  images: PimcoreProjectImage[] | null
}

export interface ProjectLinkProperties {
  link: PimcoreProjectLink
}

export interface ProjectImage extends ClbImage {
  ratio?: string
}

export interface ProjectZoomModalItem {
  image: ProjectImage
}

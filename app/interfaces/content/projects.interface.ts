import type {
  PimcoreProject,
  PimcoreProjectImage,
  PimcoreProjectLink,
} from '@/interfaces/base/api.interface';

import type { ClbImage } from '@/interfaces/components/image.interface';

export interface JlsProjectItemProperties {
  project: PimcoreProject | null
}

export interface JlsProjectImageProperties {
  thumbnail: PimcoreProjectImage | null
  images?: PimcoreProjectImage[]
}

export interface JlsProjectZoomModalProperties {
  images?: PimcoreProjectImage[]
}

export interface JlsProjectLinkProperties {
  link: PimcoreProjectLink
}

export interface JlsProjectImage extends ClbImage {
  ratio?: string
}

export interface JlsProjectZoomModalItem {
  image: JlsProjectImage
}

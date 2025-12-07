import type {
  PimcoreLinktreeButtonList,
  PimcoreLinktreeLinkList,
} from '@/interfaces/base/api.interface';

export interface JlsLinktreeFooterProperties {
  links: PimcoreLinktreeLinkList|null
  fullname: string
}

export interface JlsLinktreeHeadProperties {
  profilleImage: string
  username: string
}

// linktree links properties
export interface JlsLinktreeLinksProperties {
  links: PimcoreLinktreeButtonList | null
}

// linktree particles properties
export interface JlsLinktreeParticlesProperties {
  color?: string
}

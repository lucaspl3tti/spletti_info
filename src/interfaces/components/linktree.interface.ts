import type {
  LinktreeButtonList,
  LinktreeLinkList,
} from '@/interfaces/api.interface';

export interface LinktreeFooterProperties {
  links: LinktreeLinkList|null
  fullname: string
}

export interface LinktreeHeadProperties {
  profilleImage: string
  username: string
}

// linktree links properties
export interface LinktreeLinksProperties {
  links: LinktreeButtonList | null
}

// linktree particles properties
export interface LinktreeParticlesProperties {
  color?: string
}

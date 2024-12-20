// app bar
export interface AppBarProperties {
  navItems: NavItem[]
  hideNav?: boolean
}

export interface AppBarLogoProperties {
  text: string
  isHandwritingFont?: boolean
  hideDot?: boolean
}

export interface NavItem {
  name: string
  link: string
  translationKey: string
  icon: string
}

// app nav
export interface AppNavProperties {
  items: NavItem[]
  isSidebar?: boolean
  showIcon?: boolean
  iconPack?: string
  iconSize?: string
  isHandwritingFont?: boolean
}

// app menu
export interface AppMenuProperties {
  items: NavItem[]
  showSocialList?: boolean
  isHandwritingFont?: boolean
}

// app particles
export interface AppParticlesProperties {
  color: string,
  particlesCount?: number|string
  enableLinks?: boolean
  disableMovement?: boolean
  minimumSize?: number|string
  maximumSize?: number|string
  minimumSpeed?: number|string
  maximumSpeed?: number|string
  minimumOpacity?: number|string
  maximumOpacity?: number|string
}

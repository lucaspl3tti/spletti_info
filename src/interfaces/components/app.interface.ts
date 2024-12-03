// app bar
export interface AppBarProperties {
  color?: string
  navItems: NavItem[] | null
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
  text: string
  icon: string
}

// app nav
export interface AppNavProperties {
  items: NavItem[] | null
  isSidebar?: boolean
  showIcon?: boolean
  iconPack?: string
  iconSize?: string
  isHandwritingFont?: boolean
}

// app menu
export interface AppMenuProperties {
  items: NavItem[] | null
  logoText: string
  showSocialList?: boolean
  isHandwritingFont?: boolean
}

// app particles
export interface AppParticlesProperties {
  color: string
}

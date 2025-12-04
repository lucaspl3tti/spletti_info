// app bar
export interface ClbAppBarProperties {
  navItems: ClbNavItem[]
  hideNav?: boolean
}

export interface ClbAppBarBrandProperties {
  text: string
  isHandwritingFont?: boolean
  hideDot?: boolean
}

export interface ClbAppBarHamburgerProperties {
  active?: boolean
  forceActiveState?: boolean
}

// app menu
export interface ClbAppMenuLayerProperties {
  items: ClbNavItem[]
  showSocialList?: boolean
  isHandwritingFont?: boolean
}

// app nav
export interface ClbAppNavProperties {
  items: ClbNavItem[]
  isSidebar?: boolean
  showIcon?: boolean
  iconPack?: string
  iconSize?: string
  isHandwritingFont?: boolean
}

export interface ClbNavItem {
  name: string
  link: string
  text: string
  icon: string
}

// app particles
export interface ClbAppParticlesProperties {
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

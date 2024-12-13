import type {
  ButtonType,
  Density,
  HeadingType,
  LinkTarget,
  LoaderDotsVariants,
  Location,
  PositionBasic,
  RoundedValue,
  Size,
  SizeWithDefault,
  TextPosition,
  Theme,
  ThemeBasic,
  ThemeColor,
  ThemeNoneSelectable,
  TransitionY,
  Variant,
  VariantBasic,
} from '@/types/misc.types';

// badge component
export interface BadgeProperties {
  theme?: ThemeColor
  variant?: VariantBasic
  size?: SizeWithDefault
}

// button component
export interface ButtonProperties {
  text?: string,
  classes?: string | string[]
  variant?: Variant
  theme?: ThemeNoneSelectable
  name?: string
  width?: string | number
  color?: string
  href?: string
  to?: string
  type?: ButtonType
  density?: Density
  size?: Size | ''
  block?: boolean
  rounded?: RoundedValue
  elevation?: number | string
  ripple?: boolean
  iconBtn?: boolean
  unevenBorder?: boolean
  mirrored?: boolean
}

// container component
export interface ContainerProperties {
  size?: SizeWithDefault
}

// dropdown component
export interface DropdownProperties {
  items?: DropdownItem[]
  disabled?: boolean
  activatorTitle?: string
  activatorTheme?: ThemeNoneSelectable
  theme?: ThemeBasic
  defaultActiveItem?: DropdownItem
}

export interface DropdownItem {
  id: string
  title: string
  callback: (id?: string) => void
}

export interface DropdownTriggerProps {
  'aria-expanded'?: string
  'aria-haspopup'?: string
  onClick?: (event: MouseEvent) => void
}

// hamburger component
export interface HamburgerProperties {
  active?: boolean
  forceActiveState?: boolean
}

// heading component
export interface HeadingProperties {
  headingType: HeadingType
  text?: string
  position?: TextPosition
  theme?: ThemeColor
  hideDot?: boolean
}

// icon component
export interface IconProperties {
  name?: string
  pack?: string
  size?: string | number
  color?: string
  hasNoMargin?: boolean
  hasNoDefaultAnimation?: boolean
}

// language switch component
export interface LanguageSwitchProperties {
  disabled?: boolean
}

// link component
export interface LinkProperties {
  to: string
  title: string
  theme?: Theme
  target?: LinkTarget
  isExternal?: boolean
  noUnderline?: boolean
}

// list component
export interface ListProperties {
  items?: string[]
}

// loader components
export interface LoaderCircleProperties {
  theme?: Theme
  size?: SizeWithDefault
}

export interface LoaderDotsProperties {
  variant?: LoaderDotsVariants,
  theme?: Theme
  size?: SizeWithDefault
}

export interface LoaderShapesProperties {
  size?: SizeWithDefault
}

export interface LoaderTextProperties {
  text?: string
  theme?: Theme
  size?: 'default'|HeadingType
}

// modal component
export interface ModalProperties {
  title?: string
  theme?: Theme
  width?: string | number
  hideActions?: boolean
  persistent?: boolean
  transition?: TransitionY
  fullscreen?: boolean
  toolbarPosition?: PositionBasic
}

// section component
export interface SectionProperties {
  id: string
  name?: string
  title?: string
  headingType?: HeadingType
  textPosition?: TextPosition
  titlePosition?: TextPosition
  titleClass?: string | string[]
  contentClass?: string | string[]
}

// social list component
export interface SocialListProperties {
  iconSize?: string | number
  isNav?: boolean
}

// subheading component
export interface SubheadingProperties {
  text: string
  isHtml?: boolean
  position?: TextPosition
}

// theme switch component
export interface ThemeSwitchProperties {
  colorMode: 'dark' | 'light'
}

// timeline component
export interface TimelineProperties {
  align?: 'start' | 'center'
  direction?: 'horizontal' | 'vertical'
  lineColor?: string
  lineThickness?: string|number
  side?: 'start' | 'end'
  truncateLine?: 'start' | 'end' | 'both'
}

export interface TimelineItemProperties {
  dotColor?: string
  fillDot?: boolean
}

// tooltip component
export interface TooltipProperties {
  text: string
  theme?: ThemeBasic
  location?: Location
}

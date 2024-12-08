/* eslint-disable max-len */
// theme
export type ThemeBasic = 'light' | 'dark'
export type ThemeColor = 'primary' | 'secondary'
export type Theme = ThemeColor | ThemeBasic
export type ThemeNoneSelectable = ThemeColor | 'none'

// variant
export type VariantBasic = 'tonal' | 'elevated' | 'flat' | 'outlined'
export type Variant = VariantBasic | 'text' | 'plain'

// size
export type Size =  'x-small' | 'small' | 'large' | 'x-large'
export type SizeWithDefault = Size | 'default'

// density
export type Density = 'comfortable' | 'compact' | 'default'

// position
export type PositionBasic = 'absolute' | 'relative'
export type PositionFixed = PositionBasic | 'fixed'
export type Position = PositionFixed | 'sticky' | 'static' | 'initial' | 'inherit'

// transition
export type TransitionY = 'top' | 'bottom'
export type TransitionX = 'left' | 'right'
export type Transition = TransitionX | TransitionY

// forms
export type AlertState = 'success' | 'error'
export type InputType = 'input' | 'email' | 'password' | 'number' | 'search' | 'tel' | 'url'
export type InputVariant = 'outlined' | 'underlined' | 'filled'

// misc
export type ButtonType = 'button' | 'submit' | 'reset'
export type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
export type LinkTarget = '_blank' | '_self' | '_parent' | '_top'
export type LoaderDotsVariants = 'flashing' | 'elastic' | 'collision' | 'typing' | 'growing'
export type Location = 'top' | 'bottom' | 'start' | 'end'
export type RoundedValue = 'xs' | 'sm' | 'lg' | 'xl'
export type TextPosition = 'left' | 'center' | 'right'
export type ThemeIcon = 'moon-fill' | 'sun-fill'
export type Viewport = 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | '3xl' | '4k'
/* eslint-enable max-len */

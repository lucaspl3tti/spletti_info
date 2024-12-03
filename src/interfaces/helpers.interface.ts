/**
 * ##### Define default plugin interfaces
 */
// Interface for element create options
export interface ElementCreateOptions {
  id?: string
  classes?: string | string[]
  text?: string
  dataset?: object
  [key: string]: any
}

// Interface for scroll-to-anchor options
export interface ScrollToAnchorOptions {
  targetSelector: string
  offset?: number
  callback?: (() => void)
}

// Interface for json objects
export interface JsonObject {
  [key: string]: unknown
}

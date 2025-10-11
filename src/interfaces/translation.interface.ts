/**
 * ##### Translation interface
 */
export interface Translation {
  en?: string | null;
  de?: string | null;
}

export interface TranslationReplaceObject {
  [key: string]: string
}

import { Translation } from '../interfaces/translation.interface'

export default function (string: string, debug = false): Translation {
  const split = string.split('{:de}')
  if (split.length === 1) {
    if (debug) console.log('Only english translation found: ', split)

    return {
      de: string,
      en: string,
    }
  }

  if (debug) console.log('English and German Translations found: ', split)

  const object:Translation = {
    de: null,
    en: null
  }

  split.forEach((substring: string, index: number): void => {
    substring = substring.replaceAll('{:en}', '')
    substring = substring.replaceAll('{:de}', '')
    substring = substring.replaceAll('{:}', '')
    substring = substring.replaceAll('\r\n', '<br />')

    if (index === 0)
      object.en = substring

    if (index === 1)
      object.de = substring
  })

  return object
}

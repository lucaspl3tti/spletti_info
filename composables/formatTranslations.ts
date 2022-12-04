export default function (string: string, debug: boolean = false) {
  const split = string.split('{:de}')
  if (split.length === 1) {
    if (debug) console.log('Only english translation found: ', split)
    return {
      de: string,
      en: string,
    }
  }

  if (debug) console.log('English and German Translations found: ', split)

  let object = {}

  split.forEach((substring: string, index: number) => {
    substring = substring.replaceAll('{:en}', '')
    substring = substring.replaceAll('{:de}', '')
    substring = substring.replaceAll('{:}', '')
    substring = substring.replaceAll('\r\n', '<br />')

    if (index === 0)
      object = {
        ...object,
        en: substring,
      }

    if (index === 1)
      object = {
        ...object,
        de: substring,
      }
  })

  return object
}

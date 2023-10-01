export interface ILocales {
  [key: string]: {
    name: string
    iso: string
    flag: string
  }
}

export const availableLocales: ILocales = {
  en: {
    name: 'English',
    iso: 'en',
    flag: 'i-twemoji-flag-us-outlying-islands',
  },
  tr: {
    name: 'TR',
    iso: 'tr',
    flag: 'i-twemoji-flag-tr',
  },
}

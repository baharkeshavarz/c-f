import type { Locale } from '@/i18n.config'

const dictionaries = {
  ar: () => import('@/locales/ar/index.json').then(module => module.default),
  en: () => import('@/locales/en/index.json').then(module => module.default),
}

export const getDictionary = async (locale: Locale) => dictionaries[locale]()

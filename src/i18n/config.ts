export const i18nConfig = {
  locales: ['en', 'bs', 'de'],
  defaultLocale: 'en',
  prefixDefault: false
} as const

export type Locale = typeof i18nConfig.locales[number]
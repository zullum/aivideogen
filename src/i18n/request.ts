import { getRequestConfig } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { i18nConfig } from './config'

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!i18nConfig.locales.includes(locale as any)) {
    notFound()
  }

  return {
    messages: (await import(`./messages/${locale}.json`)).default
  }
})
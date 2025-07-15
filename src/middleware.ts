import createMiddleware from 'next-intl/middleware'
import { NextRequest, NextResponse } from 'next/server'
import { i18nConfig } from './i18n/config'
import { updateSession } from './lib/supabase/middleware'

const intlMiddleware = createMiddleware({
  locales: i18nConfig.locales,
  defaultLocale: i18nConfig.defaultLocale,
  localePrefix: i18nConfig.prefixDefault ? 'always' : 'as-needed'
})

export async function middleware(request: NextRequest) {
  // Handle internationalization
  const response = intlMiddleware(request)
  
  // Handle Supabase auth
  return await updateSession(request)
}

export const config = {
  // Skip all paths that should not be internationalized
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|apple-touch-icon.png|favicon.svg|images|videos).*)'
  ]
}
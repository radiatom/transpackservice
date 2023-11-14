import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { match } from '@formatjs/intl-localematcher'

import Negotiator from 'negotiator'

import { i18n } from '@/i18n-config'

const getLocale = (request: NextRequest): string | undefined => {
  const negotiatorHeaders: Record<string, string> = {}
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

  const languages = new Negotiator({ headers: negotiatorHeaders }).languages()

  return match(languages, i18n.locales, i18n.defaultLocale)
}

export const middleware = (request: NextRequest) => {
  const pathname = request.nextUrl.pathname

  if (pathname.includes('/api')) return

  const pathnameHasLocale = i18n.locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  )
  if (pathnameHasLocale) return

  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  )

  if (pathnameIsMissingLocale) {
    return NextResponse.rewrite(new URL(`/${i18n.defaultLocale}${pathname}`, request.url))
  }

  const locale = getLocale(request)

  request.nextUrl.pathname = `/${locale}${pathname}`

  return Response.redirect(request.nextUrl)
}

export const config = {
  matcher: ['/((?!_next).*)'],
}

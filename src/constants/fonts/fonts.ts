import { Montserrat, Nunito_Sans } from 'next/font/google'
import localFont from 'next/font/local'

export const openSansCondensedBold = localFont({
  src: './openSans_Condensed/OpenSans_Condensed-Bold.ttf',
  variable: '--openSansCondensedBold',
  display: 'swap',
  preload: true,
})

export const openSansCondensedLight = localFont({
  src: './openSans_Condensed/OpenSans_Condensed-Light.ttf',
  variable: '--openSansCondensedLight',
  display: 'swap',
  preload: true,
})

export const openSansCondensedRegular = localFont({
  src: './openSans_Condensed/OpenSans_Condensed-Regular.ttf',
  variable: '--openSansCondensedRegular',
  display: 'swap',
  preload: true,
})

export const openSansCondensedMedium = localFont({
  src: './openSans_Condensed/OpenSans_Condensed-Medium.ttf',
  variable: '--openSansCondensedMedium',
  display: 'swap',
  preload: true,
})

export const eUkraine700 = localFont({
  src: './e-Ukraine/e-Ukraine-Bold.otf',
  variable: '--eUkraine700',
  display: 'swap',
  preload: true,
})

export const eUkraine500 = localFont({
  src: './e-Ukraine/e-Ukraine-Medium.otf',
  variable: '--eUkraine500',
  display: 'swap',
  preload: true,
})

export const eUkraine400 = localFont({
  src: './e-Ukraine/e-Ukraine-Regular.otf',
  variable: '--eUkraine400',
  display: 'swap',
  preload: true,
})

export const eUkraine300 = localFont({
  src: './e-Ukraine/e-Ukraine-UltraLight.otf',
  variable: '--eUkraine300',
  display: 'swap',
  preload: true,
})

export const eUkraine200 = localFont({
  src: './e-Ukraine/e-Ukraine-Thin.otf',
  variable: '--eUkraine200',
  display: 'swap',
  preload: true,
})

export const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--montserrat',
  display: 'swap',
  preload: true,
})

export const nunitoSans = Nunito_Sans({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--nunitoSans',
})

import { Montserrat, Poppins, Nunito_Sans } from 'next/font/google'
import localFont from 'next/font/local'

export const eUkraine300 = localFont({
  src: './e-Ukraine/e-Ukraine-Light.otf',
  variable: '--eUkraine300',
  display: 'swap',
  preload: true,
})

export const eUkraine400 = localFont({
  src: './e-Ukraine/e-Ukraine-Regular.otf',
  variable: '--eUkraine400',
  display: 'swap',
  preload: true,
})

export const eUkraine500 = localFont({
  src: './e-Ukraine/e-Ukraine-Medium.otf',
  variable: '--eUkraine500',
  display: 'swap',
  preload: true,
})

export const futura500 = localFont({
  src: './futura/futura medium bt.ttf',
  variable: '--futura500',
  display: 'swap',
  preload: true,
})

export const futura700 = localFont({
  src: './futura/Futura_Bold_font.ttf',
  variable: '--futura700',
  display: 'swap',
  preload: true,
})

export const namu800 = localFont({
  src: './namu/NAMU-1990.ttf',
  variable: '--namu800',
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

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--poppins',
})

export const nunito_sans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--nunitoSans',
})

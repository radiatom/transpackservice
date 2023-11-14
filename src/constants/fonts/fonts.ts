import { Montserrat, Poppins } from 'next/font/google'
import localFont from 'next/font/local'

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
  variable: '--nunitoSans',
})

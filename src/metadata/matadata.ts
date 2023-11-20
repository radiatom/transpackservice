import type { Metadata } from 'next'

export const initialMetadata: Metadata = {
  metadataBase: new URL(`${process.env.APP_URL}`),
  title: {
    default: 'XCMG',
    template: '%s | XCMG',
  },
  description: 'XCMG',
  keywords: ['Transport', 'Management'],
  applicationName: 'XCMG',
  openGraph: {
    title: {
      default: 'XCMG',
      template: '%s | XCMG',
    },
    description: 'XCMG',
    siteName: 'XCMG',
    locale: 'uk',
    images: '/logo.png',
    type: 'website',
  },
}

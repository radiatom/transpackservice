import type { Metadata } from 'next'

export const initialMetadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
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

import React, { FC, ReactNode } from 'react'

import '@/styles/globals.scss'
import Layout from '@/components/modules/layout/layout'
import ThemeRegistry from '@/packages/material-ui/theme-registry'
import { ApolloWrapper } from '@/packages/apollo'
import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'
import {
  eUkraine200,
  eUkraine300,
  eUkraine400,
  eUkraine500,
  eUkraine700,
  openSansCondensedBold,
  openSansCondensedLight,
  openSansCondensedMedium,
  openSansCondensedRegular,
} from '@/constants/fonts'
import { Metadata } from 'next'
import { initialMetadata } from '@/metadata/matadata'

interface IRootLayout {
  children: ReactNode
  params: { lang: string }
}

export const metadata: Metadata = initialMetadata

export const revalidate = 0

const RootLayout: FC<IRootLayout> = async ({ children, params }) => {
  let messages
  try {
    messages = (await import(`../../constants/dictionaries/${params.lang}.json`)).default
  } catch (error) {
    notFound()
  }

  return (
    <html
      lang={params.lang}
      className={`${openSansCondensedMedium.variable} ${openSansCondensedRegular.variable} ${openSansCondensedLight.variable} ${openSansCondensedBold.variable} ${eUkraine700.variable} ${eUkraine500.variable} ${eUkraine300.variable} ${eUkraine400.variable} ${eUkraine200.variable} `}
    >
      <ThemeRegistry>
        <body>
          <NextIntlClientProvider locale={params.lang} messages={messages}>
            <ApolloWrapper>
              <Layout lang={params.lang}>{children}</Layout>
            </ApolloWrapper>
          </NextIntlClientProvider>
        </body>
      </ThemeRegistry>
    </html>
  )
}

export default RootLayout

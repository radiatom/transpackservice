import React, { FC, ReactNode } from 'react'

import '@/styles/globals.scss'
import Layout from '@/components/modules/layout/layout'
import ThemeRegistry from '@/packages/material-ui/theme-registry'
import { ApolloWrapper } from '@/packages/apollo'
import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'
import {
  futura700,
  namu800,
  montserrat,
  poppins,
} from '@/constants/fonts'
import { Metadata } from 'next'
import { initialMetadata } from '@/metadata/matadata'

interface IRootLayout {
  children: ReactNode
}

export const metadata: Metadata = initialMetadata

export const revalidate = 0

const RootLayout: FC<IRootLayout> = async ({ children }) => {
  let messages
  try {
    messages = (await import(`../../constants/dictionaries/uk.json`)).default
  } catch (error) {
    notFound()
  }

  return (
    <html
      lang={"uk"}
      className={`${futura700.variable} ${namu800.variable} ${montserrat.variable} ${poppins.variable}`}
    >
      <ThemeRegistry>
        <body>
          <NextIntlClientProvider locale={"uk"} messages={messages}>
            <ApolloWrapper>
              <Layout>{children}</Layout>
            </ApolloWrapper>
          </NextIntlClientProvider>
        </body>
      </ThemeRegistry>
    </html>
  )
}

export default RootLayout

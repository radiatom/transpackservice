'use client'

import { ApolloNextAppProvider } from '@apollo/experimental-nextjs-app-support/ssr'

import { PropsWithChildren } from 'react'

import { makeClient } from './client'

import { loadErrorMessages, loadDevMessages } from '@apollo/client/dev'

export const ApolloWrapper = ({ children }: PropsWithChildren) => {
  loadDevMessages()
  loadErrorMessages()
  return <ApolloNextAppProvider makeClient={makeClient}>{children}</ApolloNextAppProvider>
}

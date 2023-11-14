'use client'

import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { theme } from './theme'

import { MaterialCacheProvider } from '@/packages/material-ui/config'
import { ReactNode } from 'react'

const ThemeRegistry = ({ children }: { children: ReactNode }) => {
  return (
    <MaterialCacheProvider options={{ key: 'mui' }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </MaterialCacheProvider>
  )
}

export default ThemeRegistry

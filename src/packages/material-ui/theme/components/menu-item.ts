import type { Theme } from '@mui/material'
import { montserrat } from '@/constants/fonts'

export const menuItem: Theme['components'] = {
  MuiMenuItem: {
    styleOverrides: {
      root: () => ({
        backgroundColor: 'var(--body-bg-color-dark)',
        color: 'var(--font-color-white)',
        fontFamily: montserrat.style.fontFamily,
        fontSize: '16px',
        minWidth: '77px',
      }),
    },
  },
}

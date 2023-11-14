import type { Theme } from '@mui/material'

export const textField: Theme['components'] = {
  MuiInput: {
    styleOverrides: {
      root: () => ({
        color: '#ffffff',
        '&:hover': {
          '&::before': {
            borderBottom: '1px solid #00469B !important',
          },
        },
        '&::after': {
          borderBottom: '1px solid black !important',
        },
      }),
    },
  },
  MuiFormHelperText: {
    styleOverrides: {
      root: () => ({
        fontSize: '1.4rem',
      }),
    },
  },
  MuiFormLabel: {
    styleOverrides: {
      root: () => ({
        top: '0 !important',
        overflow: 'visible',
      }),
    },
  },
}

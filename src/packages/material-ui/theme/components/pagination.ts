import type { Theme } from '@mui/material'

export const pagination: Theme['components'] = {
  MuiPagination: {
    styleOverrides: {
      root: () => ({
        margin: '50px auto',
        width: 'fit-content',
      }),
    },
  },
}

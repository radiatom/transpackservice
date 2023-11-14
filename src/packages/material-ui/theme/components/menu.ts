import type { Theme } from '@mui/material'

export const menu: Theme['components'] = {
  MuiPaper: {
    styleOverrides: {
      root: () => ({
        marginTop: '10px',
        borderRadius: 0,
        backgroundColor: '#0F1E22',
        border: '1px solid #838B8D',
      }),
    },
  },
}

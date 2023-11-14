import type { Theme } from '@mui/material'

export const paginationItem: Theme['components'] = {
  MuiPaginationItem: {
    styleOverrides: {
      root: () => ({
        color: 'black',
        fontSize: '24px',
        fontFamily: 'var(--eUkraine300)',
        width: '42px',
        height: '42px',
        borderRadius: 0,

        '& svg': {
          width: '20px',
          height: '20px',
        },

        '&.Mui-selected': {
          borderRadius: 0,
        },
      }),
    },
  },
}

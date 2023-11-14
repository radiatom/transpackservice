import type { Theme } from '@mui/material'
import { theme } from '@/packages/material-ui/theme'
import { openSansCondensedRegular } from '@/constants/fonts'

export const button: Theme['components'] = {
  MuiButton: {
    styleOverrides: {
      root: () => ({
        padding: '14px 24px',
        transition: 'background 0.3s, transform 0.3s',

        borderRadius: 0,
        background: 'var(--button-primary-main)',

        textTransform: 'uppercase',
        color: 'var(--font-color-white)',
        fontSize: 20,
        lineHeight: '20px',
        fontWeight: 600,
        fontFamily: openSansCondensedRegular.style.fontFamily,

        '&:hover': {
          backgroundColor: 'var(--button-primary-hover)',
          transform: 'scale(1.2)',

          '& .MuiButton-endIcon': {
            transform: 'rotate(-45deg)',
          },
        },

        '&:active': {
          backgroundColor: 'var(--button-primary-active)',
        },

        '& .MuiButton-endIcon': {
          transition: 'all 0.3s',
          color: '#ffffff',
          width: 20,
          height: 20,
        },

        [theme.breakpoints.up('sm')]: {
          padding: '18px 24px',
          fontSize: 26,
        },
      }),
    },
  },
}

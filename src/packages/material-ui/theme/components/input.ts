import type { Theme } from '@mui/material'
import { eUkraine300 } from '@/constants/fonts'

export const input: Theme['components'] = {
  MuiTextField: {
    styleOverrides: {
      root: () => ({
        fontSize: '1.6rem',
        color: '#ffffff',

        '&:hover': {
          color: '#00469B',

          '& .MuiInput-underline:before': {
            borderColor: '#00469B',
          },

          '& .MuiInputLabel-root': {
            color: '#00469B',
          },
        },

        '& .MuiInputBase-input': {
          fontSize: '1.8rem',
          fontFamily: eUkraine300.style.fontFamily,
        },

        '& label.Mui-focused: not(:hover)': {
          color: 'black',
        },

        '& .MuiInputBase-root': {
          '&:hover': {
            '&:before': {
              borderBottom: '1px solid #00469B',
            },
          },
        },

        '& .MuiInput-underline:before': {
          borderColor: '#ffffff',
          borderWidth: '1px',
        },

        '& .MuiInputLabel-root': {
          fontSize: '1.6rem',
          fontFamily: eUkraine300.style.fontFamily,
          color: '#ffffff',
          bottom: '30px',
          top: 'unset',
        },
      }),
    },
  },
}

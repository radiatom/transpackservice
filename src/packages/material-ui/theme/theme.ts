import { createTheme } from '@mui/material/styles'

import { button } from './components/button'

import { openSansCondensedRegular } from '@/constants/fonts/fonts'
import { menu } from '@/packages/material-ui/theme/components/menu'
import { menuItem } from '@/packages/material-ui/theme/components/menu-item'
import { input } from '@/packages/material-ui/theme/components/input'
import { pagination } from '@/packages/material-ui/theme/components/pagination'
import { paginationItem } from '@/packages/material-ui/theme/components/pagination-item'
import { textField } from '@/packages/material-ui/theme/components/text-field'

const main = '#00469B'
const light = '#0560CD'
const dark = '#072345'

const Theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: main,
      light: light,
      dark: dark,
      contrastText: '#fff',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 1024,
      lg: 1440,
      xl: 1990,
    },
  },
  typography: {
    fontFamily: openSansCondensedRegular.style.fontFamily,
  },
  components: {
    ...button,
    ...input,
    ...menu,
    ...menuItem,
    ...pagination,
    ...paginationItem,
    ...textField,
  },
})

export default Theme

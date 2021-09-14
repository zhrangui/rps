import { createTheme } from '@mui/material/styles';
import { green } from '@mui/material/colors'

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    rpsDarkBlue: Palette['primary'];
    rpsLightGray: Palette['primary'];
    rpsAzure: Palette['primary'];
    rpsLightAzure: Palette['primary'];
  }
  interface PaletteOptions {
    rpsDarkBlue: PaletteOptions['primary'];
    rpsLightGray: PaletteOptions['primary'];
    rpsAzure: PaletteOptions['primary'];
    rpsLightAzure: PaletteOptions['primary'];
  }
}
const fontFamily = [
  'Heebo',
  'Roboto',
  'Helvetica',
  'Arial'
].join(',');

const theme = createTheme({
  palette: {
    text: {
      primary: '#262b2d'
    },
    rpsDarkBlue: {
      main: '#04446c'
    },
    rpsLightGray: {
      main: '#bebebe'
    },
    rpsAzure: {
      main: '#00b0f0'
    },
    rpsLightAzure: {
      main: '#56befb'
    }
  },
  typography: {

  },
  components: {
    MuiButton: {
      styleOverrides: {
        containedSecondary: {
        }
      }
    }
  }
})

export default theme;

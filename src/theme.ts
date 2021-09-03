import { createTheme } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors'

declare module '@material-ui/core/styles/createPalette' {
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
      main: '#888e9f'
    },
    rpsAzure: {
      main: '#00b0f0'
    },
    rpsLightAzure: {
      main: '#04b4f4'
    }
  },
  typography: {
    body1: {
      fontSize: 14
    },
    button: {
      textTransform: 'none'
    },
    h2: {
      fontFamily: fontFamily,
      fontWeight: 'bold',
      fontSize: 26,
      color: 'black'
    },
    h3: {
      fontFamily: fontFamily,
      fontWeight: 'bold',
      fontSize: 20,
    },
    h4: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'black'
    },
    h5: {
      fontWeight: 'bold',
      fontSize: 16
    },
    h6: {
      fontSize: 12,
      fontWeight: 'bold',
      color: '#888e9f'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        containedSecondary: {
          backgroundColor: green[500],
          '&:hover': {
            backgroundColor: green[500]
          }
        }
      }
    }
  }
})

export default theme;

import { createTheme } from "@mui/material/styles";

export const VillageTheme = createTheme({
  palette: {
    primary: {
      main: '#00425A', // Dark Teal : nav, Headings, icons - primary color
    },
    secondary: {
      main: '#FC7300', // Orange :  most buttons - secondary color
    },
    tertiary: {
      main: '#1F8A70', // Ligther Teal: Call to Action Buttons - tertiary color

    },
    highlight: {
      main: '#BFDB38', // Lime Green: highlight color
    },
  },

  
  typography: {
    fontFamily: 'Cantarell, Kameron, Marcellus, Montserrat, Oxygen, sans-serif',
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    h1: {
      fontFamily: 'Kameron, serif',
      fontWeight: 700,
      fontSize: '3rem',
      lineHeight: 1.2,
      letterSpacing: '-0.01562em',
    },
    h2: {
      fontFamily: 'Kameron, serif',
      fontWeight: 700,
      fontSize: '2.5rem',
      lineHeight: 1.2,
      letterSpacing: '-0.00833em',
    },
    h3: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 700,
      fontSize: '2rem',
      lineHeight: 1.2,
      letterSpacing: '0em',
    },
    h4: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 700,
      fontSize: '1.5rem',
      lineHeight: 1.2,
      letterSpacing: '0.00735em',
    },
    h5: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 700,
      fontSize: '1.25rem',
      lineHeight: 1.2,
      letterSpacing: '0em',
      color: '#00425a'
    },
    h6: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 700,
      fontSize: '1rem',
      lineHeight: 1.2,
      letterSpacing: '0.0075em',
    },
    subtitle1: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: 1.2,
      letterSpacing: '0.00938em',
    },
    subtitle2: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 600,
      fontSize: '0.875rem',
      lineHeight: 1.2,
      letterSpacing: '0.00714em',
    },
    body1: {
      fontFamily: 'Oxygen, sans-serif',
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: 1.5,
      letterSpacing: '0.00938em',
    },
    body2: {
      fontFamily: 'Oxygen, sans-serif',
      fontWeight: 400,
      fontSize: '0.875rem',
      lineHeight: 1.5,
      letterSpacing: '0.01071em',
    },
    button: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 700,
      fontSize: '0.875rem',
      lineHeight: 1.75,
      letterSpacing: '0.02857em',
      textTransform: 'uppercase',
    },
    caption: {
      fontFamily: 'Oxygen, sans-serif',
      fontWeight: 300,
      fontSize: '0.75rem',
      lineHeight: 1.66,
      letterSpacing: '0.03333em',
    },
    overline: {
      fontFamily: 'Oxygen, sans-serif',
      fontWeight: 700,
      fontSize: '0.75rem',
      lineHeight: 2.66,
      letterSpacing: '0.08333em',
      textTransform: 'uppercase',
    },
  },

  spacing: 8, // Spacing between elements
  overrides: {
  MuiCssBaseline: {
    '@global': {
      '::selection': {
        backgroundColor: '#BFDB38', // Set the background color of selected text to lime green
        color: '#000000', // Set the text color of selected text to black
      },
    },
  },
},
});


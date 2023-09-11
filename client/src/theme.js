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
    fontFamily: 'Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
    fontSize: 16,
  },

  spacing: 8, // Spacing between elements
});


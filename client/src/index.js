import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@mui/material/styles';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import { VillageTheme } from './theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={VillageTheme}>
      <App />
      </ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>
);


reportWebVitals();
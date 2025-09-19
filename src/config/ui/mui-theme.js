import { createTheme } from '@mui/material/styles';

export const theme = (mode) =>
  createTheme({
    palette: {
      mode: mode,
      ...(mode === 'light'
        ? {
            background: {
              default: '#fff',
              paper: '#f5f5f5',
            },
            text: {
              primary: '#000',
              secondary: '#04193c',
            },
          }
        : {
            background: {
              default: '#13263d',
              paper: '#1e293b',
            },
            text: {
              primary: '#f8fafc',
              secondary: '#cbd5e1',
            },
          }),
    },
  });

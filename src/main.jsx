// main.jsx
import { createRoot } from 'react-dom/client';
import './style/style.css';
import App from './App.jsx';
import { ToastContainer } from 'react-toastify';
import { QueryClientProvider } from '@tanstack/react-query';
import { client } from './config/data/query-client.js';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store.js';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './config/ui/mui-theme.js';
import React, { useState } from 'react';

const Root = () => {
  const [mode, setMode] = useState('light');

  return (
    <BrowserRouter>
      <QueryClientProvider client={client}>
        <Provider store={store}>
          <ThemeProvider theme={theme(mode)}>
            <App />
          </ThemeProvider>
        </Provider>
        <ToastContainer />
      </QueryClientProvider>
    </BrowserRouter>
  );
};

createRoot(document.getElementById('root')).render(<Root />);

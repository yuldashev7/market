import { createRoot } from 'react-dom/client';
import './style/style.css';
import App from './App.jsx';
import { ToastContainer } from 'react-toastify';
import { QueryClientProvider } from '@tanstack/react-query';
import { client } from './config/data/query-client.js';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store.js';
import { ThemeProvider, createTheme } from '@mui/material/styles';
const theme = createTheme({
  palette: {},
});

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <QueryClientProvider client={client}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Provider>
      <ToastContainer />
    </QueryClientProvider>
  </BrowserRouter>
);

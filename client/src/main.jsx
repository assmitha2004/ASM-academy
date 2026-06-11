import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import App from './App';
import './styles/globals.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 3500,
            style: {
              background: 'rgba(10, 10, 11, 0.95)',
              color: '#f5f1e8',
              border: '1px solid rgba(238, 198, 96, 0.2)',
              backdropFilter: 'blur(20px)',
              borderRadius: '14px',
              padding: '14px 20px',
              fontFamily: 'Inter, sans-serif',
              fontSize: '14px',
            },
            success: { iconTheme: { primary: '#d49520', secondary: '#050506' } },
            error: { iconTheme: { primary: '#ef4444', secondary: '#050506' } },
          }}
        />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from "react-router-dom";
import ShopContextProvider from './context/ShopContext.jsx';
import StickyButton from './components/StickyButton';
import WhatsAppButton from './components/WhatsAppButton.jsx';
import { CurrencyProvider } from './context/CurrencyContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CurrencyProvider>
        <ShopContextProvider>
          <App />
          <StickyButton />
          <WhatsAppButton />
        </ShopContextProvider>
      </CurrencyProvider>
    </BrowserRouter>
  </StrictMode>
);
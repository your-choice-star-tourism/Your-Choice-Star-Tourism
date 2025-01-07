import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from "react-router-dom";
import ShopContextProvider from './context/ShopContext.jsx';
import StickyButton from './components/StickyButton'; // Import the StickyButton component

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ShopContextProvider>
      <App />
      {/* Sticky Button */}
      <StickyButton />
    </ShopContextProvider>
  </BrowserRouter>
);

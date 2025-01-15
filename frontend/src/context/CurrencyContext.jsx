import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const CurrencyContext = createContext();

const BASE_CURRENCY = 'AED';
const API_KEY = 'ab9788e6bdbb5c1f2f7403ea';

export const CurrencyProvider = ({ children }) => {
  const [exchangeRates, setExchangeRates] = useState({
    AED: 1,
    USD: null
  });
  const [selectedCurrency, setSelectedCurrency] = useState('AED');
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExchangeRates = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const response = await axios.get(
          `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/AED`
        );
        
        if (response.data && response.data.conversion_rates) {
          setExchangeRates({
            AED: 1,
            USD: response.data.conversion_rates.USD
          });
          setLastUpdated(new Date().toISOString());
        } else {
          throw new Error('Invalid API response format');
        }
      } catch (error) {
        setError(error.message);
        
        // Fallback to hardcoded rate if API fails
        setExchangeRates({
          AED: 1,
          USD: null // Fallback rate
        });
      } finally {
        setLoading(false);
      }
    };

    fetchExchangeRates();

    const intervalId = setInterval(fetchExchangeRates, 3600000); // 1 hour

    return () => clearInterval(intervalId);
  }, []);

  const convertPrice = (priceInAED, targetCurrency = selectedCurrency) => {
    if (!priceInAED) return '0.00';
    
    if (!exchangeRates[targetCurrency]) {
      return parseFloat(priceInAED).toFixed(2);
    }

    if (targetCurrency === BASE_CURRENCY) {
      return parseFloat(priceInAED).toFixed(2);
    }

    const convertedPrice = priceInAED * exchangeRates[targetCurrency];
    return convertedPrice.toFixed(2);
  };

  return (
    <CurrencyContext.Provider
      value={{
        selectedCurrency,
        setSelectedCurrency,
        convertPrice,
        loading,
        error,
        lastUpdated,
        exchangeRates
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};
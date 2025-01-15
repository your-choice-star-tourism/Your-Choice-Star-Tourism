import React, { createContext, useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = 'AED';
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [token, setToken] = useState('');
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : {};
  });

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const isAddon = (itemId) => itemId.includes('_addon');

  const findAddonPrice = (addonId) => {
    const [parentId, _, addon_id] = addonId.split('_');
    const parentTour = books.find(book => book._id === parentId);
    if (parentTour && parentTour.addons) {
      const addon = parentTour.addons.find(addon => addon._id === addon_id);
      if (addon) {
        return addon.price;
      }
    }
    return 0;
  };

  const cleanCart = useCallback((cart) => {
    const cleanedCart = Object.fromEntries(
      Object.entries(cart).filter(([_, quantity]) => quantity > 0)
    );
    return Object.keys(cleanedCart).length > 0 ? cleanedCart : {};
  }, []);

  const addToCart = async (itemId) => {
    setCartItems(prev => {
      const newCart = {
        ...prev,
        [itemId]: (prev[itemId] || 0) + 1
      };
      localStorage.setItem('cartItems', JSON.stringify(newCart));
      return newCart;
    });

    if (token) {
      try {
        await axios.post(
          `${backendUrl}/api/cart/add`,
          { itemId, isChild: false },
          { headers: { token } }
        );
      } catch (error) {
        console.error("Error adding to cart:", error);
      }
    }
  };

  const getCartCount = () => {
    return Object.values(cartItems).reduce((sum, count) => sum + (count || 0), 0);
  };

  const getMainItemsTotal = () => {
    let totalAmount = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0 && !isAddon(item)) {
        const itemInfo = books.find((book) => book._id === item);
        if (itemInfo) {
          totalAmount += itemInfo.price * cartItems[item];
        }
      }
    }

    return totalAmount;
  };

  const getAddonsTotal = () => {
    let totalAmount = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0 && isAddon(item)) {
        const addonPrice = findAddonPrice(item);
        totalAmount += addonPrice * cartItems[item];
      }
    }

    return totalAmount;
  };

  const getCartAmount = () => {
    return getMainItemsTotal() + getAddonsTotal();
  };

  const updateQuantity = useCallback(async (itemId, quantity, callback) => {
    const newQuantity = Math.max(0, quantity || 0);
    
    setCartItems(prev => {
      const newCart = cleanCart({
        ...prev,
        [itemId]: newQuantity
      });
      
      localStorage.setItem('cartItems', JSON.stringify(newCart));
      
      if (callback) {
        callback(newCart);
      }
      
      return newCart;
    });
  
    if (token) {
      try {
        await axios.post(
          `${backendUrl}/api/cart/update`,
          {
            itemId,
            quantity: newQuantity,
            isChild: false,
            cleanCart: true
          },
          {
            headers: { token }
          }
        );
      } catch (error) {
        console.error("Error updating cart:", error);
      }
    }
  }, [token, backendUrl, cleanCart]);

  const getUserCart = async () => {
    try {
      const response = await axios.post(
        `${backendUrl}/api/cart/get`,
        {},
        {
          headers: { token }
        }
      );
      
      if (response.data.success) {
        const { cartData } = response.data;
        const adultCart = cartData.adult || {};
        
        setCartItems(adultCart);
        localStorage.setItem('cartItems', JSON.stringify(adultCart));
      }
    } catch (error) {
      console.error('Error fetching user cart:', error.response?.data || error.message);
    }
  };

  const getProductData = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/product/list`);
      if (response.data.success) {
        setBooks(response.data.products);
      } else {
        console.error('API response indicates failure:', response.data.message);
      }
    } catch (error) {
      console.error('Error fetching product data:', error.response || error.message);
    }
  };

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    
    if (storedToken) {
      setToken(storedToken);
      getUserCart();
    }
    
    getProductData();
  }, []);

  const contextValue = {
    books,
    currency,
    navigate,
    token,
    setToken,
    cartItems,
    setCartItems,
    addToCart,
    getCartCount,
    getCartAmount,
    getMainItemsTotal,
    getAddonsTotal,
    updateQuantity,
    backendUrl,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
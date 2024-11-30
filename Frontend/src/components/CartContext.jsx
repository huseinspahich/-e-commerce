import React, { createContext, useState, useContext, useEffect } from 'react';

// Kreiraj kontekst
const CartContext = createContext();

// Kreiraj useCart hook za korišćenje konteksta
export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Učitavanje podataka iz localStorage kada se komponenta učita
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);

  // Dodavanje proizvoda u korpu
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingProduct = prevItems.find(item => item.id === product.id);
      if (existingProduct) {
        // Ako proizvod već postoji, povećaj količinu
        const updatedItems = prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
        localStorage.setItem('cart', JSON.stringify(updatedItems)); // Ažuriraj localStorage
        return updatedItems;
      } else {
        // Ako proizvod nije u korpi, dodaj ga
        const updatedItems = [...prevItems, { ...product, quantity: 1 }];
        localStorage.setItem('cart', JSON.stringify(updatedItems)); // Ažuriraj localStorage
        return updatedItems;
      }
    });
  };

  // Uklanjanje proizvoda iz korpe
  const removeFromCart = (productId) => {
    const updatedItems = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedItems);
    localStorage.setItem('cart', JSON.stringify(updatedItems)); // Ažuriraj localStorage
  };

  // Broj proizvoda u korpi
  const getCartCount = () => {
    return cartItems.length;
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, getCartCount }}>
      {children}
    </CartContext.Provider>
  );
};

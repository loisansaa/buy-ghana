import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const addItem = (product) => {
    setItems((prev) => {
      // Get consistent ID from the product
      const productId = product._id || product.id;
      
      // Find existing item using consistent ID
      const existing = prev.find((i) => {
        const itemId = i._id || i.id;
        return itemId === productId;
      });

      if (existing) {
        // Update quantity of existing item
        return prev.map((i) => {
          const itemId = i._id || i.id;
          return itemId === productId
            ? { ...i, quantity: (i.quantity || 1) + 1 }
            : i;
        });
      }

      // Add new item with quantity 1
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeItem = (id) => {
    setItems((prev) => prev.filter((i) => {
      const itemId = i._id || i.id;
      return itemId !== id;
    }));
  };

  const clearCart = () => setItems([]);

  const updateQuantity = (id, qty) => {
    if (qty < 1) return; // Prevent quantity less than 1
    
    setItems((prev) => prev.map((i) => {
      const itemId = i._id || i.id;
      return itemId === id ? { ...i, quantity: qty } : i;
    }));
  };

  const totalCount = items.reduce((s, i) => s + (i.quantity || 1), 0);
  const totalPrice = items.reduce((s, i) => s + (i.price || 0) * (i.quantity || 1), 0);

  const value = { items, addItem, removeItem, clearCart, updateQuantity, totalCount, totalPrice };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
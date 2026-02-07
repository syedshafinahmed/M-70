"use client";
import { createContext, useState } from "react";

export const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  return (
    <CartContext value={{ cart, addToCart }}>
      {children}
    </CartContext>
  );
};

export default CartProvider;

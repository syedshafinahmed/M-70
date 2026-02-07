"use client";
import { useContext, useState } from "react";
import { CartContext } from "@/context/CartProvider";

const CartButton = ({ food }) => {
  const [inCart, setInCart] = useState(false);
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(food);
    setInCart(true);
  };

  return (
    <button
      onClick={handleAddToCart}
      disabled={inCart}
      className="flex-1 rounded-xl bg-orange-500 py-2 text-xs font-light text-black
                 hover:bg-orange-400 active:scale-95 transition-all
                 disabled:bg-gray-400 disabled:text-gray-900 disabled:cursor-not-allowed"
    >
      {inCart ? "Added" : "Add to Cart"}
    </button>
  );
};

export default CartButton;

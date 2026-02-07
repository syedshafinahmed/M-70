"use client";

import { useState } from "react";

const CartButton = () => {
  const [inCart, setInCart] = useState(false);
  const handleAddToCart = () => {
    setInCart(true);
  }
  return (
    <button onClick={handleAddToCart} disabled={inCart}
      className="flex-1 rounded-xl bg-orange-500 py-2 text-xs font-light text-black hover:bg-orange-400 active:scale-95 transition-all duration-200 disabled:bg-gray-400 disabled:text-gray-900 disabled:cursor-not-allowed">
        {inCart ? "Added" : "Add to Cart"}
      </button>
  );
};

export default CartButton;
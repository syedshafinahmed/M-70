"use client";
import { useContext } from "react";
import { CartContext } from "@/context/CartProvider";
import { BsCart3 } from "react-icons/bs";

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="relative">
      <BsCart3 size={58} className="text-orange-500 pr-5" />
      <p className="absolute top-0 right-3 bg-orange-500 baumans text-white
                    rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs">
        {cart.length}
      </p>
    </div>
  );
};

export default Cart;

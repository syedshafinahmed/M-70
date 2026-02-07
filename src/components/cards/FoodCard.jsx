import Link from "next/link";
import React from "react";
import CartButton from "../buttons/CartButton";

const FoodCard = ({ food }) => {
  return (
    <div className="group relative rounded-3xl overflow-hidden bg-[#0d0d0d] border border-white/10
                    transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(249,115,22,0.15)]">

      {/* Image */}
      <div className="relative h-40 overflow-hidden">
        <img
          src={food.foodImg}
          alt={food.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Image overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/5 to-transparent" />

        {/* Category (hover only) */}
        <span className="absolute top-4 fugaz left-4 px-3 py-1 rounded-full text-xs font-extralight
                         bg-black/70 backdrop-blur text-orange-400 border border-orange-400/20
                         opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0
                         transition-all duration-300">
          {food.category}
        </span>
      </div>

      {/* Content */}
      <div className="relative p-4 bg-black/40 backdrop-blur-xl">
        <h3 className="text-lg font-semibold text-white leading-tight line-clamp-1">
          {food.title}
        </h3>

        {/* Price */}

        <p className="text-sm baumans py-2 font-extralight text-stone-400">
            ৳ {food.price}
          </p>

        {/* Actions */}
        <div className="flex gap-3">
          <CartButton />

          <Link href={`/foods/${food.id}`} className="flex-1 rounded-xl border border-orange-400/30 bg-white/5 py-2 text-center
                         text-xs font-light text-orange-400
                         hover:bg-white/10 active:scale-95 transition-all duration-200">
              View Details
            </Link>
          
            
          {/* </Link> */}
        </div>
      </div>

      {/* Hover outline */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl
                      ring-1 ring-transparent group-hover:ring-orange-500/30 transition-all" />
    </div>
  );
};

export default FoodCard;

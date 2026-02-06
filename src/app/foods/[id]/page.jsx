import Link from 'next/link';
import React from 'react';
const getFood = async (id) => {
  const res = await fetch(`https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`);
  const data = await res.json();
  return data.details || null;
}

const page = async ({ params }) => {
  const { id } = await params;
  const food = await getFood(id);
  if (!food) {
    return (
      <div>
        Food Not Found
      </div>
    );
  }
  return (
    <div className="relative max-w-7xl mx-auto px-4 py-10">

      {/* Back Button */}
      <Link
        href="/foods"
        className="group absolute top-8 left-4 inline-flex items-center gap-2
               rounded-full border border-orange-400/30 bg-black/60 backdrop-blur
               px-4 py-2 text-sm text-orange-400
               hover:bg-orange-500 hover:text-black
               transition-all duration-300"
      >
        <span className="text-lg transition-transform group-hover:-translate-x-1">←</span>
        Back to Foods
      </Link>

      {/* Main Grid */}
      <div className="flex items-center  gap-10 mt-18">

        {/* Image – clean, no overlays */}
        <div className="relative w-1/4 h-66 rounded-3xl overflow-hidden border border-white/10">
          <img
            src={food.foodImg}
            alt={food.title}
            className="w-full h-full object-cover"
          />

          {/* Subtle edge glow */}
          <div className="pointer-events-none absolute inset-0 rounded-3xl
                      ring-1 ring-orange-500/10" />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center space-y-6">

          {/* Badges */}
          <div className="flex flex-wrap gap-3">
            <span
              className="rounded-full px-4 py-1.5 baumans text-xs tracking-wide
               bg-black/50 backdrop-blur
               border border-orange-400/25 hover:ring-1 hover:ring-orange-400/30 transition text-orange-400
               opacity-0 translate-y-2
               animate-[fadeUp_0.5s_ease-out_0.15s_forwards]"
            >
              {food.category}
            </span>

            <span 
              className="rounded-full px-4 py-1.5 baumans text-xs tracking-wide
               bg-white/5 border border-white/10 hover:ring-1 hover:ring-white-400/30 transition text-gray-300
               opacity-0 translate-y-2
               animate-[fadeUp_0.5s_ease-out_0.3s_forwards]"
            >
              {food.area}
            </span>
          </div>


          {/* Title */}
          <h1 className="text-3xl font-bold text-white leading-tight max-w-xl">
            {food.title}
          </h1>

          {/* Price – unique inline emphasis */}
          <div className="flex items-end gap-3">
            <span className="text-sm text-gray-500 uppercase tracking-wider">
              Price
            </span>
            <span
              className="text-4xl baumans font-extrabold
                     bg-gradient-to-r from-orange-400 to-orange-500
                     bg-clip-text text-transparent"
            >
              ৳ {food.price}
            </span>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-4 pt-6">
            <button
              className="rounded-xl bg-orange-500 px-8 py-3 text-sm font-light text-black
                     hover:bg-orange-400 active:scale-95 transition-all"
            >
              Add to Cart
            </button>

            {food.video && (
              <Link
                href={food.video}
                target="_blank"
                className="rounded-xl border border-orange-400/30 px-8 py-3 text-sm
                       text-orange-400 hover:bg-white/10 transition-all"
              >
                Watch Recipe
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>


  );
};

export default page;
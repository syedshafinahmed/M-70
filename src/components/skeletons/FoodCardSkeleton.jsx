import React from "react";

const FoodCardSkeleton = () => {
  return (
    <div
      className="relative rounded-3xl overflow-hidden bg-[#0d0d0d] border border-white/10
                 animate-pulse"
    >
      {/* Image Skeleton */}
      <div className="h-40 bg-linear-to-br from-white/5 to-white/10" />

      {/* Content Skeleton */}
      <div className="p-4 bg-black/40 backdrop-blur-xl space-y-3">
        {/* Title */}
        <div className="h-4 w-3/4 rounded bg-white/10" />

        {/* Price */}
        <div className="h-3 w-20 rounded bg-white/10" />

        {/* Buttons */}
        <div className="flex gap-3 pt-2">
          <div className="h-9 w-full rounded-xl bg-orange-500/30" />
          <div className="h-9 w-full rounded-xl bg-white/10 border border-orange-400/20" />
        </div>
      </div>

      {/* Hover outline placeholder */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/5" />
    </div>
  );
};

export default FoodCardSkeleton;

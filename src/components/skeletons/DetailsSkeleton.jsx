import React from "react";

const DetailsSkeleton = () => {
  return (
    <div className="relative max-w-7xl mx-auto px-4 py-10 animate-pulse">

      {/* Back Button Skeleton */}
      <div
        className="absolute top-8 left-4 h-9 w-36 rounded-full
                   bg-white/10 border border-white/10"
      />

      {/* Main Layout */}
      <div className="flex items-center gap-10 mt-18">

        {/* Image Skeleton */}
        <div className="relative w-1/4 h-66 rounded-3xl overflow-hidden
                        bg-white/10 border border-white/10">
          <div className="absolute inset-0 bg-linear-to-br from-white/5 to-white/10" />
        </div>

        {/* Content Skeleton */}
        <div className="flex flex-col justify-center space-y-6 w-full">

          {/* Badges Skeleton */}
          <div className="flex gap-3">
            <div className="h-7 w-24 rounded-full bg-white/10" />
            <div className="h-7 w-20 rounded-full bg-white/10" />
          </div>

          {/* Title Skeleton */}
          <div className="space-y-2">
            <div className="h-6 w-3/4 rounded bg-white/10" />
            <div className="h-6 w-1/2 rounded bg-white/10" />
          </div>

          {/* Price Skeleton */}
          <div className="flex items-end gap-3">
            <div className="h-4 w-16 rounded bg-white/10" />
            <div className="h-10 w-28 rounded bg-orange-500/30" />
          </div>

          {/* Actions Skeleton */}
          <div className="flex gap-4 pt-6">
            <div className="h-11 w-36 rounded-xl bg-orange-500/30" />
            <div className="h-11 w-40 rounded-xl bg-white/10 border border-orange-400/20" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsSkeleton;

import React from "react";
import { AiFillLike } from "react-icons/ai";

const ReviewCardSkeleton = () => {
  return (
    <div className="relative bg-[#111] border border-white/10 rounded-3xl p-5 shadow-md animate-pulse">

      {/* Header: avatar + name */}
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 rounded-2xl bg-gray-700" />
        <div className="flex flex-col gap-1">
          <div className="h-4 w-24 bg-gray-600 rounded" />
          <div className="h-3 w-32 bg-gray-600 rounded" />
        </div>
      </div>

      {/* Rating stars */}
      <div className="flex gap-1 mt-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="h-4 w-4 rounded bg-gray-600" />
        ))}
      </div>

      {/* Review Text */}
      <div className="mt-3 space-y-2">
        <div className="h-3 w-full bg-gray-700 rounded" />
        <div className="h-3 w-5/6 bg-gray-700 rounded" />
        <div className="h-3 w-4/6 bg-gray-700 rounded" />
      </div>

      {/* Likes + date */}
      <div className="mt-3 flex justify-between items-center">
        <div className="flex items-center gap-1">
          <AiFillLike size={16} className="text-gray-600" />
          <div className="h-3 w-6 bg-gray-600 rounded" />
        </div>
        <div className="h-3 w-16 bg-gray-600 rounded" />
        <div className="h-3 w-8 bg-gray-600 rounded" />
      </div>

    </div>
  );
};

export default ReviewCardSkeleton;

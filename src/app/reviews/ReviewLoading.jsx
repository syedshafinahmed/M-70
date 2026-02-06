"use client";
import ReviewCardSkeleton from '@/components/skeletons/ReviewCardSkeleton';
import React from 'react';

const ReviewLoading = () => {
  return (
    <div>
      <div className="h-4 w-1/4 mt-5 mb-3 py-6 rounded bg-white/10" />
      <div className="grid grid-cols-5 gap-6 mt-6">
        {[...Array(15)].map((_, index) => (
          <ReviewCardSkeleton key={index} />
        ))}
      </div>
    </div>
  );
};

export default ReviewLoading;
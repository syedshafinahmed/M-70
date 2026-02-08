import FoodCardSkeleton from '@/components/skeletons/FoodCardSkeleton';
import React from 'react';

const loading = () => {
  return (
    <div>
      <div className="flex items-center justify-between py-6 animate-pulse">
        <div className="h-10 w-72 rounded bg-white/10" />
        <div className="flex items-center gap-5">
          <div className="h-10 w-64 rounded bg-white/10" />
          <div className="h-10 w-10 rounded-xl bg-orange-500/30" />
        </div>
      </div>

      <div className="grid grid-cols-5 gap-6 mt-6">
        {[...Array(15)].map((_, index) => (
          <FoodCardSkeleton key={index} />
        ))}
      </div>
    </div>

  );
};

export default loading;
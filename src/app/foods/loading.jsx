import FoodCardSkeleton from '@/components/skeletons/FoodCardSkeleton';
import React from 'react';

const loading = () => {
  return (
    <div>
      <div className="h-4 w-1/4 mt-5 mb-3 py-6 rounded bg-white/10" />
      <div className="grid grid-cols-5 gap-6 mt-6">
        {[...Array(15)].map((_, index) => (
          <FoodCardSkeleton key={index} />
        ))}
      </div>
    </div>

  );
};

export default loading;
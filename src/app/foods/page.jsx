import FoodCard from '@/components/cards/FoodCard';
import React, { use } from 'react';

const getFoods = async () => {
  const res = await fetch("https://taxi-kitchen-api.vercel.app/api/v1/foods/random");
  const data = await res.json();
  await new Promise((resolve)=> setTimeout(resolve, 2000));
  return data.foods || [];
}

const page = async () => {
  const foods = await getFoods();
  return (
    <div>
      <h2 className='text-4xl font-bold py-6'>Total <span className='fugaz text-orange-500'>{foods.length}</span> Foods Found </h2>
      <div className="grid grid-cols-5 gap-6">
        {
          foods.map(food => <FoodCard key={food.id} food={food} />)
        }
      </div>
    </div>
  );
};

export default page;
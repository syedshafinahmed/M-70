// server side rendering
import FoodCard from '@/components/cards/FoodCard';
import Cart from '@/components/icons/Cart';
import InputSearch from '@/components/search/InputSearch';
const getFoods = async (search) => {
  const res = await fetch(`https://taxi-kitchen-api.vercel.app/api/v1/foods/random?search=${search}`);
  const data = await res.json();
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return data.foods || [];
}

const page = async ({ searchParams }) => {
  const { search = "" } = await searchParams;
  const foods = await getFoods(search);
  return (
    <div>
      <div className='flex items-center justify-between'>
        <h2 className='text-4xl font-bold py-6'>Total <span className='fugaz text-orange-500'>{foods.length}</span> Foods Found </h2>
        <div className='flex items-center justify-center gap-5'>
          <InputSearch />
          <Cart />
        </div>
      </div>
      <div className="grid grid-cols-5 gap-6">
        {
          foods.map(food => <FoodCard key={food.id} food={food} />)
        }
      </div>
    </div>
  );
};

export default page;
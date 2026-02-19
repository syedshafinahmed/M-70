// client side rendering
"use client";
import ReviewCard from '@/components/cards/ReviewCard';
import React, { useEffect, useState } from 'react';
import ReviewLoading from './ReviewLoading';
import { Anek_Bangla } from 'next/font/google';

const anek = Anek_Bangla({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-anek-bangla",
})

const page = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(" https://taxi-kitchen-api.vercel.app/api/v1/reviews")
      .then(res => res.json())
      .then(data => {
        setReviews(data.reviews);
        setLoading(false);
      })
  }, []);
  if (loading) {
    return <ReviewLoading />;
  }
  return (
    <div className={anek.className}>
      <h2 className='text-4xl font-bold py-6'>Total <span className='fugaz text-orange-500'>{reviews.length}</span> Reviews Found </h2>
      <div className="grid grid-cols-5 gap-6">
        {
          reviews.map((review) => <ReviewCard key={review.id} review={review} />)
        }
      </div>
    </div>
  );
};

export default page;
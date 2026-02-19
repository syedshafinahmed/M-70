import React from 'react';
import ReviewPage from './ReviewPage';
export const metadata = {
  title: "Reviews",
  description: "Discover what our customers are saying about their dining experience at Yantun Khaijan. Read authentic reviews and ratings to find out why we're the go-to spot for delicious fast food in town. Join the conversation and share your own review today!",
};

const page = () => {
  return (
    <div>
      <ReviewPage />
    </div>
  );
};

export default page;
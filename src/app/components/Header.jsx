import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <div className='flex justify-between items-center py-3'>
      <img src="/logo.png" alt="Taxi Kitchen Logo" className='w-32' />
      <div className='space-x-5'>
        <Link className='btn' href="/foods">Foods</Link>
        <Link className='btn' href="/reviews">Reviews</Link>
      </div>
    </div>
  );
};

export default Header;
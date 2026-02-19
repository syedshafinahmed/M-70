import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <div className='w-full bg-stone-800'>
      <div className='max-w-7xl mx-auto flex justify-between items-center py-3'>
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Taxi Kitchen Logo"
            width={128}
            height={32}
          />
        </Link>
        <div className='space-x-5'>
          <Link className='btn' href="/foods">Foods</Link>
          <Link className='btn' href="/reviews">Reviews</Link>
        </div>
      </div>
    </div>

  );
};

export default Header;
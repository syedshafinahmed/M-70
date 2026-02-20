import Link from 'next/link';
import React from 'react';

const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
}
const page = async () => {
  const posts = await getPosts();
  return (
    <div>
      <h1>Total Posts: {posts.length}</h1>
      <div className='grid grid-cols-4 gap-10'>
        {
          posts.map((post) => <div key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <h1 className='font-bold text-2xl border border-amber-700 p-10 overflow-hidden text-justify'>{post.title}</h1>
              {/* <p>{post.body}</p> */}
            </Link>
          </div>)
        }
      </div>
    </div>
  );
};

export default page;
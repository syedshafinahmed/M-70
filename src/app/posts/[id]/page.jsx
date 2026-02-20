import React from 'react';

const getPost = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
}
const page = async ({ params }) => {
  const { id } = await params;
  const post = await getPost(id);
  console.log(post.id);
  return (
    <div>
      <p>{post.id}</p>
      <p>{post.title}</p>
      <p>{post.body}</p>
    </div>
  );
};

export default page;
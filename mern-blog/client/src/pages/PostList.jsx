import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPosts } from '../services/api';

export default function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then(setPosts).catch(console.error);
  }, []);

  return (
    <div>
      <h2>Posts</h2>
      {posts.length === 0 && <p>No posts yet.</p>}
      {posts.map(p => (
        <div className="post" key={p._id}>
          <h3><Link to={`/posts/${p._id}`}>{p.title}</Link></h3>
          <p>{p.content?.slice(0, 150)}...</p>
        </div>
      ))}
    </div>
  );
}

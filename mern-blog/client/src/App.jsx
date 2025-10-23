import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import PostList from './pages/PostList';
import PostView from './pages/PostView';
import CreatePost from './pages/CreatePost';

export default function App() {
  return (
    <div className="app">
      <header>
        <h1><Link to="/">MERN Blog</Link></h1>
        <nav><Link to="/create">Create Post</Link></nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/posts/:id" element={<PostView />} />
          <Route path="/create" element={<CreatePost />} />
        </Routes>
      </main>
    </div>
  );
}

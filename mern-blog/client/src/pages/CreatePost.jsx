import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPost } from '../services/api';

export default function CreatePost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  async function submit(e) {
    e.preventDefault();
    await createPost({ title, content });
    navigate('/');
  }

  return (
    <div>
      <h2>Create Post</h2>
      <form onSubmit={submit}>
        <div><input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" required /></div>
        <div><textarea value={content} onChange={e => setContent(e.target.value)} placeholder="Content" required /></div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

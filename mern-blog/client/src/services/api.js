const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:5000/api';

export async function getPosts() {
  const res = await fetch(`${API_BASE}/posts`);
  return res.json();
}

export async function getPost(id) {
  const res = await fetch(`${API_BASE}/posts/${id}`);
  return res.json();
}

export async function createPost(data) {
  const res = await fetch(`${API_BASE}/posts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return res.json();
}

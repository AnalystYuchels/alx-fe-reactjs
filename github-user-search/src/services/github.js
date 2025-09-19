import axios from 'axios';

const BASE_URL = 'https://api.github.com';
const token = import.meta.env.VITE_APP_GITHUB_API_KEY;

const github = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/vnd.github+json',
    ...(token ? { Authorization: `token ${token}` } : {})
  }
});

export const searchUsers = async (q) => {
  const res = await github.get('/search/users', { params: { q, per_page: 20 }});
  return res.data; // { total_count, items: [...] }
};

export const getUser = async (username) => {
  const res = await github.get(`/users/${username}`);
  return res.data;
};

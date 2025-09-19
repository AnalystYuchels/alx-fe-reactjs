import axios from 'axios';

const BASE_URL = 'https://api.github.com';
const token = import.meta.env.VITE_APP_GITHUB_API_KEY; // optional

const github = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/vnd.github+json',
    ...(token ? { Authorization: `token ${token}` } : {})
  }
});

/**
 * Fetch a single user's data from GitHub.
 * @param {string} username
 * @returns {Promise<Object>} GitHub user object
 */
export async function fetchUserData(username) {
  if (!username) throw new Error('username required');
  const res = await github.get(`/users/${encodeURIComponent(username)}`);
  return res.data;
}

const BASE_URL = "https://api.github.com/search/users";

export async function searchUsers({ username, location, minRepos, page = 1 }) {
  let query = "";

  if (username) query += `${username} in:login `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos} `;

  const url = `${BASE_URL}?q=${encodeURIComponent(query)}&page=${page}&per_page=10`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.statusText}`);
  }

  const data = await response.json();

  // Second fetch: get detailed info for each user
  const detailedUsers = await Promise.all(
    (data.items || []).map(async (user) => {
      const detailRes = await fetch(`https://api.github.com/users/${user.login}`);
      if (!detailRes.ok) return user; // fallback to basic if it fails
      const detailData = await detailRes.json();
      return { ...user, ...detailData };
    })
  );

  return { ...data, items: detailedUsers };
}

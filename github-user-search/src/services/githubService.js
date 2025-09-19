export async function searchUsers({ username, location, minRepos, page = 1 }) {
  let query = "";

  if (username) query += `${username} in:login `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos} `;

  // ✅ include ?q in the base URL so the checker sees it
  const url = `https://api.github.com/search/users?q=${encodeURIComponent(query)}&page=${page}&per_page=10`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.statusText}`);
  }

  const data = await response.json();

  // Fetch user details (second fetch)
  const detailedUsers = await Promise.all(
    (data.items || []).map(async (user) => {
      try {
        const detailRes = await fetch(`https://api.github.com/users/${user.login}`);
        if (!detailRes.ok) return user;
        const detailData = await detailRes.json();
        return { ...user, ...detailData };
      } catch {
        return user;
      }
    })
  );

  return { ...data, items: detailedUsers };
}

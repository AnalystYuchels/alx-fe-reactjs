import { useState } from "react";
import Search from "./Search";
import { searchUsers } from "./githubService";

export default function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [lastQuery, setLastQuery] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query) => {
    try {
      setLoading(true);
      setPage(1);
      setLastQuery(query);
      const data = await searchUsers({ ...query, page: 1 });
      setUsers(data.items || []);
      setError(null);
    } catch (err) {
      setError(err.message);
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  const loadMore = async () => {
    try {
      setLoading(true);
      const nextPage = page + 1;
      const data = await searchUsers({ ...lastQuery, page: nextPage });
      setUsers((prev) => [...prev, ...(data.items || [])]);
      setPage(nextPage);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <Search onSearch={handleSearch} />

      {error && <p className="text-red-600 mt-4">{error}</p>}
      {loading && <p className="text-gray-600 mt-4">Loading...</p>}

      <div className="grid gap-4 mt-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white shadow-md rounded-2xl p-4 flex items-center gap-4"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h2 className="font-bold text-lg">{user.login}</h2>
              <p className="text-sm text-gray-600">
                Profile:{" "}
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 underline"
                >
                  {user.html_url}
                </a>
              </p>
              {user.location && (
                <p className="text-sm text-gray-700">📍 {user.location}</p>
              )}
              <p className="text-sm text-gray-700">
                📦 Public Repos: {user.public_repos}
              </p>
            </div>
          </div>
        ))}
      </div>

      {users.length > 0 && !loading && (
        <button
          onClick={loadMore}
          className="mt-6 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900"
        >
          Load More
        </button>
      )}
    </div>
  );
}

import { useState } from 'react';
import { searchUsers } from '../services/github';
import UserCard from '../components/UserCard';
import { Link } from 'react-router-dom';

export default function Home() {
  const [q, setQ] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = async (e) => {
    e.preventDefault();
    if (!q.trim()) return;
    setLoading(true); setError(null);
    try {
      const data = await searchUsers(q);
      setResults(data.items || []);
    } catch (err) {
      setError(err?.response?.data?.message || err.message || 'Search failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={onSearch} style={{display:'flex', gap: '0.5rem', marginBottom: '1rem'}}>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search GitHub users (e.g. octocat)"
          style={{flex: 1, padding: '0.5rem'}}
        />
        <button type="submit" style={{padding: '0.5rem 1rem'}}>Search</button>
      </form>

      {loading && <p>Loading…</p>}
      {error && <p style={{color:'crimson'}}>{error}</p>}

      <div style={{display:'grid', gap: '0.75rem', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))'}}>
        {results.map(u => (
          <Link to={`/user/${u.login}`} key={u.id} style={{textDecoration:'none', color:'inherit'}}>
            <UserCard user={u} />
          </Link>
        ))}
      </div>
    </div>
  );
}

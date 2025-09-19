import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

export default function Search() {
  const [q, setQ] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const username = q.trim();
    if (!username) return;
    setLoading(true);
    setError(false);
    setUser(null);

    try {
      const data = await fetchUserData(username);
      setUser(data);
    } catch (err) {
      // If API returns 404, axios throws; we show the required message for any error here
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{maxWidth: 700, margin: '0 auto'}}>
      <form onSubmit={onSubmit} style={{display:'flex', gap:8, marginBottom: 16}}>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Enter GitHub username (eg. octocat)"
          style={{flex: 1, padding: '0.5rem 0.75rem'}}
        />
        <button type="submit" style={{padding: '0.5rem 1rem'}}>Search</button>
      </form>

      {loading && <p>Loading...</p>}

      {error && <p>Looks like we cant find the user</p>}

      {user && (
        <div style={{display:'flex', gap:12, alignItems:'center', border:'1px solid #eee', padding:12, borderRadius:8}}>
          <img src={user.avatar_url} alt={user.login} width={96} height={96} style={{borderRadius:8}} />
          <div>
            <h3 style={{margin:0}}>{user.name || user.login}</h3>
            {user.name && <div style={{color:'#555', fontSize:13}}>@{user.login}</div>}
            {user.bio && <p style={{margin:'8px 0 0'}}>{user.bio}</p>}
            <div style={{marginTop:8}}>
              <a href={user.html_url} target="_blank" rel="noreferrer">Open on GitHub ↗</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

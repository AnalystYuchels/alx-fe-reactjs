import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUser } from '../services/github';

export default function UserProfile() {
  const { login } = useParams();
  const [user, setUser] = useState(null);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(null);

  useEffect(() => {
    if (!login) return;
    setLoading(true); setError(null);
    getUser(login)
      .then(setUser)
      .catch(err => setError(err?.response?.data?.message || err.message))
      .finally(() => setLoading(false));
  }, [login]);

  if (loading) return <p>Loading profile…</p>;
  if (error) return <p style={{color:'crimson'}}>{error}</p>;
  if (!user) return <p>No user found</p>;

  return (
    <div>
      <img src={user.avatar_url} alt={user.login} width="120" style={{borderRadius: 8}} />
      <h2>{user.name || user.login}</h2>
      <p>{user.bio}</p>
      <p>Followers: {user.followers} · Following: {user.following}</p>
      <a href={user.html_url} target="_blank" rel="noreferrer">Open on GitHub</a>
    </div>
  );
}

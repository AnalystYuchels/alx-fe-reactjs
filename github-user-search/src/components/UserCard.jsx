export default function UserCard({ user }) {
  return (
    <div style={{border: '1px solid #eee', padding: '0.75rem', borderRadius: 8, display: 'flex', gap: '0.75rem', alignItems:'center'}}>
      <img src={user.avatar_url} alt={user.login} width="56" height="56" style={{borderRadius: 8}} />
      <div>
        <div style={{fontWeight:600}}>{user.login}</div>
        <div style={{fontSize: 12, color:'#555'}}>Score: {Math.round(user.score || 0)}</div>
        <a href={user.html_url} target="_blank" rel="noreferrer" style={{fontSize:12}}>GitHub ↗</a>
      </div>
    </div>
  );
}

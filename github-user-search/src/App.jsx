import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import UserProfile from './pages/UserProfile';

export default function App() {
  return (
    <>
      <header style={{padding: '1rem', borderBottom: '1px solid #eee'}}>
        <Link to="/" style={{textDecoration: 'none', fontWeight: '600'}}>GitHub User Search</Link>
      </header>

      <main style={{padding: '1rem'}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:login" element={<UserProfile />} />
        </Routes>
      </main>
    </>
  );
}

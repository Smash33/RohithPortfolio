import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import profile from '../data/profile.json';

function NotFound() {
  useEffect(() => {
    document.title = `404 — ${profile.name}`;
  }, []);

  return (
    <>
      <header className="header">
        <h1 className="section-title">404 - Page Not Found</h1>
      </header>

      <section className="section">
        <p>The page you're looking for doesn't exist.</p>
        <p style={{ marginTop: '20px' }}>
          <Link to="/">[← back to home]</Link>
        </p>
      </section>
    </>
  );
}

export default NotFound;

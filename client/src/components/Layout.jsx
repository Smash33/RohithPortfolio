import { useLocation } from 'react-router-dom';
import Nav from './Nav';
import profile from '../data/profile.json';

function Layout({ children }) {
  return (
    <div className="container">
      <div className="layout">
        <main id="main" className="main-content" role="main">
          {children}
        </main>
        
        <aside className="sidebar" role="complementary">
          <header className="header">
            <h1 className="name">{profile.name}</h1>
            <p className="title">{profile.title}</p>
          </header>
          
          <Nav />
          
          <footer className="footer" role="contentinfo">
            <p><a href={`mailto:${profile.email}`}>email</a></p>
            {profile.social.github && <p><a href={profile.social.github} target="_blank" rel="noopener noreferrer">github</a></p>}
            {profile.social.linkedin && <p><a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer">linkedin</a></p>}
          </footer>
        </aside>
      </div>
    </div>
  );
}

export default Layout;

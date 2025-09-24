import { useLocation } from 'react-router-dom';
import Nav from './Nav';
import profile from '../data/profile.json';

function Layout({ children }) {
  return (
    <div className="container">
      <div className="layout">
        <main id="main" className="main-content" role="main" tabIndex="-1">
          {children}
        </main>
        
        <aside className="sidebar" role="complementary">
          <header className="header">
            <h1 className="name">{profile.name}</h1>
            <p className="title">{profile.title}</p>
          </header>
          
          <Nav />
          
          <footer className="footer" role="contentinfo">
            <div className="footer-contact">
              <a 
                href={profile.social.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-link"
              >
                linkedin
              </a>
              <a href={`mailto:${profile.email}`} className="footer-link">
                email
              </a>
              <a 
                href={profile.assets.resume_url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-link"
              >
                resume
              </a>
            </div>
          </footer>
        </aside>
      </div>
    </div>
  );
}

export default Layout;

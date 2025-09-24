import { useLocation } from 'react-router-dom';
import Nav from './Nav';
import profile from '../data/profile.json';

function Layout({ children }) {
  const location = useLocation();
  const showSidebarHeader = location.pathname !== '/';

  return (
    <div className="container">
      <div className="layout">
        <main id="main" className="main-content" role="main" tabIndex="-1">
          {children}
        </main>

        <aside className="sidebar" role="complementary">
          {showSidebarHeader && (
            <div className="profile-header">
              <div className="profile-info">
                <h1 className="name">{profile.name}</h1>
                <p className="title">{profile.title}</p>
              </div>
              <Nav />
            </div>
          )}
          {!showSidebarHeader && <Nav />}
        </aside>
      </div>
    </div>
  );
}

export default Layout;

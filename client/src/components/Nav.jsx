import { Link, useLocation } from 'react-router-dom';

function Nav() {
  const location = useLocation();
  
  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="header" role="navigation" aria-label="Main navigation">
      <ul className="nav-links">
        <li>
          <Link 
            to="/" 
            className={isActive('/') ? 'active' : ''}
            aria-current={isActive('/') ? 'page' : undefined}
          >
            home
          </Link>
        </li>
        <li>
          <Link 
            to="/work" 
            className={isActive('/work') ? 'active' : ''}
            aria-current={isActive('/work') ? 'page' : undefined}
          >
            work
          </Link>
        </li>
        <li>
          <Link 
            to="/blog" 
            className={isActive('/blog') ? 'active' : ''}
            aria-current={isActive('/blog') ? 'page' : undefined}
          >
            blog
          </Link>
        </li>
        <li>
          <Link 
            to="/about" 
            className={isActive('/about') ? 'active' : ''}
            aria-current={isActive('/about') ? 'page' : undefined}
          >
            about
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;

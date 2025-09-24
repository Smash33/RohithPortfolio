import { useEffect } from 'react';
import profile from '../data/profile.json';
import SocialLinks from '../components/SocialLinks';
import Nav from '../components/Nav';

function Home() {
  useEffect(() => {
    document.title = `${profile.name} — ${profile.title}`;
  }, []);

  return (
    <div className="home-center">
      <h1 className="home-name">{profile.name}</h1>
      <p className="home-title">{profile.title}</p>
      
      <div className="hero-container">
        <hr className="hero-line" />
        
        <div className="hero-main">
          <img 
            src={profile.assets.photo} 
            alt={`Portrait of ${profile.name}`} 
            className="home-photo" 
          />
          <Nav />
        </div>
        
        <hr className="hero-line" />
      </div>
      
      <SocialLinks align="center" />
    </div>
  );
}

export default Home;

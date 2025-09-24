import { useEffect } from 'react';
import profile from '../data/profile.json';
import SocialLinks from '../components/SocialLinks';

function Home() {
  useEffect(() => {
    document.title = `${profile.name} — ${profile.title}`;
  }, []);

  return (
    <div className="home-center">
      <h1 className="home-name">{profile.name}</h1>
      <p className="home-title">{profile.title}</p>
      
      <img 
        src={profile.assets.photo} 
        alt={`Portrait of ${profile.name}`} 
        className="home-photo" 
      />
      
      <SocialLinks align="center" />
    </div>
  );
}

export default Home;

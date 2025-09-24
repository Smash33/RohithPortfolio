import { useEffect } from 'react';
import profile from '../data/profile.json';

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
      
      <div className="home-contact">
        <a 
          href={profile.social.linkedin} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          linkedin
        </a>
        <a href={`mailto:${profile.email}`}>email</a>
        <a href={profile.assets.resume_url} target="_blank" rel="noopener noreferrer">
          resume
        </a>
      </div>
    </div>
  );
}

export default Home;
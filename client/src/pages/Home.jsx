import { useEffect } from 'react';
import profile from '../data/profile.json';

function Home() {
  useEffect(() => {
    document.title = `${profile.name} — ${profile.title}`;
  }, []);

  return (
    <>
      <section className="section">
        <img 
          src="/profile.jpg" 
          alt={`Portrait of ${profile.name}`} 
          className="profile-image" 
        />
        
        <p>{profile.summary}</p>

        <div className="contact-info">
          <p><a href={`mailto:${profile.email}`}>{profile.email}</a></p>
          <p>{profile.location}</p>
        </div>
      </section>
    </>
  );
}

export default Home;

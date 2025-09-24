import { useEffect } from 'react';
import profile from '../data/profile.json';

function About() {
  useEffect(() => {
    document.title = `About — ${profile.name}`;
  }, []);

  return (
    <>
      <header className="header">
        <h1 className="section-title">About</h1>
      </header>

      <section className="section">
        <div className="skills-grid">
          {Object.entries(profile.skills).map(([category, skills]) => (
            <div key={category} className="skill-category">
              <h3>{category.charAt(0).toUpperCase() + category.slice(1).replace(/([A-Z])/g, ' $1')}</h3>
              <ul className="skill-list">
                {skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <hr />

      <section className="section">
        <h2 className="section-title">Education</h2>
        {profile.education.map((edu, index) => (
          <div key={index} className="work-item">
            <div className="work-header">
              <div className="work-role">{edu.degree}</div>
              <div className="work-meta">{edu.school} • {edu.years}</div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default About;

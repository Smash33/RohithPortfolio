import { useEffect } from 'react';
import profile from '../data/profile.json';
import SocialLinks from '../components/SocialLinks';

function Work() {
  useEffect(() => {
    document.title = `Work — ${profile.name}`;
  }, []);

  return (
    <>
      <header className="header">
        <h1 className="section-title">Work Experience</h1>
      </header>

      <section className="section">
        {profile.work.map((job, index) => (
          <div key={index} className="work-item">
            <div className="work-header">
              <div className="work-role">{job.role}</div>
              <div className="work-meta">{job.company} • {job.dates} • {job.location}</div>
            </div>
            <ul className="work-bullets">
              {job.bullets.map((bullet, bulletIndex) => (
                <li key={bulletIndex}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <hr />

      <section className="section">
        <h2 className="section-title">Projects</h2>

        {profile.projects.map((project, index) => (
          <div key={index} className="project-item">
            <div className="project-header">
              <div className="project-name">{project.name}</div>
              <div className="project-tech">{project.tech.join(', ')}</div>
            </div>
            {project.description && (
              <p style={{ marginBottom: '10px', color: 'var(--muted)' }}>
                {project.description}
              </p>
            )}
            <ul className="project-bullets">
              {project.bullets.map((bullet, bulletIndex) => (
                <li key={bulletIndex}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <SocialLinks />
    </>
  );
}

export default Work;

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
        <div className="about-narrative">
          <p>Hi, I'm Rohith, a frontend developer with 2 years of experience building responsive, user-friendly applications. Most of my work has been with ReactJS, NextJS, and Redux, and I've enjoyed collaborating with teams to design and deliver scalable web apps.</p>

          <p>I started out studying Mechanical Engineering, but I quickly found myself drawn into the problem-solving and creativity of web development. Since then, I've built and maintained applications used in production, created reusable UI components with Carbon Design System, and contributed to projects that improve both usability and performance.</p>

          <p>What I like most is the mix of design and engineering — turning ideas into something that works smoothly in a browser. I've worked with tools like Figma, Git, Jira, and Trello to ship features in agile sprints, and I'm comfortable with testing frameworks like Jest and React Testing Library to keep code reliable.</p>

          <p>Outside of work, I'm curious about new frameworks and enjoy exploring ways to make interfaces more accessible and user-friendly. I see every project as a chance to learn something new while building something that makes life easier for users.</p>
        </div>
      </section>

      <hr />

      <section className="section">
        <h2 className="section-title">tools I've worked with</h2>
        
        <div className="tools-list">
          <div className="tool-category">
            <strong>Languages:</strong> {profile.skills.languages.join(', ')}
          </div>
          <div className="tool-category">
            <strong>Frameworks:</strong> {profile.skills.frameworks.join(', ')}
          </div>
          <div className="tool-category">
            <strong>Testing:</strong> {profile.skills.testing.join(', ')}
          </div>
          <div className="tool-category">
            <strong>Tools:</strong> {profile.skills.tools.join(', ')}
          </div>
          <div className="tool-category">
            <strong>OS:</strong> {profile.skills.os.join(', ')}
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
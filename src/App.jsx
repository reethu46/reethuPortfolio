import './index.css';

function App() {
  const projects = [
    {
      id: 1,
      title: 'TaskOrbit',
      description: 'A modern Kanban board application featuring task management, column state persistence via Local Storage, and fluid UI.',
      tags: ['React', 'Local Storage', 'State Management'],
      link: 'https://github.com/YourUsername/TaskOrbit'
    },
    {
      id: 2,
      title: 'FlickRadar',
      description: 'A cinematic movie discovery tool. Integrated with the OMDB API to fetch real-time movie data, handling async states and error boundaries.',
      tags: ['React', 'Fetch API', 'Async/Await'],
      link: 'https://github.com/YourUsername/FlickRadar'
    },
    {
      id: 3,
      title: 'WealthWeaver',
      description: 'A personal finance dashboard. Tracks income and expenses, calculates dynamic balances, and persists financial data securely.',
      tags: ['React', 'Data Structures', 'Hooks'],
      link: 'https://github.com/YourUsername/WealthWeaver'
    }
  ];

  return (
    <>
      {/* Background Orbs for Loop UI effect */}
      <div className="bg-orb orb-1"></div>
      <div className="bg-orb orb-2"></div>

      {/* Navigation */}
      <nav className="nav">
        <div className="logo">Nova.</div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Work</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="about">
        <div>
          <h1>Hi, I'm Jane Doe.<br/>Frontend Engineer.</h1>
          <p>
            I build interactive, accessible, and highly performant web applications using modern JavaScript frameworks. 
            Passionate about clean code and exceptional user experiences.
          </p>
          <a href="#projects" className="hero-btn">View My Work</a>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <h2 className="section-title">Selected Projects</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-tags">
                {project.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
              <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                View Repository &rarr;
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="contact-box">
          <h2>Let's build something.</h2>
          <p>Currently open for new opportunities and collaborations.</p>
          <a href="mailto:hello@example.com" className="hero-btn">Get In Touch</a>
        </div>
      </section>
    </>
  );
}

export default App;

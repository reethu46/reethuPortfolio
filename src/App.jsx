import './index.css';

function App() {
  const webProjects = [
    {
      id: 1,
      title: 'TaskOrbit',
      description: 'A modern Kanban board application featuring task management, column state persistence via Local Storage, and fluid UI.',
      tags: ['React', 'Local Storage', 'State Management'],
      link: 'https://github.com/reethu46/TaskOrbit'
    },
    {
      id: 2,
      title: 'FlickRadar',
      description: 'A cinematic movie discovery tool. Integrated with the OMDB API to fetch real-time movie data, handling async states and error boundaries.',
      tags: ['React', 'Fetch API', 'Async/Await'],
      link: 'https://github.com/reethu46/-FlickRadar-Movie-Search-'
    },
    {
      id: 3,
      title: 'WealthWeaver',
      description: 'A personal finance dashboard. Tracks income and expenses, calculates dynamic balances, and persists financial data securely.',
      tags: ['React', 'Data Structures', 'Hooks'],
      link: 'https://github.com/reethu46/WealthWeaver'
    }
  ];

  const academicProjects = [
    {
      id: 4,
      title: 'Bhasha Stories',
      description: 'A Multilingual story-sharing platform built with Python & Streamlit, featuring GitLab CI/CD integration.',
      tags: ['Python', 'Streamlit', 'CI/CD']
    },
    {
      id: 5,
      title: 'Well Wisher (AI Chatbot)',
      description: 'An AI-powered chatbot leveraging Hugging Face Transformers and Streamlit for conversational interfaces.',
      tags: ['AI/ML', 'Hugging Face', 'Python']
    },
    {
      id: 6,
      title: 'EV & Battery Management System',
      description: 'Designed an Electric Vehicle prototype with an optimized Battery Management System (BMS).',
      tags: ['Hardware', 'IoT', 'Automotive']
    }
  ];

  return (
    <>
      {/* Background Orbs for Loop UI effect */}
      <div className="bg-orb orb-1"></div>
      <div className="bg-orb orb-2"></div>

      {/* Navigation */}
      <nav className="nav">
        <div className="logo">Saipoojitha.</div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Work</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="about">
        <div>
          <h1>Hi, I'm G. Sai Poojitha.<br/>EEE Student & Developer.</h1>
          <p>
            Currently pursuing my B.Tech at BVRIT Hyderabad. I specialize in merging Electrical Engineering principles with modern Web Development and AI technologies. Passionate about building intelligent systems and seamless user experiences.
          </p>
          <div style={{display: 'flex', gap: '1rem', marginTop: '2rem'}}>
            <a href="#projects" className="hero-btn">View My Work</a>
            <a href="https://linkedin.com/in/saipoojitha-gotti" target="_blank" rel="noreferrer" className="hero-btn" style={{background: 'rgba(255,255,255,0.1)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)'}}>LinkedIn</a>
          </div>
        </div>
      </section>

      {/* Education & Experience */}
      <section id="experience">
        <h2 className="section-title">Experience & Education</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-date">Jun - Aug 2024</div>
            <h3 className="timeline-title">AI Developer Intern</h3>
            <div className="timeline-subtitle">Vishwam.AI</div>
            <p className="timeline-desc">
              Built real-time AI systems including 'Bhasha Stories' (a multilingual story-sharing platform), 'Well Wisher' (an AI chatbot using Hugging Face), and a text corpus collection & preprocessing engine.
            </p>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-date">6 Months Internship</div>
            <h3 className="timeline-title">Substation Intern (220/132kV)</h3>
            <div className="timeline-subtitle">Wanaparthy Substation</div>
            <p className="timeline-desc">
              Studied power transmission, transformer operation, protection mechanisms, and grid maintenance protocols.
            </p>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">2024 - 2027 (Pursuing)</div>
            <h3 className="timeline-title">B.Tech - Electrical & Electronics Engineering</h3>
            <div className="timeline-subtitle">BVRIT Hyderabad College of Engineering for Women</div>
            <p className="timeline-desc">Currently advancing my knowledge in core engineering and software development.</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" style={{paddingTop: '2rem', minHeight: 'auto'}}>
        <h2 className="section-title" style={{marginBottom: '2rem'}}>Technical Arsenal</h2>
        <div className="skills-container">
          <div className="skill-category">
            <h3>Programming & Web</h3>
            <div className="skill-list">
              <span className="tag">Python</span>
              <span className="tag">Java</span>
              <span className="tag">ReactJS</span>
              <span className="tag">C</span>
              <span className="tag">Git / GitLab</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>AI / ML</h3>
            <div className="skill-list">
              <span className="tag">NumPy</span>
              <span className="tag">Pandas</span>
              <span className="tag">Hugging Face</span>
              <span className="tag">Streamlit</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>IoT & Embedded</h3>
            <div className="skill-list">
              <span className="tag">Arduino</span>
              <span className="tag">Tinkercad</span>
              <span className="tag">MATLAB</span>
              <span className="tag">Wireless Sensor Networks</span>
            </div>
          </div>
        </div>
      </section>

      {/* Web Projects Section */}
      <section id="projects">
        <h2 className="section-title">Web Development Projects</h2>
        <div className="projects-grid">
          {webProjects.map(project => (
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

      {/* Academic/AI Projects Section */}
      <section style={{paddingTop: '0', minHeight: 'auto'}}>
        <h2 className="section-title" style={{fontSize: '2rem', marginBottom: '2rem'}}>Hardware & AI Projects</h2>
        <div className="projects-grid">
          {academicProjects.map(project => (
            <div key={project.id} className="project-card" style={{padding: '1.5rem'}}>
              <h3 className="project-title" style={{fontSize: '1.2rem'}}>{project.title}</h3>
              <p className="project-desc" style={{fontSize: '0.95rem', marginBottom: '1rem'}}>{project.description}</p>
              <div className="project-tags">
                {project.tags.map(tag => (
                  <span key={tag} className="tag" style={{background: 'transparent', border: '1px solid var(--accent)'}}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section style={{paddingTop: '4rem', minHeight: 'auto'}}>
        <h2 className="section-title" style={{fontSize: '2rem', marginBottom: '2rem'}}>Certifications & Achievements</h2>
        <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
          <div className="timeline-item" style={{padding: '1rem 1.5rem', borderLeftColor: '#fff'}}>
            <h4 style={{fontSize: '1.1rem', fontWeight: 600}}>LILA Poonawalla Foundation Scholar (2024)</h4>
          </div>
          <div className="timeline-item" style={{padding: '1rem 1.5rem', borderLeftColor: '#fff'}}>
            <h4 style={{fontSize: '1.1rem', fontWeight: 600}}>Contributor - GirlScript Summer of Code (GSSOC-2025)</h4>
          </div>
          <div className="timeline-item" style={{padding: '1rem 1.5rem', borderLeftColor: '#fff'}}>
            <h4 style={{fontSize: '1.1rem', fontWeight: 600}}>Renewable Energy Literacy (Energy Swaraj Foundation)</h4>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="contact-box">
          <h2>Let's build something.</h2>
          <p>Currently open for new opportunities, hackathons, and collaborations.</p>
          <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
            <a href="mailto:24wh5a0202@bvrithyderabad.edu.in" className="hero-btn">Email Me</a>
            <a href="https://linkedin.com/in/saipoojitha-gotti" target="_blank" rel="noreferrer" className="hero-btn" style={{background: 'rgba(255,255,255,0.1)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)'}}>LinkedIn</a>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;

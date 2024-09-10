import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="App-header">
        <h1>Nero Yu</h1>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#experience">Work Experience</a></li>
            <li><a href="#projects">Projects</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <h2>Welcome to My Portfolio</h2>
        <p>I'm Nero, a Cyber Security Analyst.</p>
        <button onClick={() => window.location.href = '#resume'}>View My Resume</button>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <h3>About Me</h3>
        <p>Short description about who you are, your professional background, and your current goals.</p>
      </section>

      {/* Footer */}
      <footer>
        <p>Contact: <a href="mailto:nerogatari@gmail.com">nerogatari@gmail.com</a></p>
      </footer>
    </div>
  );
}

export default App;
import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero3D from './components/Hero3D.jsx';
import AboutSection from './components/AboutSection.jsx';
import ProjectsGrid from './components/ProjectsGrid.jsx';
import ContactSection from './components/ContactSection.jsx';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white antialiased selection:bg-fuchsia-500/40 selection:text-fuchsia-100">
      <Navbar />
      <main>
        <Hero3D />
        <AboutSection />
        <ProjectsGrid />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;

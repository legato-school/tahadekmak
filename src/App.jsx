import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="min-h-screen">
        <Hero />
        <About />
        <Experience />
        <Certifications />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Certifications from '../components/Certifications';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

const Home = () => {
  const { hash } = useLocation();

  // When arriving with a hash (e.g. /#about from another page), scroll to it.
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.replace('#', ''));
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 60);
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Certifications />
      <Skills />
      <Contact />
    </>
  );
};

export default Home;

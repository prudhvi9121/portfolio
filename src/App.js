import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <AppContainer>
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Contact />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  background: #ffffff;
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
  
  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: 
      repeating-linear-gradient(
        0deg,
        transparent,
        transparent 2px,
        rgba(0, 0, 0, 0.015) 2px,
        rgba(0, 0, 0, 0.015) 4px
      );
    pointer-events: none;
    z-index: 0;
  }
  
  > * {
    position: relative;
    z-index: 2;
  }
`;

export default App;
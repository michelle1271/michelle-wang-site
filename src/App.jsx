import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Hero from './pages/home/Hero';
import Projects from './pages/projects/projects';
import Resume from './pages/resume/resume';
import About from './pages/about/about';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
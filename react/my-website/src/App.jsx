import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';

const App = () => {
  return (
    <>
      <Navbar />
      <Projects />
      <About />
      <Footer />
    </>
  );
};

export default App;

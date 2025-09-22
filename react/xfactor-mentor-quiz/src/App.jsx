import React from 'react';
import Navbar from './components/Navbar';
import Details from './components/Details';
import Footer from './components/Footer';
import Quiz from './components/Quiz';
import Result from './components/Result';

const App = () => {
  const showResult = () => {
    // A Result div megjelenítése
    document.getElementById('result-container').style.display = 'block';
  };
  return (
    <>
      <Navbar />
      <Details />
      <Quiz />
      <Footer />
    </>
  );
};

export default App;

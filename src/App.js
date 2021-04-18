import React from 'react';
import Navbar from './Navbar'; 
import HeroContent from './Hero'; 
import Projects from './Projects';
import Footer from './Footer';
import './App.css'; 



function App() {

  return (
    <div className="App">
      <Navbar />
      <HeroContent /> 
      <div className='section-title'>
        <h1 className='section-name'>Projects</h1>
      </div>
      <Projects />
      <Footer /> 
    </div>
  );
}

export default App;

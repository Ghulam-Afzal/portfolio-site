import React from 'react';
import Navbar from './Navbar'; 
import HeroContent from './Hero'; 
import Projects from './Projects';



function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroContent /> 
      <Projects />
    </div>
  );
}

export default App;

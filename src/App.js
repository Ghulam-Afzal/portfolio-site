import React from 'react';
import Navbar from './Navbar'; 
import HeroContent from './Hero'; 
import Projects from './Projects';
import Footer from './Footer';
import projectData from './projects.json'
import './App.css'; 



function App() {

  // let projects = [] 

  // for (let i = 0; i < 5; i++) { 
  //   projects.push(<Projects />)
  // }

  return (
    <div className="App">
      <Navbar />
      <HeroContent /> 
      <div className='section-title'>
        <h1 className='section-name'>Projects</h1>
      </div>
      {console.log(projectData[0].img)}
      <Projects title={projectData[0].title} desc={projectData[0].desc} code={projectData[0].code} img={projectData[0].img} link={projectData[0].link}/>
      <Footer /> 
    </div>
  );
}

export default App;

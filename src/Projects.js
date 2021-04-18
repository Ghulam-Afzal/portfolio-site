import React from 'react'; 
import './Projects.css';
import projectData from './projects.json'



const Projects = () => { 
    const projectList = projectData.map((info, i) => 
        <div id='projects' key={i}>
            <div className='card'> 
                <div className='img-container'><img src={info.img} alt='Test-Project' ></img></div>
                <div className='project-desc'>
                    <h3 className='title'>{info.name}</h3>
                    <p className='info'>{info.desc} </p>
                    <div className='btn-container'>
                        <a href={info.github}  ><button className='projec-btns'>Code</button></a>
                        <a href={info.website} ><button className='projec-btns'>Website</button></a>
                    </div>
                </div>
            </div>
        </div>
    );
    return ( 
        <div>
            { projectList }
        </div>
    )

}


export default Projects; 
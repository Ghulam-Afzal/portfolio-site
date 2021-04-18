import React from 'react';
import './Navbar.css'; 

const Navbar = () => { 
    const LinkedinUrl = 'https://www.linkedin.com/'
    const GithubUrl = 'https://github.com/Ghulam-Afzal'
    const sectionID = '#projects'
    return ( 
        <div>
            <header>
                <span className='logo'>GAA</span>
                <nav className='nav-links'>
                    <li><a href ={sectionID}>Projects</a></li>
                    <li><a href ={LinkedinUrl}>Linkedin</a></li>
                    <li><a href ={GithubUrl}>Github</a></li>
                    {/* <li><a href ={url}>About</a></li> */}
                </nav>
            </header>
            
        </div>
    )
}



export default Navbar; 
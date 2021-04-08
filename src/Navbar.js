import React from 'react';
import { FaAlignRight } from 'react-icons/fa';
import './Navbar.css'; 

const Navbar = () => { 
    const LinkedinUrl = 'https://www.pluralsight.com/guides/how-to-render-%22a%22-with-optional-href-in-react'
    const GithubUrl = 'https://github.com/Ghulam-Afzal'
    const sectionID = 'lol'
    return ( 
        <div>
            <header>
                <span className='logo'>sdjfmkldsj</span>
                <nav className='nav-links'>
                    <li><a href ={sectionID}>Projects</a></li>
                    {/* <li><a href ={url}>About</a></li> */}
                    <li><a href ={GithubUrl}>Github</a></li>
                </nav>
                <FaAlignRight />
            </header>
            
        </div>
    )
}



export default Navbar; 
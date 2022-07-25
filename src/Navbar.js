import React from 'react';
import './Navbar.css'; 
import { Urls } from './url';

const Navbar = () => { 

    return ( 
        <div id='home'>
            <header>
                <span className='logo'>GAA</span>
                <nav className='nav-links'>
                    <li><a href={Urls.hero}>About Me</a></li>
                    <li><a href={Urls.projects}>Projects</a></li>
                </nav>
            </header>
        </div>
    )
}



export default Navbar; 
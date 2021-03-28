import React from 'react';
import Button from './Button';
import './Navbar.css'; 

const Navbar = () => { 
    const url = 'https://www.pluralsight.com/guides/how-to-render-%22a%22-with-optional-href-in-react'
    return ( 
        <div>
            <header>
                <span className='logo'>Keishin</span>
                <nav className='nav-links'>
                    <li><a href ={url}>Projects</a></li>
                    <li><a href ={url}>About</a></li>
                    <li><a href ={url}>Github</a></li>
                    <li><a href ={url}>Projects</a></li>
                </nav>
                <Button  link = {url} name='Contact'/>
            </header>
        </div>
    )
}

export default Navbar; 
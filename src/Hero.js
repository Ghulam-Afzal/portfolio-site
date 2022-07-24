import React from 'react'; 
import './Hero.css';
import { FaGithub, FaLinkedin, FaRegFileAlt} from 'react-icons/fa';
import { Urls } from './url';

const HeroContent = () => { 
    const handleClick = (iconType) => {
        window.location.replace(Urls[iconType]);
    }

    return ( 
        <div id='home' className='hero'>  
            <h1 className='hero-name'>Ghulam Afzal</h1>
            <p className='hero-about-me'>I am currently a junior attending the University of Connecticut as a computer science student. I have a passion for web development, game development, and embedded programming.</p>
            <ul className='wrapper'>
                <li className='icon linkedin'><span><FaLinkedin onClick={() => handleClick("linkedin")}/></span></li>
                <li className='icon github'><span><FaGithub onClick={() => handleClick("github")}/></span></li>
            </ul>
        </div>
    )    

}

export default HeroContent;
import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaHome , FaRegCopyright} from "react-icons/fa";
import { Urls } from './url';

const Footer = () => {
    return ( 
        <div className='footer-container'>
            <div className='socials'>
            <a href={Urls.home}><li><span><FaHome /></span></li></a>
            <a href={Urls.linkedin}><li><span><FaLinkedin /></span></li></a>
            <a href={Urls.github}><li><span><FaGithub /></span></li></a>
            </div>
        </div>
    )
}

export default Footer; 

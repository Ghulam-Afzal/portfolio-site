import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaHome , FaRegCopyright} from "react-icons/fa";
import { Urls } from './url';

const Footer = () => {
    return ( 
        <div className='footer-container'>
            <div className='socials'>
                <li><a href={Urls.home}><button><FaHome /></button></a></li>
                <li><a href={Urls.linkedin}><button><FaLinkedin /></button></a></li>
                <li><a href={Urls.github}><button><FaGithub /></button></a></li>
            </div>
            <div className='copyright'>
                <p><FaRegCopyright /> Ghulam Afzal Copyright 2021</p>
            </div>
        </div>
    )
}

export default Footer; 

import React from 'react';
import './Footer.css';
import { FaGithub, FaTwitter, FaLinkedin, FaHome , FaRegCopyright} from "react-icons/fa";

const Footer = () => { 
    const LinkedinUrl = 'https://www.linkedin.com/'
    const GithubUrl = 'https://github.com/Ghulam-Afzal'
    const homeSectionId = '#home'
    const twitterLink = 'https://twitter.com/?lang=en'
    return ( 
        <div className='footer-container'>
            <div className='socials'>
                <li><a href ={homeSectionId}><button><FaHome /></button></a></li>
                <li><a href ={LinkedinUrl}><button><FaLinkedin /></button></a></li>
                <li><a href ={GithubUrl}><button><FaGithub /></button></a></li>
                <li><a href ={twitterLink}><button><FaTwitter /></button></a></li>
            </div>
            <div className='copyright'>
                <p><FaRegCopyright /> Ghulam Afzal Copyright 2021</p>
            </div>
        </div>
    )
}

export default Footer; 

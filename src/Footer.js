import React from 'react';
import './Footer.css';
import { FaGithub, FaTwitter, FaLinkedin, FaHome , FaRegCopyright} from "react-icons/fa";

const Footer = () => { 
    const LinkedinUrl = 'https://www.pluralsight.com/guides/how-to-render-%22a%22-with-optional-href-in-react'
    const GithubUrl = 'https://github.com/Ghulam-Afzal'
    return ( 
        <div className='footer-container'>
            <div className='socials'>
                <li><a href ={LinkedinUrl}><button><FaHome /></button></a></li>
                <li><a href ={LinkedinUrl}><button><FaLinkedin /></button></a></li>
                <li><a href ={GithubUrl}><button><FaGithub /></button></a></li>
                <li><a href ={GithubUrl}><button><FaTwitter /></button></a></li>
            </div>
            <div className='copyright'>
                <p><FaRegCopyright /> Copyright 2021</p>
            </div>
        </div>
    )
}

export default Footer; 

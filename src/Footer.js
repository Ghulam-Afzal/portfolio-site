import React from 'react';
import './Footer.css';

const Footer = () => { 
    const LinkedinUrl = 'https://www.pluralsight.com/guides/how-to-render-%22a%22-with-optional-href-in-react'
    const GithubUrl = 'https://github.com/Ghulam-Afzal'
    return ( 
        <div className='footer-container'>
            <div className='socials'>
                <li><a href ={LinkedinUrl}><button>Home</button></a></li>
                <li><a href ={LinkedinUrl}><button>Linkedin</button></a></li>
                <li><a href ={GithubUrl}><button>Github</button></a></li>
                <li><a href ={GithubUrl}><button>Twitter</button></a></li>
            </div>
        </div>
    )
}

export default Footer; 

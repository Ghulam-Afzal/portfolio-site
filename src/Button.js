import React from 'react';
import './Button.css'; 

const Button = (props) => { 
    const { link, name } = props 
    return (
        <div>
            <li><a href={link}>{name}</a></li>
        </div>
    )
}


export default Button; 
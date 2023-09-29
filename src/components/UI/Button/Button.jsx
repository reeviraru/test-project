import React, {FC} from 'react';
import cl from './Button.module.css';

function Button({theme, text, onClick}) {
    return (
        <button
            onClick={onClick}
            className={
            theme === 'light'
            ? cl.light
            : theme === 'light border'
            ? cl.light_border
            : theme === 'dark border'
            ? cl.dark_border
            : cl.dark}>
            {text}
        </button>
    );
} 

export default Button;
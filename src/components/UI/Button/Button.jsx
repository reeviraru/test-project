import React, {FC} from 'react';
import cl from './Button.module.css';

function Button({type, theme, text, onClick, disabled}) {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
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

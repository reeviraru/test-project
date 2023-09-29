import React from "react";
import cl from '../InputGroup/InputGroup.module.css';

function TextareaGroup({title, placeholder, value, onChange}) {
    return (
        <label className={cl.label}>
            <span className={cl.label__name}>{title}</span>
            <textarea placeholder={placeholder} className={cl.label__textarea} rows='4' onChange={onChange} value={value}/>
        </label>
    );
}

export default TextareaGroup;
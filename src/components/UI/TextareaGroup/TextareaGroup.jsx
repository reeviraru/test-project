import React from "react";
import cl from '../InputGroup/InputGroup.module.css';

function TextareaGroup({title, required, placeholder, value, onChange, name}) {
    return (
        <label className={cl.label}>
            <span className={cl.label__name}>{title}</span>
            <textarea placeholder={placeholder} className={cl.label__textarea} rows='4' onChange={onChange} value={value} required={required} name={name}/>
        </label>
    );
}

export default TextareaGroup;
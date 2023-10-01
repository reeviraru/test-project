import React from "react";
import cl from './InputGroup.module.css';

function InputGroup({title, type, placeholder, value, required, onChange, name}) {
    return (
        <label className={cl.label}>
            <span className={cl.label__name}>{title}</span>
            <input type={type} placeholder={placeholder} className={cl.label__input} value={value} onChange={onChange} required={required} name={name}/>
        </label>
    );
}

export default InputGroup;
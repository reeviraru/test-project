import React from "react";
import '../InputGroup/InputGroup.css';

function TextareaGroup({title, required, placeholder, value, onChange, name}) {
    return (
        <label className='label'>
            <span className='label__name'>{title}</span>
            <textarea placeholder={placeholder} className='label__textarea' rows='4' onChange={onChange} value={value} required={required} name={name}/>
        </label>
    );
}

export default TextareaGroup;
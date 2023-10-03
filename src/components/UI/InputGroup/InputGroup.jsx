import React from "react";
import './InputGroup.css';

function InputGroup({title, type, placeholder, value, required, onChange, name}) {
    return (
        <label className='label'>
            <span className='label__name'>{title}</span>
            <input type={type} placeholder={placeholder} className='label__input' value={value} onChange={onChange} required={required} name={name}/>
        </label>
    );
}

export default InputGroup;
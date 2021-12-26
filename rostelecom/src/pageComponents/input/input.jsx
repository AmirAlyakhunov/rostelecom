import React from 'react';
import Style from './input.module.css';

const Input = ({placeholder, type, src, id, onChange, value, style}) => {
    return (
        <div className={Style.inputBox}>
            <input
                style={style}
                value={value}
                onChange={onChange}
                id={id}
                type={type}
                placeholder={placeholder}/>
        </div>
    );
};

export default Input;
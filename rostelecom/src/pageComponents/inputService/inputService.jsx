import React from 'react';
import Style from "./inputService.module.css";

const InputService = ({placeholder, type, src, id, onChange, value, style, pattern}) => {
    return (
        <div className={Style.inputBox} style={style}>
            <input
                value={value}
                onChange={onChange}
                id={id}
                type={type}
                placeholder={placeholder}
                pattern={pattern}
            />
        </div>
    );
};

export default InputService;
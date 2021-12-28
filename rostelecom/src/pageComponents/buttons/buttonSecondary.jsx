import React from 'react';
import Style from './buttons.module.css';

const ButtonSecondary = ({children, style, onClick}) => {
    return (
        <button className={Style.btnSecondary} style={style} onClick={onClick}>
            {children}
        </button>
    );
};

export default ButtonSecondary;
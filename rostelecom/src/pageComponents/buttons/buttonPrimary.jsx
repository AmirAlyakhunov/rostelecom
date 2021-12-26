import React from 'react';
import Style from './buttons.module.css';

const ButtonPrimary = ({children, style, onClick}) => {
    return (
        <button className={Style.btnPrimary} style={style} onClick={onClick}>
            {children}
        </button>
    );
};

export default ButtonPrimary;
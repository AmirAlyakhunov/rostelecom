import React from 'react';
import Style from './buttons.module.css';

const ButtonPrimary = ({children, style}) => {
    return (
        <button className={Style.btnPrimary} style={style}>
            {children}
        </button>
    );
};

export default ButtonPrimary;
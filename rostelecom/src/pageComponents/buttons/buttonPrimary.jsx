import React from 'react';
import Style from './buttons.module.css';

const ButtonPrimary = ({children}) => {
    return (
        <button className={Style.btnPrimary}>
            {children}
        </button>
    );
};

export default ButtonPrimary;
import React from 'react';
import Style from './buttons.module.css';

const ButtonSecondary = ({children}) => {
    return (
        <button className={Style.btnSecondary}>
            {children}
        </button>
    );
};

export default ButtonSecondary;
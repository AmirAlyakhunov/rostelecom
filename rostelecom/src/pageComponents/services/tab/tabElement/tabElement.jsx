import React, {useState} from 'react';
import Style from './tabElement.module.css';

const TabElement = ({children, style, onClick, disabled}) => {

    return (
        <button className={Style.tabElement} style={style} onClick={onClick} disabled={disabled}>{children}</button>
    );
};

export default TabElement;
import React from 'react';
import Style from "./buttons.module.css";

const ButtonPrimarySecond = ({children, style, onClick}) => {
    return (
        <button className={Style.btnPrimarySecond} style={style} onClick={onClick}>
            {children}
        </button>
    );
};

export default ButtonPrimarySecond;
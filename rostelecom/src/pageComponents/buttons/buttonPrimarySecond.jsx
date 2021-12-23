import React from 'react';
import Style from "./buttons.module.css";

const ButtonPrimarySecond = ({children, style}) => {
    return (
        <button className={Style.btnPrimarySecond} style={style}>
            {children}
        </button>
    );
};

export default ButtonPrimarySecond;
import React from 'react';
import Style from './buttons.module.css';
import {IconClose} from "../../assets/assets";

const ButtonClose = ({style, onClick}) => {
    return (
        <button className={Style.btnClose} onClick={onClick} style={style}><img src={IconClose}/></button>
    );
};

export default ButtonClose;
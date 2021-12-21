import React from 'react';
import Style from './header.module.css'
import {Logo, LogoRos} from '../../assets/assets';
import {Link} from 'react-router-dom';
import ButtonPrimary from "../../pageComponents/buttons/buttonPrimary";
import ButtonSecondary from "../../pageComponents/buttons/buttonSecondary";

const Header = () => {
    return (
        <div className={Style.header}>
            <div className={Style.logo}>
                <div className={Style.rtcLogo}>
                    <img src={LogoRos} alt='logo'/>
                </div>
                <Link to={'/'} className={Style.title}>Ростелеком к вашим услугам</Link>
            </div>
            <ButtonPrimary>Войти</ButtonPrimary>
        </div>
    );
};

export default Header;
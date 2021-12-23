import React from 'react';
import Style from './header.module.css'
import {IconLocation, Logo, LogoRos} from '../../assets/assets';
import {Link} from 'react-router-dom';
import ButtonPrimary from "../../pageComponents/buttons/buttonPrimary";
import ButtonSecondary from "../../pageComponents/buttons/buttonSecondary";

const Header = () => {
    return (
        <div className={Style.header}>

            <Link to={'/'} className={Style.logo}>
                <div className={Style.rtcLogo}>
                    <img src={LogoRos} alt='logo'/>
                </div>
                <span className={Style.title}>Ростелеком к вашим услугам</span>
            </Link>


            <div className={Style.infoContainer}>
                <img src={IconLocation} alt='location'/>
                <span className={Style.locationTxt}>Санкт-Петербург</span>
                <ButtonPrimary>Войти</ButtonPrimary>
            </div>

        </div>
    );
};

export default Header;
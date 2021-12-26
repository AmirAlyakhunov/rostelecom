import React from 'react';
import Style from './auth.module.css';
import {Link} from "react-router-dom";
import {LogoRos} from "../../assets/assets";
import ButtonPrimary from "../../pageComponents/buttons/buttonPrimary";
import Input from "../../pageComponents/input/input";

const Auth = () => {
    return (
        <div className={Style.container}>
            <div className={Style.header}>
                <Link to={'/'} className={Style.logo}>
                    <div className={Style.rtcLogo}>
                        <img src={LogoRos} alt='logo'/>
                    </div>
                    <span className={Style.title}>Ростелеком к вашим услугам</span>
                </Link>
            </div>
            <form className={Style.formLogin}>
                <h2 className={Style.authHeader}>Авторизация</h2>
                <Input type={'text'} placeholder={'Электронная почта'}/>
                <Input type={'password'} placeholder={'Пароль'}/>
                <ButtonPrimary style={{width: '100%'}}>Войти</ButtonPrimary>
            </form>
        </div>
    );
};

export default Auth;
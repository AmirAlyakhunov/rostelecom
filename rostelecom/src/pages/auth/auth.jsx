import React, {useState} from 'react';
import Style from './auth.module.css';
import {Link, useNavigate} from "react-router-dom";
import {LogoRos} from "../../assets/assets";
import ButtonPrimary from "../../pageComponents/buttons/buttonPrimary";
import Input from "../../pageComponents/input/input";
import LinkTo from "../../pageComponents/buttons/link";
import {useCookies} from "react-cookie";
import axios from "axios";

const Auth = () => {
    const url ='https://rostelekek.herokuapp.com/auth/login';
    const [cookies, setCookie] = useCookies(['access_token']);
    const [errorMessage, setErrorMessage] = useState('');
    const [data, setData] = useState({
        email: '',
        password: '',
    })
    function handle(e){
        const newData = {...data};
        newData[e.target.id] = e.target.value;
        setData(newData);
    }
    let navigate = useNavigate();

    function submit(e) {
        e.preventDefault();
        axios.post(url,  {
            email: data.email,
            password: data.password
        }, {headers: {'Content-Type': 'application/json'}})
            .then(function (response){
                setCookie('access_token', response.data.accessToken, {
                    maxAge: 30 * 24 * 60 * 60,
                    path: '/',
                })
                if(response.status === 201) navigate ('/', {replace: true})
            }).catch((err) => {
            setErrorMessage(err.response.data?.message)
        })
    }

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
            <form autoComplete="off" className={Style.formLogin} onSubmit={(e)=>submit(e)}>
                <h2 className={Style.authHeader}>Авторизация</h2>
                <Input onChange={(e) => handle(e)} id={'email'} value={data.email} type={'text'} placeholder={'Электронная почта'}/>
                <Input onChange={(e) => handle(e)} id={'password'} value={data.password} type={'password'} placeholder={'Пароль'}/>
                <ButtonPrimary style={{width: '100%', height:'48px'}}>Войти</ButtonPrimary>
                <div className={Style.linkContaier}>
                    Нет аккаунта? 
                    <LinkTo src={'/registration'}>Зарегистрироваться</LinkTo>
                </div>
                <p className={Style.error}>{errorMessage}</p>
            </form>
        </div>
    );
};

export default Auth;
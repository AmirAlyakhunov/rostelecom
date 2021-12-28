import React, {useState} from 'react';
import Style from './registration.module.css';
import {Link, useNavigate} from "react-router-dom";
import {LogoRos} from "../../assets/assets";
import Input from "../../pageComponents/input/input";
import ButtonPrimary from "../../pageComponents/buttons/buttonPrimary";
import LinkTo from "../../pageComponents/buttons/link";
import axios from "axios";
import {useCookies} from "react-cookie";
import InputMask from 'react-input-mask';

const Registration = () => {
    const url ='https://rostelekek.herokuapp.com/auth/register';
    const [cookies, setCookie] = useCookies(['access_token']);
    const [errorMessage, setErrorMessage] = useState('');
    const [data, setData] = useState({
        name: '',
        surname: '',
        phone: '',
        email: '',
        password: '',
    })
    function handle(e){
        const newData = {...data};
        newData[e.target.id] = e.target.value;
        setData(newData);
        console.log(newData);
    }
    let navigate = useNavigate();

    function submit(e) {
        e.preventDefault();
        axios.post(url,  {
            name: data.name,
            surname: data.surname,
            phone: data.phone,
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
                <h2 className={Style.authHeader}>Регистрация</h2>
                <Input onChange={(e) => handle(e)} id={'name'} value={data.name} type={'text'} placeholder={'Имя'}/>
                <Input onChange={(e) => handle(e)} id={'surname'} value={data.surname} type={'text'} placeholder={'Фамилия'}/>
                <InputMask className={Style.inputMask} mask="+7 (999) 999-99-99" onChange={(e) => handle(e)} id={'phone'} value={data.phone} placeholder={'Телефон'}/>
                <Input onChange={(e) => handle(e)} id={'email'} value={data.email} type={'text'} placeholder={'Электронная почта'}/>
                <Input onChange={(e) => handle(e)} id={'password'} value={data.password} type={'password'} placeholder={'Пароль'}/>
                <ButtonPrimary style={{width: '100%'}}>Зарегистрироваться</ButtonPrimary>
                <div className={Style.linkContaier}>
                    Уже есть аккаунт? 
                    <LinkTo src={'/login'}>Войти в систему</LinkTo>
                </div>
                <p className={Style.error}>{errorMessage}</p>
            </form>
            {/*<img src={LogoRos} alt='logo' className={Style.logoPattern}/>*/}
        </div>
    );
};

export default Registration;
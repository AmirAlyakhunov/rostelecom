import React, {useState, useEffect} from 'react';
import Style from './header.module.css'
import {IconLocation, IconUser, Logo, LogoRos} from '../../assets/assets';
import {Link, useNavigate} from 'react-router-dom';
import ButtonPrimary from "../../pageComponents/buttons/buttonPrimary";
import {useCookies} from "react-cookie";
import PostService from "../../API/api";
import Account from "../../pageComponents/account/account";

const Header = () => {

    const [cookies, removeCookie] = useCookies(['access_token']);
    const [user, setUser] = useState({});
    const [openAccount, setOpenAccount] = useState(false);

    useEffect(() =>{
        User(cookies.access_token)
    }, []);

    let navigate = useNavigate();
    function HandleClick() {
        navigate('/login');
    }

    async function User() {
        let expDate = atob(cookies.access_token.split('.')[1])
        expDate = JSON.parse(expDate);

        let newDate = new Date(expDate.exp * 1000);
        let today = new Date();
        if (today < newDate) {
            const response = await PostService.getUser(cookies.access_token)
            setUser(response.data)
        }
    }

    function Menu(){
        setOpenAccount(true)
    }

    function MenuClose(){
        setOpenAccount(false)
    }

    function logOut(){
        if (cookies) {
            removeCookie("access_token", '', {path: '/'});
        }
        navigate ('/login')
        setOpenAccount(false)
    }

    return (
        <>
            {
                openAccount === true ? <Account phone={user.phone} email={user.email} menuClose={MenuClose} logOut={logOut}/> : false
            }
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
                    {
                        cookies.access_token ? <button className={Style.account} onClick={Menu}> {user.name} {user.surname} </button> :
                            <ButtonPrimary onClick={HandleClick}>Войти</ButtonPrimary>
                    }
                </div>
            </div>
        </>

    );
}
export default Header;
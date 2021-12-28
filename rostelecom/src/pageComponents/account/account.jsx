import React from 'react';
import Style from './account.module.css';
import {IconClose, IconPhone, IconUser, IconCall, IconMail} from "../../assets/assets";
import ButtonClose from "../buttons/buttonClose";
import ButtonSecondary from "../buttons/buttonSecondary";

const Account = ({phone, email, menuClose, logOut}) => {
    return (
        <div className={Style.container}>
            <div className={Style.headerContainer}>
                <img src={IconUser}/>
                <h2 className={Style.headerTxt}>Мой профиль</h2>
               <ButtonClose onClick={menuClose}/>
            </div>
            <div className={Style.personalDataContainer}>
                <div className={Style.dataRow}>
                    <img src={IconCall}/>
                    <p className={Style.personalData}><strong className={Style.strong}>Номер телефона:</strong> {phone}</p>
                </div>
                <div className={Style.dataRow}>
                    <img src={IconMail}/>
                    <p className={Style.personalData}><strong className={Style.strong}>Электронная почта:</strong> {email}</p>
                </div>
            </div>
            <div className={Style.logOut}>
                <ButtonSecondary style={{width: '100%'}} onClick={logOut}>Выйти</ButtonSecondary>
            </div>

        </div>
    );
};

export default Account;
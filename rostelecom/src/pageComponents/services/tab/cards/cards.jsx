import React from 'react';
import Style from './cards.module.css';
import {IconGlobal, IconPhone, IconPlay, IconScreen, IconTV} from "../../../../assets/assets";
import CardRowCondition from "./cardRowCondition";
import ButtonPrimarySecond from "../../../buttons/buttonPrimarySecond";

const Cards = ({name, internet, tv, mobile, price}) => {

    return (
        <div className={Style.cardContainer}>
            <h3 className={Style.cardTitle}>{name}</h3>
            <div className={Style.cardDescription}>
                <div className={Style.cardConditionsContainer}>
                    <CardRowCondition src={IconGlobal}>{internet}</CardRowCondition>
                    {
                        tv !== null ? <CardRowCondition src={IconTV}>{tv}</CardRowCondition> : false
                    }
                    {
                        mobile !== null ? <CardRowCondition src={IconPhone}>{mobile}</CardRowCondition> : <CardRowCondition src={IconPhone} style={{opacity: '.4'}}>Не включено</CardRowCondition>
                    }
                </div>
                <div className={Style.priceContainer}>
                    <p className={Style.price}>{price}</p>
                    <div className={Style.currency}>
                        <div className={Style.ruble}>руб.</div>
                        <div className={Style.mounth}>мес.</div>
                    </div>
                </div>
            </div>
            <div className={Style.buyBtnContainer}>
                <ButtonPrimarySecond style={{width: '100%'}}>Подключить услугу</ButtonPrimarySecond>
            </div>
        </div>

    );
};

export default Cards;
import React from 'react';
import Style from './cards.module.css';
import {IconGlobal} from "../../../../assets/assets";
import CardRowCondition from "./cardRowCondition";
import ButtonPrimarySecond from "../../../buttons/buttonPrimarySecond";

const Cards = (props) => {


    return (
        <div className={Style.container}>
            <div className={Style.cardContainer}>
                {/*<h3 className={Style.cardTitle}>{props.post.title}</h3>*/}
                <h3 className={Style.cardTitle}>Технологии</h3>
                <div className={Style.cardDescription}>
                    <div className={Style.cardConditionsContainer}>
                        <CardRowCondition src={IconGlobal}>dsds</CardRowCondition>
                        <CardRowCondition src={IconGlobal}>dsds</CardRowCondition>
                        <CardRowCondition src={IconGlobal}>dsds</CardRowCondition>
                    </div>
                    <div className={Style.priceContainer}>
                        <p className={Style.price}>7000</p>
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
        </div>

    );
};

export default Cards;
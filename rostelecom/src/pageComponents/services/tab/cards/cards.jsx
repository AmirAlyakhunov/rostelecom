import React from 'react';
import Style from './cards.module.css';
import {IconCloud, IconGlobal, IconPhone, IconPlay, IconScreen, IconTV} from "../../../../assets/assets";
import CardRowCondition from "./cardRowCondition";
import ButtonPrimarySecond from "../../../buttons/buttonPrimarySecond";
import {useCookies} from "react-cookie";
import {useNavigate, Link} from "react-router-dom";

const Cards = ({id, name, internet, tv, mobile, price, films, video}) => {

    const [cookies] = useCookies(['access_token', 'refresh_token']);

    let navigate = useNavigate();
    function HandleClick() {
        navigate('/login');
    }

    function Nav(){
        navigate(`/service/${id}`);
    }

    return (
        <div className={Style.cardContainer}>
            <h3 className={Style.cardTitle}>{name}</h3>
            <div className={Style.cardDescription}>
                <div className={Style.cardConditionsContainer}>
                    <CardRowCondition src={IconGlobal} service={internet} servicedesc={'Безлимитный интернет'}/>
                    {
                        tv !== null ? <CardRowCondition src={IconTV} service={tv} servicedesc={'Интерактивное ТВ Wink'}/> :  <CardRowCondition src={IconTV} style={{opacity: '.4'}} service={'Не включено'} servicedesc={'Интерактивное ТВ Wink'}/>
                    }
                    {
                        mobile !== null ? <CardRowCondition src={IconPhone} service={mobile} servicedesc={'Мобильная связь'}/> : <CardRowCondition src={IconPhone} style={{opacity: '.4'}} service={'Не включено'} servicedesc={'Мобильная связь'}/>
                    }
                    {
                        films !== null ? <CardRowCondition src={IconPlay} service={films} servicedesc={'Онлайн-кинотеатр Wink'}/> : <CardRowCondition src={IconPlay} style={{opacity: '.4'}} service={'Не включено'} servicedesc={'Онлайн-кинотеатр Wink'}/>
                    }
                    {
                        video !== null ? <CardRowCondition src={IconCloud} service={video} servicedesc={'Видеонаблюдение'}/> : false
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
                {
                    cookies.access_token ? <ButtonPrimarySecond style={{width: '100%'}} onClick={Nav}>Подключить услугу</ButtonPrimarySecond> : <ButtonPrimarySecond style={{width: '100%'}} onClick={HandleClick}>Подключить услугу</ButtonPrimarySecond>
                }

            </div>
        </div>

    );
};

export default Cards;
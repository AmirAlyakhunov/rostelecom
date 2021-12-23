import React from 'react';
import Style from './banner.module.css';

const Banner = () => {
    return (
        <div className={Style.bannerContainer}>
            <div className={Style.bannerImage}/>
            <h1 className={Style.bannerTxt}>Подключите услуги от Ростелекома</h1>
        </div>
    );
};

export default Banner;
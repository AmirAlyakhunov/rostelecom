import React from 'react';
import Style from "./services.module.css";
import Tab from "./tab/tab";
import Cards from "./tab/cards/cards";

const Services = () => {

    return (
        <div className={Style.servicesContainer}>
            <h2 className={Style.title}>Выберите пакет на подключение</h2>
            <Tab/>
            <Cards/>
        </div>
    );
};

export default Services;
import React from 'react';
import Style from "./services.module.css";
import Cards from "./tab/cards/cards";
import TabComponent from "./tab/tab";

const Services = () => {


    return (
        <div className={Style.servicesContainer}>
            <h2 className={Style.title}>Выберите пакет на подключение</h2>
            <TabComponent/>
        </div>
    );
};

export default Services;
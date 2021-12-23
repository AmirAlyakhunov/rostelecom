import React from 'react';
import Banner from "../../pageComponents/banner/banner";
import Style from './body.module.css';
import Services from "../../pageComponents/services/services";

const Body = () => {
    return (
        <div className={Style.container}>
            <Banner/>
            <Services/>
        </div>
    );
};

export default Body;
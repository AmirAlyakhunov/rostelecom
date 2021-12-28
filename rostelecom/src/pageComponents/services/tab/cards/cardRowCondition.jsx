import React from 'react';
import Style from './cards.module.css';

const CardRowCondition = ({service, servicedesc, src, style}) => {
    return (
        <div className={Style.condition} style={style}>
            <img src={src}/>
            <div className={Style.conditionTxt}>
                <p className={Style.conditionName}>{service}</p>
                <p className={Style.conditionSubName}>{servicedesc}</p>
            </div>
        </div>
    );
};

export default CardRowCondition;
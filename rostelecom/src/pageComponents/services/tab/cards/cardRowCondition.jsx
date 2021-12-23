import React from 'react';
import Style from './cards.module.css';

const CardRowCondition = ({children, src}) => {
    return (
        <div className={Style.condition}>
            <img src={src} alt='internet'/>
            <div className={Style.conditionTxt}>
                <p className={Style.conditionName}>{children}</p>
                <p className={Style.conditionSubName}>{children}</p>
            </div>
        </div>
    );
};

export default CardRowCondition;
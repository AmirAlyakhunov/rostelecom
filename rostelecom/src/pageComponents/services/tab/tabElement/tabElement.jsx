import React, {useState} from 'react';
import Style from './tabElement.module.css';

const TabElement = ({id, title, isActiveTab, setActiveTab}) => {

    return (
        <button className={[Style.tabElement, isActiveTab ? Style.tabElementActive : ''].join(' ')} onClick={() => setActiveTab(id)}>{title}</button>
    );
};

export default TabElement;
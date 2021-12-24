import React, {useState} from 'react';
import Style from "./tab.module.css";
import TabElement from "./tabElement/tabElement";

const TabComponent = () => {

    const tab = [
        {id: '3in1', title: 'Комбо 3 в 1'},
        {id: '4in1', title: 'Комбо 4 в 1'},
        {id: '2in1', title: 'Комбо 2 в 1'},
        {id: 'homeInternet', title: 'Домашний интернет'},
        {id: 'video', title: 'Видеонаблюдение'},
    ]

    const [activeTab, setActiveTab] = useState(tab[0].id);

    return (
        <div className={Style.tabContainer}>
            {
                tab.map((tabs) => <TabElement isActiveTab={tabs.id === activeTab} setActiveTab={setActiveTab} id={tabs.id} title={tabs.title} key={tabs.id} />)
            }
        </div>
    );
};

export default TabComponent;
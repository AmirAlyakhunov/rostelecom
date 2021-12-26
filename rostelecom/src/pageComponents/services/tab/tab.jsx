import React, {useEffect, useState} from 'react';
import Style from "./tab.module.css";
import TabElement from "./tabElement/tabElement";
import PostService from "../../../API/api";
import Cards from "./cards/cards";

const TabComponent = () => {

    const tab = [
        {id: '3in1', title: 'Комбо 3 в 1'},
        {id: '4in1', title: 'Комбо 4 в 1'},
        {id: '2in1', title: 'Комбо 2 в 1'},
        {id: 'homeInternet', title: 'Домашний интернет'},
        {id: 'video', title: 'Видеонаблюдение'},
    ]

    const [card, setCard] = useState([])

   useEffect(() => {
       getCards()
   }, [])

   async function getCards() {
        const response = await PostService.getService(activeTab);
        setCard(response.data);
   }

    const [activeTab, setActiveTab] = useState(tab[0].id);
    console.log (activeTab)
    return (
        <>
            <div className={Style.tabContainer}>
                {
                    tab.map((tabs) => <TabElement isActiveTab={tabs.id === activeTab} setActiveTab={setActiveTab} id={tabs.id} title={tabs.title} key={tabs.id}/>)
                }
            </div>
             <div className={Style.container}>
                 {
                     card.map((data) => <Cards data={data} id={data.id} name={data.name} internet={data.internet} tv={data.tv} mobile={data.mobile} price={data.price} key={data.id}/>)
                 }
             </div>

        </>

    );
};

export default TabComponent;
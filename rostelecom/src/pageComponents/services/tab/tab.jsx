import React, {useState} from 'react';
import Style from "./tab.module.css";
import TabElement from "./tabElement/tabElement";

const Tab = () => {
    const [counter, setCounter] = useState(1);
    console.log(counter);
    function func(){
        setCounter(counter + 1);
    }

    return (
        <div className={Style.tabContainer}>
            <TabElement style={{backgroundColor: '#FF4F12', color:'white'}} onClick={func} disabled={true}>Комбо 3 в 1</TabElement>
            <TabElement>Комбо 4 в 1</TabElement>
            <TabElement>Комбо 2 в 1</TabElement>
            <TabElement>Домашний интернет</TabElement>
            <TabElement>Видеонаблюдение</TabElement>
        </div>
    );
};

export default Tab;
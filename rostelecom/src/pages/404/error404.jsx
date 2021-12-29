import React from 'react';
import Style from './error404.module.css';

const Error404 = () => {
    return (
        <div className={Style.container}>
            <div className={Style.title}>К сожалению, мы не смогли найти то, что Вы искали</div>
            <div className={Style.txt}>Возможно, Вы попали на эту страницу по ошибке, либо она была перемещена или удалена.</div>
        </div>
    );
};

export default Error404;
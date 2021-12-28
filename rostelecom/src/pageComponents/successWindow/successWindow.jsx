import React from 'react';
import Style from './successWindow.module.css';
import LinkTo from "../buttons/link";

const SuccessWindow = () => {
    return (
        <div className={Style.container}>
            <div className={Style.title}>Ваша заявка успешно отправлена</div>
            <div className={Style.txt}>В течение часа наши менеджеры свяжутся с Вами для подтверждения выбранной услуги</div>
            <LinkTo src={'/'}>Вернуться на главную</LinkTo>
        </div>
    );
};

export default SuccessWindow;
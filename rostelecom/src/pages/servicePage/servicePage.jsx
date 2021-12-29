import React, {useEffect, useState} from 'react';
import Style from './servicePage.module.css';
import PostService from "../../API/api";
import {useNavigate, useParams, Link} from "react-router-dom";
import CardRowCondition from "../../pageComponents/services/tab/cards/cardRowCondition";
import {IconBack, IconCloud, IconGlobal, IconPhone, IconPlay, IconTV} from "../../assets/assets";
import InputService from "../../pageComponents/inputService/inputService";
import ButtonPrimary from "../../pageComponents/buttons/buttonPrimary";
import axios from "axios";
import {useCookies} from "react-cookie";
import ScrollToTopOnMount from "../../scrollFunction/scrollToTop";
import SuccessWindow from "../../pageComponents/successWindow/successWindow";

const ServicePage = () => {
    const params = useParams();
    const [data, setData] = useState({});
    const [errorMessage, setErrorMessage] = useState('');
    const [cookies] = useCookies(['access_token']);
    const [success, setSuccess] = useState(false);
    const url ='https://rostelekek.herokuapp.com/order';

    useEffect(() => {
        getData()
    }, [])

    const [service, setService] = useState({
        id: '',
        price: '',
        street: '',
        house: '',
        flat: '',
    })
    function handle(e){
        const newData = {...service};
        newData[e.target.id] = e.target.value;
        setService(newData);
    }


    async function getData(){
        const response = await PostService.getById(params.id)
        setData(response.data)
    }

    function submit(e){
        e.preventDefault();

        axios.post(url,  {
            id_service: data.id,
            end_price: data.price,
            street: service.street,
            home: parseInt(service.house),
            flat: parseInt(service.flat),
        }, {headers: {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + cookies.access_token}})
            .then(function (response){
                if(response.status === 201) setSuccess (true)
            }).catch((err) => {
            setErrorMessage(err.response.data?.message)
        })
        console.log(service.house)
    }

    return (
        <div className={Style.container}>
            <ScrollToTopOnMount/>
            {
                success === true ? <SuccessWindow/> : false
            }
            <div className={Style.requestContainer}>
                <div className={Style.leftContainer}>
                    <div className={Style.requestHeader}>Заявка на подключение</div>
                    <div className={Style.requestCity}>Ваш город: Санкт-Петербург</div>
                    <div className={Style.form}>
                        <form autoComplete="off" onSubmit={(e)=>submit(e)}>
                            <InputService onChange={(e) => handle(e)} id={'street'} value={service.street} type={'text'} placeholder={'Улица'}/>
                            <div style={{display: 'flex', flexDirection: 'row', marginBottom: '16px'}}>
                                <InputService style={{marginRight: '40px'}} onChange={(e) => handle(e)} id={'house'} value={service.house} type={'text'} placeholder={'Дом'}/>
                                <InputService onChange={(e) => handle(e)} id={'flat'} value={service.flat} type={'text'} placeholder={'Квартира'}/>
                            </div>
                            <div className={Style.txt}>
                                На Вашу почту будет отправлено письмо c подтверждением обращения
                            </div>
                            <ButtonPrimary>Отправить заявку</ButtonPrimary>
                        </form>
                        <div className={Style.error}>{errorMessage}</div>
                    </div>
                </div>

                <div className={Style.rightContainer}>
                    <div className={Style.requestTitle}>{data.name}</div>
                    <div className={Style.rows}>
                        <CardRowCondition src={IconGlobal} service={data.internet} servicedesc={'Безлимитный интернет'}/>
                        {
                            data.tv !== null ? <CardRowCondition src={IconTV} service={data.tv} servicedesc={'Интерактивное ТВ Wink'}/> :  <CardRowCondition src={IconTV} style={{opacity: '.4'}} service={'Не включено'} servicedesc={'Интерактивное ТВ Wink'}/>
                        }
                        {
                            data.mobile !== null ? <CardRowCondition src={IconPhone} service={data.mobile} servicedesc={'Мобильная связь'}/> : <CardRowCondition src={IconPhone} style={{opacity: '.4'}} service={'Не включено'} servicedesc={'Мобильная связь'}/>
                        }
                        {
                            data.films !== null ? <CardRowCondition src={IconPlay} service={data.films} servicedesc={'Онлайн-кинотеатр Wink'}/> : <CardRowCondition src={IconPlay} style={{opacity: '.4'}} service={'Не включено'} servicedesc={'Онлайн-кинотеатр Wink'}/>
                        }
                        {
                            data.video !== null ? <CardRowCondition src={IconCloud} service={data.video} servicedesc={'Видеонаблюдение'}/> : false
                        }
                    </div>
                    <>
                        <div className={Style.requestTitle}>Стоимость тарифа</div>
                        <div className={Style.price}>
                            {data.price} руб./мес.
                        </div>
                    </>
                </div>
            </div>
            <Link to={'/'} className={Style.back}> <img src={IconBack} style={{marginRight: '16px'}}/> Вернуться к выбору тарифа</Link>
        </div>
    );
};

export default ServicePage;
import React from 'react';
import ButtonApp from '../NavBar/components/ButtonApp';
import styled from 'styled-components';


const CoinPayCard = () => {
    return (
        <PayCard>
            <div className='paycard-container' id='CoinPayCard'>
                <div className='image-container'>
                    <div className='circle'></div>
                    <img className='card-coinpay' src="https://i.ibb.co/M8mr4VM/cart.png" alt="cart-coinpay" />
                    <div className='circle2'></div>
                </div>
                <div className='text-container'>
                    <p className='name-p'>COINPAY CARD</p>
                    <h2>Paga con libertad usando nuestra tarjeta crypto</h2>
                    <ButtonApp />
                    <p className='more-info'>Para más información visitá los <span> terminos y condiciones. </span> </p>
                </div>
            </div>
        </PayCard>
    );
};

export default CoinPayCard;

const PayCard = styled.div`
    display: flex;
    background-color: ${({theme}) => theme.bgc};
    gap: 3rem;
    justify-content: center;
    align-items: center;
    background-image: url(../../../public/object.svg);
    background-position: -175px 180px;
    background-repeat: no-repeat;
    background-size: 200%;
    padding-top: max(80px,7.6003125vw);
    padding-bottom: max(10px,0.6909375vw);
    overflow: visible;
    z-index: 12;
    position: relative;
    min-height: 100vh;
    .paycard-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 3rem;
    }
    .text-container{
        color: ${({theme}) => theme.text};
        display: flex;
        flex-direction: column;
        justify-content: center;
        //width: 50%;
        margin-left: 1rem;
    }
    .card-coinpay{
        width: 300px;
        top: -50px;
    }
    .image-container{
        display: flex;
        img{
            position: relative;
            z-index: 10;
            margin: 0 auto;
            width: max(344px,29.29575vw)!important;
            height: max(466px,37.7251875vw);
            position: relative;
            animation-name: animation-cart;
            animation-duration: 2s;
            animation-iteration-count: infinite;
        }
        @keyframes animation-cart {
            0% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.04);
            }
            100% {
                transform: scale(1);
            }
        }
        .circle{
            position: absolute;
            top: 25%;
            right: 50%;
            left: 50%;
            transform: translate(-50%,-40%) rotate(-20deg);
            z-index: 0;
            border: 0.103640625vw solid ${({theme}) => theme.terciary};
            border-radius: 100%;
            width: 80%;
            height: 32vh;
        }
        .circle2{
            position: absolute;
            top: 25%;
            left: 50%;
            transform: translate(-50%,-40%) rotate(-25deg);
            z-index: 0;
            border: 0.103640625vw solid ${({theme}) => theme.terciary};
            border-radius: 100%;
            width: 80%;
            height: 32vh;
        }
    }
    h2{
        color: ${({theme}) => theme.terciary};
        font-size: 3rem;
        font-family: 'Poppins', sans-serif;
        line-height: 1;
        font-weight: 700;
    }
    .name-p{
        margin: 0 0 max(12px,1.03640625vw);
        text-transform: uppercase;
        font-size: max(12px,1.1055vw);
        font-weight: 400;
    }
    .more-info{
        margin-top: 2rem;
        span{
            text-decoration: underline;
        }
    }
    @media (min-width: 464px) {
        .card-coinpay {
            width: 300px;
            top: -70px;
        }
    }
    @media (min-width: 900px) {
        .image-container{
            img {
                top: -10px;
            }
        }
        .paycard-container {
            flex-direction: row;
            justify-content: flex-start;
            flex-basis: 80%;
            flex-grow: 0;
        }
        .circle {
            max-width: 30%!important;
            top: 50%!important;
            left: 24%!important;
        }
        .circle2 {
            max-width: 30%!important;
            top: 50%!important;
            left: 24%!important;
        }
        .card-coinpay {
            width: 600px!important;
            top: -80px;
        }
    }
`

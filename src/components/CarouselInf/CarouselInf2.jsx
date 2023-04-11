import React from 'react';
import styled, { keyframes } from 'styled-components';

const CarouselInf2 = () => {
    const images = [
        {id: '1', img: 'https://i.ibb.co/CQngzds/ripio.png'},
        {id: '2', img: 'https://i.ibb.co/d06m5Ts/shapeshift.png'},
        {id: '3', img: 'https://i.ibb.co/FhVxK21/trezor.png'},
        {id: '4', img: 'https://i.ibb.co/DwhVBnB/VISA.png'},
        {id: '5', img: 'https://i.ibb.co/ySyZFJS/binance.png'},
        {id: '6', img: 'https://i.ibb.co/y8dHmK3/BITFINEX.png'},
        {id: '7', img: 'https://i.ibb.co/PhJd6yp/Bitmain.png'},
        {id: '8', img: 'https://i.ibb.co/CQngzds/ripio.png'},
        {id: '9', img: 'https://i.ibb.co/d06m5Ts/shapeshift.png'},
        {id: '10', img: 'https://i.ibb.co/FhVxK21/trezor.png'},
        {id: '11', img: 'https://i.ibb.co/DwhVBnB/VISA.png'},
        {id: '12', img: 'https://i.ibb.co/ySyZFJS/binance.png'},
        {id: '13', img: 'https://i.ibb.co/y8dHmK3/BITFINEX.png'},
        {id: '14', img: 'https://i.ibb.co/PhJd6yp/Bitmain.png'},
        {id: '15', img: 'https://i.ibb.co/CQngzds/ripio.png'},
        {id: '16', img: 'https://i.ibb.co/d06m5Ts/shapeshift.png'},
        {id: '17', img: 'https://i.ibb.co/FhVxK21/trezor.png'},
        {id: '18', img: 'https://i.ibb.co/DwhVBnB/VISA.png'}
    ]

    return (
    <Carousel className='body'>
        <div class="slider">
            <div class="slide-track">
                {
                    images.map(mark =>
                        <div class="slide" key={mark.id}>
                            <img src={mark.img} height="100" width="250" alt="" />
                        </div>
                )}
            </div>
        </div>
    </Carousel>
    );
};

export default CarouselInf2;

const whiteGradient = () => `
    background: linear-gradient( to right, #00c3ff 1%, rgba(255, 255, 255, 0) 100%);
`;

const animationSpeed = '15s';

const scroll = keyframes`
    0% {
        transform: translateX(calc(-112.5px * 7));
    }
    100% {
        transform: translateX(0);
    }
`;

const Carousel = styled.div`
    background: linear-gradient( to right, #00c3ff 1%, rgba(255, 255, 255, 0) 100%);
    align-items: center;
    background: #00c3ff;
    display: flex;
    justify-content: center;

    .slider {
        background: #00c3ff;
        box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.125);
        margin: auto;
        overflow: hidden;
        position: relative;

        &::before,
        &::after {
            ${whiteGradient}
            content: "";
            height: 100px;
            position: absolute;
            width: 100px;
            z-index: 2;
        }

        &::after {
            right: 0;
            top: 0;
            transform: rotateZ(180deg);
        }

        &::before {
            left: 0;
            top: 0;
        }

        .slide-track {
            animation: ${scroll} ${animationSpeed} linear infinite;
            display: flex;
            width: calc(112.5px * 14);
        }

        .slide {
            height: 45px;
            width: 112.5px;

            img {
                height: 45px;
                width: 112.5px;
            }
        }
    }
`;
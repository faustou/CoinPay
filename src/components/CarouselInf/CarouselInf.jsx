import React from 'react';
import styled, { keyframes } from 'styled-components';

const CarouselInf = () => {
    const images = [
        {id: '1', img: 'https://i.ibb.co/Mf9H08s/BitPay.png'},
        {id: '2', img: 'https://i.ibb.co/HXF9KxX/BlockFi.png'},
        {id: '3', img: 'https://i.ibb.co/FBLKkSn/Crypto.png'},
        {id: '4', img: 'https://i.ibb.co/XVm6sv7/Etoro.png'},
        {id: '5', img: 'https://i.ibb.co/vxk0vjh/Globant.png'},
        {id: '6', img: 'https://i.ibb.co/61WrrCz/Google.png'},
        {id: '7', img: 'https://i.ibb.co/cvkmks3/Mercado-Libre.png'},
        {id: '8', img: 'https://i.ibb.co/9rBJ2LK/Paxful.png'},
        {id: '9', img: 'https://i.ibb.co/Mf9H08s/BitPay.png'},
        {id: '10', img: 'https://i.ibb.co/HXF9KxX/BlockFi.png'},
        {id: '11', img: 'https://i.ibb.co/FBLKkSn/Crypto.png'},
        {id: '12', img: 'https://i.ibb.co/XVm6sv7/Etoro.png'},
        {id: '13', img: 'https://i.ibb.co/vxk0vjh/Globant.png'},
        {id: '14', img: 'https://i.ibb.co/61WrrCz/Google.png'},
        {id: '15', img: 'https://i.ibb.co/cvkmks3/Mercado-Libre.png'},
        {id: '16', img: 'https://i.ibb.co/9rBJ2LK/Paxful.png'},
        {id: '17', img: 'https://i.ibb.co/Mf9H08s/BitPay.png'},
        {id: '18', img: 'https://i.ibb.co/HXF9KxX/BlockFi.png'}
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

export default CarouselInf;

const whiteGradient = () => `
    background: linear-gradient( to right, #9400D3 1%, rgba(255, 255, 255, 0) 100%);
`;

const animationSpeed = '6s';

const scroll = keyframes`
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(calc(-75px * 8));
    }
`;

const scrollM = keyframes`
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(calc(-125px * 8));
    }
`;

const scrollL = keyframes`
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(calc(-225px * 8));
    }
`;

const Carousel = styled.div`
    background: linear-gradient( to right, #9400D3 1%, rgba(255, 255, 255, 0) 100%);
    align-items: center;
    background: green;
    display: flex;
    justify-content: center;

    .slider {
        background: green;
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
            width: 200px;
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
            width: calc(75px * 14);
        }

        .slide {
            height: 30px;
            width: 75px;

            img {
                height: 30px;
                width: 75px;
            }
        }
        @media (min-width: 768px) {
            .slide-track {
            animation: ${scrollM} 8s linear infinite;
            width: calc(125px * 14);
        }
            .slide {
            height: 50px;
            width: 125px;

            img {
                height: 50px;
                width: 125px;
            }
        }
        }
        @media (min-width: 1281px) {
            .slide-track {
            animation: ${scrollL} 10s linear infinite;
            width: calc(225px * 14);
        }
            .slide {
            height: 90px;
            width: 225px;

            img {
                height: 90px;
                width: 225px;
            }
        }
        }
    }
`;
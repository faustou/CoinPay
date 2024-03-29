import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled, { keyframes } from 'styled-components';

const LinearCoins = () => {
    const [coins, setCoins] = useState([])
    const getData = async () => {
        const res = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`)
        setCoins(res.data)
    }
    useEffect(() => {
        getData()
    }, [])

    return (
        <LinearCarousel className='body'>
            <div class="slider">
                {
                <div class="slide-track">
                    {
                        coins.map(coin =>
                            <div class="slide" key={coin.id}>
                                <img src={coin.image} height="18" width="18" alt={coin.name} />
                                <p className='symbolCoin text-uppercase'>{coin.symbol} </p>
                                <p className={coin.price_change_percentage_24h > 0 ? 'text-success' : 'text-danger'}> ${(coin.current_price).toFixed(2)} </p>
                            </div>
                    )}
                </div>
                }
            </div>
        </LinearCarousel>
    );
};

export default LinearCoins;

const whiteGradient = () => `
    background: linear-gradient( to right, #9400D3 1%, rgba(255, 255, 255, 0) 100%);
`;

const animationSpeed = '95s';

const scroll = keyframes`
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(calc(-90px * 100));
    }
`;

const LinearCarousel = styled.div`
    background: linear-gradient( to right, #9400D3 1%, rgba(255, 255, 255, 0) 100%);
    align-items: center;
    background: #9400D3;
    display: flex;
    justify-content: center;

    .slider {
        background: ${({theme}) => theme.primary};
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
            width: 40px;
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
            gap: 0.8rem;
            width: calc(90px * 100);
        }

        .slide {
            display: flex;
            text-align: center;
            align-items: center;
            justify-content: center;
            font-size: 0.8rem;
            gap: 0.5rem;
            height: 30px;
            border-radius: 5%;
            margin: 0 0.5rem 0 0.5rem;
            font-weight: 700;
            img {
                height: 18px;
                width: 18px;
            }
            p {
                margin: 0!important;
            }
            .symbolCoin {
                font-weight: 700;
            }
        }
    }
        @media (min-width: 768px) {
            .slider{
                .slide-track {
                    animation: ${scroll} 75s linear infinite;
                    gap: 2.2rem;
                }
                .slide {
                    font-size: 0.8rem;
                }
            }
        }

        @media (min-width: 1281px) {
            .slider{
                .slide-track {
                    gap: 4rem;
                }
                .slide {
                    font-size: 1rem;
                }
                }
        }
`;
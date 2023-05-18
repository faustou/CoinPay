import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import FourCrypto from './FourCrypto';


const TrackAndTrade = () => {
    
    const [coins, setCoins] = useState([])
    const getData = async () => {
        const res = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4&page=1&sparkline=false&locale=en`)
        setCoins(res.data)
    }
    console.log(coins)
    useEffect(() => {
        getData()
    }, [])

    return (
        <TrackContainer className='d-flex flex-column align-items-center justify-content-center'>
            <div className='cont-trade'>
                <p className='title-track text-center'>
                    <span> TRACK AND </span>
                    <span> TRADE </span>
                    <span className='spanBottom'> CRYPTO </span>
                    <span className='spanBottom'> CURRENCIES </span>
                </p>
                <img className='icon-mov-top' src="https://static.vecteezy.com/system/resources/previews/010/849/972/original/3d-illustration-ethereum-logo-png.png" alt="ethereum" />
                <img className='icon-mov' src="https://www.cryptomkt.com/static/landing/img/crypto-pages/BTC.png" alt="bitcoin" />
            </div>
            <FourCrypto coins={coins} />
        </TrackContainer>
    );
};

export default TrackAndTrade;

const TrackContainer = styled.div`
    height: 110vh;
    align-items: center;
    background-color: black;
    color: white;
    padding-top: 2rem;
    // animation
    @keyframes icon-animation{
        0% {
            transition: 0px 0px;
        }
        50% {
            translate: 0px 30px;
        }
        100% {
            translate: 0px 0px;
        }
    }    
    .cont-trade{
        @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
        height: 280px;
        margin-bottom: 1rem;
        letter-spacing: 0.55rem;
        font-family: 'Poppins', sans-serif;
        p span {
            display: block;
            width: 250px;
        }
        p .spanBottom {
            color: #00c3ff;
        }
    }
    .icon-mov-top {
        height: 80px;
        position: relative;
        top: -210px;
        left: 220px;
        overflow: hidden;
        animation: icon-animation 5s ease-in-out infinite;
    }
    .icon-mov {
        height: 80px;
        position: relative;
        top: -210px;
        left: -130px;
        overflow: hidden;
        animation: icon-animation 5s ease-in-out infinite;
    }
    .title-track{
        color: #00c3ff;
        font-size: 2.8rem;
        font-weight: 900;
        span{
            font-size: 2,8rem;
            color: #9400D3;
        }
    }
    @media(min-width: 700px) {
        .cont-trade {
            margin-bottom: 0rem;
            p span {
                display: flex;
                justify-content: center;
                width: 550px;
            }
            .title-track{
                font-size: 4.2rem;
            }
        }
        .icon-mov {
            top: -290px;
            left: 350px;
        }
        .icon-mov-top {
            top: -290px;
            left: 60px;
        }
    }
    @media(min-width: 970px) {
        .title-track span{
                font-size: 5.2rem;
            }
        .icon-mov {
            top: -390px;
            left: 370px;
            height: 140px;
        }
        .icon-mov-top {
            top: -390px;
            left: -70px;
            height: 140px;
        }
    }
    @media(min-width: 1500px) {
        .title-track span{
                font-size: 5.6rem;
            }
    }
`
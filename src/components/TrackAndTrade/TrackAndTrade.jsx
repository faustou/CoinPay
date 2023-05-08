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
                    TRACK AND TRADE 
                    <br />
                    <span> CRYPTO CURRENCIES </span>
                </p>
                <img className='icon-mov-top' src="https://static.vecteezy.com/system/resources/previews/010/849/972/original/3d-illustration-ethereum-logo-png.png" alt="" />
                <img className='icon-mov' src="https://www.cryptomkt.com/static/landing/img/crypto-pages/BTC.png" alt="" />
            </div>
            <FourCrypto coins={coins} />
        </TrackContainer>
    );
};

export default TrackAndTrade;

const TrackContainer = styled.div`
    height: 85vh;
    align-items: center;
    background-color: black;
    color: white;
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
        margin-bottom: 2rem;
        letter-spacing: 0.55rem;
        font-family: 'Poppins', sans-serif;
    }
    .icon-mov-top {
        height: 80px;
        position: relative;
        top: -220px;
        left: 290px;
        overflow: hidden;
        animation: icon-animation 5s ease-in-out infinite;
    }
    .icon-mov {
        height: 80px;
        position: relative;
        top: -210px;
        left: -70px;
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
`
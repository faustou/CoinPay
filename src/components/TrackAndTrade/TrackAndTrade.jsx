import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import FourCrypto from './FourCrypto';
import { useTranslation } from "react-i18next";


const TrackAndTrade = () => {
    const[t] = useTranslation("global");
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
                    <span> {t("TrackAndTrade.span1")} </span>
                    <span> {t("TrackAndTrade.span2")} </span>
                    <span className='spanBottom'> {t("TrackAndTrade.span3")} </span>
                    <span className='spanBottom'> {t("TrackAndTrade.span4")} </span>
                </p>
            </div>
            <FourCrypto coins={coins} />
        </TrackContainer>
    );
};

export default TrackAndTrade;

const TrackContainer = styled.div`
    height: 115vh;
    align-items: center;
    background-color: ${({theme}) => theme.bgc};
    padding-top: 2rem;
    .cont-trade{
        @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
        height: 280px;
        margin-bottom: 1rem;
        letter-spacing: 0.55rem;
        font-family: 'Poppins', sans-serif;
        p span {
            display: block;
            width: 250px;
            color: #FFD6E8;
            text-shadow: 2px 2px 4px black;
        }
        p .spanBottom {
            color: ${({theme}) => theme.primary};
        }
    }
    .title-track{
        color: #FFD6E8;
        font-size: 4.2rem;
        font-weight: 900;
        font-family: 'Tusker Grotesk';
        line-height: 1;
        text-transform: uppercase;
        padding-bottom: 4rem;
        span{
            font-size: 2,8rem;
            color: #FFD6E8;
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
                font-size: 8rem;
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
                font-size: 9rem;
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
                font-size: 8.3rem;
        }
        .icon-mov {
            top: -370px;
            left: 340px;
            height: 170px;
        }
        .icon-mov-top {
            top: -370px;
            left: -95px;
            height: 170px;
        }
    }
`
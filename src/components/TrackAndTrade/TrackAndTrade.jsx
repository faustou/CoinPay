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
        <TrackContainer className='bg-dark container d-flex flex-column align-items-center justify-content-center'>
            <div>
                <img src="" alt="" />
                <p className='title-track text-center'>
                    TRACK AND TRADE 
                    <br />
                    <span> CRYPTO CURRENCIES </span>
                </p>
                <img src="" alt="" />
            </div>
            <FourCrypto coins={coins} />
        </TrackContainer>
    );
};

export default TrackAndTrade;

const TrackContainer = styled.div`
    height: 75vh;
    .title-track{
        color: white;
        font-size: 3rem;
        span{
            font-size: 3rem;
            color: green;
        }
    }
`
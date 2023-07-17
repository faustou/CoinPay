import React from 'react';
import styled from 'styled-components';

const CoinRow = ({coin}) => {
    return (
        <Coin key={coin.name} valign="middle">
            <td className='nameCoin'> 
                <img src={coin.image} alt={coin.name} className='me-2 img-fluid img-table' />
                <span>
                {coin.name} 
                </span>
                <span className='ms-2 text-muted text-uppercase symbolCoin'>{coin.symbol}</span>
            </td>
            <td>$ {Number((coin.current_price).toFixed(2))} </td>
            <td className={coin.price_change_percentage_24h > 0 ? 'text-success' : 'text-danger'}>
                 {Number((coin.price_change_percentage_24h).toFixed(2))}%
            </td>
            <td> ${(coin.total_volume).toLocaleString("es-ES")} </td>
        </Coin>
    );
};

export default CoinRow;

const Coin = styled.tr`
    white-space: nowrap;
    font-weight: 600;
    text-align: center;
    color: ${({theme}) => theme.terciary};
    vertical-align: middle;
    .symbolCoin {
        font-size: 0.5rem;
        font-weight: 700;
    }
    .img-table {
        width: 15%;
        max-width: 20px;
    }
    .nameCoin {
        min-width: 130px;
        font-size: 8px;
        text-align: start;
    }
    @media (min-width: 464px) {
        .symbolCoin {
            font-size: 0.5rem;
        }
        .nameCoin {
            font-size: 0.6rem;
        }
    }
    @media (min-width: 768px) {
        font-size: 1rem;
        .img-table {
            width: 25%;
            max-width: 40px;
        }
        .nameCoin {
            min-width: 130px;
            font-size: 1rem;
        }
        .symbolCoin {
            font-size: 1rem;
            font-weight: 700;
        }
    }

`
import React from 'react';
import styled from 'styled-components';

const CoinRow = ({coin, index}) => {
    return (
        <Coin key={coin.name}>
            <td className='nameCoin'> 
                <img src={coin.image} alt={coin.name} className='me-2 img-fluid img-table' />
                <span>
                {coin.name} 
                </span>
                <span className='ms-2 text-muted text-uppercase symbolCoin'>{coin.symbol}</span>
            </td>
            <td>$ {coin.current_price} </td>
            <td className={coin.price_change_percentage_24h > 0 ? 'text-success' : 'text-danger'}>
                 {parseFloat(coin.price_change_percentage_24h)}
            </td>
            <td> {coin.total_volume} </td>
        </Coin>
    );
};

export default CoinRow;

const Coin = styled.tr`
    white-space: nowrap;
    font-weight: 600;
    color: white;
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
    }

`
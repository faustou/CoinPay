import React from 'react';

const FourCrypto = ({coins}) => {
    return (
        <div className='d-flex text-center'>
            {
                coins.map(coin => (
                    <div key={coin.name}>
                        <img src={coin.image} alt={coin.image} style={{maxWidth:'335px', width:'60%'}} className='me-4 img-fluid' />
                        <p>
                            {coin.name} 
                            <span className={coin.price_change_percentage_24h > 0 ? 'text-success' : 'text-danger'}>
                                {coin.price_change_percentage_24h}
                            </span>
                        </p>
                        <p>$ {coin.current_price}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default FourCrypto;
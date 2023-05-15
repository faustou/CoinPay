import React from 'react';

const FourCrypto = ({coins}) => {
    return (
        <div className='d-flex text-center overflow-hidden'>
            {
                coins.map(coin => (
                    <div key={coin.name} className='d-flex row align-items-center justify-content-center'>
                        <img src={coin.image} alt={coin.image} style={{maxWidth:'335px', width:'60px'}} className='img-fluid' />
                        <p className='mt-2 fw-medium'>
                            {coin.name} 
                        </p>
                        <div>
                            <p className='text-muted text-uppercase' style={{fontSize: '10px', textAlign: 'center', marginBottom: '0'}}>PRICE</p>
                            <p className={coin.price_change_percentage_24h > 0 ? 'text-success' : 'text-danger'}>$ {coin.current_price}</p>
                        </div>
                        <div className='pb-5'>
                            <p className='text-muted text-uppercase' style={{fontSize: '10px', textAlign: 'center', marginBottom: '0'}}>CHANGE 24H</p>
                            <p className={coin.price_change_percentage_24h > 0 ? 'text-success' : 'text-danger'}>{(coin.price_change_percentage_24h).toFixed(2)}%</p>
                        </div>
                        
                    </div>
                ))
            }
        </div>
    );
};

export default FourCrypto;
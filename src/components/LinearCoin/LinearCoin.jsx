import React from 'react';
import coins from '../../Coins.js';

const LinearCoin = () => {
    return (
        <div>
            {
                coins.map(coin => (
                    <div key={name}>
                        <p>name</p>
                        <img src="" alt="" />
                    </div>
                ))
            }
            <img src="../public/img/tether.svg" alt="" />
        </div>
    );
};

export default LinearCoin;
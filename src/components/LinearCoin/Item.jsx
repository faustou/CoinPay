import React from 'react';

const Item = () => {
    return (
        <div key={Coins.name}>
            <img className='w-25' src={Coins.image} alt={Coins.name} />
            <h2> {Coins.name} </h2>
        </div>
    );
};

export default Item;
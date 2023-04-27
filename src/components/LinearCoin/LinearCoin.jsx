import React from 'react';
import styled, { keyframes } from 'styled-components';
import Carousel from 'react-multi-carousel';
import { Coins } from '../../Coins.js';

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const LinearCoin = () => {
    return (
        <Carousel responsive={responsive}>
            <CoinCarousel className='cart-carrusel d-flex justify-content-center align-items-center flex-column'>
                {
                    Coins.map(Coins =>
                        <div key={Coins.name} className=''>
                            <img className='w-100' src={Coins.image} alt="" />
                            <h2> {Coins.name} </h2>
                        </div>
                )}
            </CoinCarousel>
        </Carousel>
    );
};

export default LinearCoin;

const CoinCarousel = styled.div`
.cart-carrusel{
    margin: 2rem;
}
.cart-carrusel img{
    width: 340px;
}
.cart-carrusel h2{
    background-color: rgba(255, 255, 255, 0.6);
    padding: 5px;
    color: black;
    font-weight: 800;
    font-size: 1.5rem;
    position: absolute;
    bottom: 105px;
    left: 30px;
}
.sex-carrusel{
    background-color: rgba(255, 255, 255, 0.6);
    border-top: #de4f21 10px solid;
    padding: 5px;
    color: black;
    font-size: 1.5rem;
    position: absolute;
    bottom: 55px;
    left: 30px;
}

.carruseles-items{
    margin-top: 4rem;
}
`
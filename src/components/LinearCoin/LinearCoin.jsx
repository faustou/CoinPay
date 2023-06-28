import React from 'react';
import styled from 'styled-components';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { Coins } from '../../Coins.js';


const responsive = {
    desktopLarge: {
        breakpoint: { max: 3000, min: 1500 },
        items: 6,
        slidesToSlide: 1
      },
    desktop: {
      breakpoint: { max: 1500, min: 1024 },
      items: 4,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 700 },
      items: 3,
      slidesToSlide: 2
    },
    tabletSmall: {
        breakpoint: { max: 700, min: 464 },
        items: 2,
        slidesToSlide: 2
      },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1.3,
      slidesToSlide: 1.3
    }
  };

const LinearCoin = () => {
    return (
        <>
            <Carousel responsive={responsive} removeArrowOnDeviceType={["tablet", "mobile"]} infinite={true} autoPlay={true} shouldResetAutoplay={true} autoPlaySpeed={2000}>
                    {
                        Coins.map(Coins =>
                            <CoinCarousel key={Coins.name}>
                                <div className='contenedorCoin'>
                                    <h2 className='symbolCoin'> {Coins.symbol} </h2>
                                    <img className='w-75' src={Coins.image} alt={Coins.name} />
                                    <h2 className='symbolName'>  {Coins.name} </h2>
                                </div>
                            </CoinCarousel>
                    )}
            </Carousel>
            <SwipeContainer>
                <img className='arrowLeft' src="https://i.ibb.co/pZN4fqz/arrow.png" alt="arrow" />
                <img className='swipe' src="https://i.ibb.co/26gf9SC/swipe.png" alt="Swipe" />
                <img src="https://i.ibb.co/pZN4fqz/arrow.png" alt="arrow" />
            </SwipeContainer>
        </>
    );
};

export default LinearCoin;

const SwipeContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: ${props => props.theme.colors.secondary};
    padding-bottom: 1rem;
    .arrowLeft {
        transform: rotate(180deg);
    }
    .swipe {
        height: 75px;
    }
    img {
        height: 50px;
    }
    @media (min-width: 1024px) {
        display: none;
    }
`

const CoinCarousel = styled.div`
    background-color: ${props => props.theme.colors.secondary};
    padding: 3rem 0 3rem 0;
    .contenedorCoin{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 90%;
        max-width: 250px!important;
        height: 350px;
        background-color: ${props => props.theme.colors.primary};
        margin-left: 1.5rem;
        border-radius: 1rem;
        align-items: start;
        &:hover {
            box-shadow: max(10px,0.6909375vw) max(14px,0.9673125vw) 0 0 ${props => props.theme.colors.tertiary};
        }
        .symbolCoin {
            margin-top: 1rem;
            margin-left: 1rem;
            font-weight: 800;
            font-size: 1.8rem;
        }
        .symbolName {
            margin-top: 1rem;
            margin-left: 1rem;
            font-size: 1.8rem;
            font-weight: 800;
        }
        img {
            max-width: 200px!important;
            align-self: center;
        }
    }
    @media (min-width: 1200px) {

    }
`
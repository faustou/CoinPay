import React from 'react';
import styled from 'styled-components';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { useTranslation } from "react-i18next";
import { Coins } from '../../Coins.js';


const responsive = {
    desktopLarge: {
        breakpoint: { max: 3000, min: 1500 },
        items: 5,
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
    const[t] = useTranslation("global");
    return (
        <div id='Earn'>
            <TittleLineaCoin>
                <h2>
                    <span> {t("LinearCoin.tittle")} </span>
                    {t("LinearCoin.span")}
                </h2>
            </TittleLineaCoin>
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
        </div>
    );
};

export default LinearCoin;

const TittleLineaCoin = styled.div`
    display: flex;
    flex-direction: row;
    color: ${({theme}) => theme.terciary};
    h2 {
        font-family: 'Tusker Grotesk';
        text-align: start;
        line-height: 1;
        text-transform: uppercase;
        margin-top: 2rem;
        margin-left: 2rem;
        font-size: 5rem;
        font-weight: 900;
        margin-right: 6rem;
        margin-bottom: 1rem;
    }
    h2 span {
            font-size: 6.8rem;
    }
    @media (min-width: 632px) {
        justify-content: center;
        h2 {
            font-size: 6.6rem;
            margin: 6rem 0 2rem 0;
        }
        h2 span {
            font-size: 6.6rem;
    }
    }
    @media (min-width: 1150px) {
        h2 {
            font-size: 9rem;
        }
        h2 span {
            font-size: 9rem;
        }
    }
    @media (min-width: 1500px) {
        h2 {
            font-size: 12rem;
        }
        h2 span {
            font-size: 12rem;
        }
    }
`

const SwipeContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: ${({theme}) => theme.bgc};
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
    background-color: ${({theme}) => theme.bgc};
    padding: 3rem 0 3rem 0;
    .contenedorCoin{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 90%;
        max-width: 250px!important;
        height: 350px;
        background-color: ${({theme}) => theme.primary};
        margin-left: 1.5rem;
        border-radius: 1rem;
        align-items: start;
        color: ${({theme}) => theme.hover};
        border: ${({theme}) => theme.terciary} 4px solid;
        &:hover {
            box-shadow: max(10px,0.6909375vw) max(14px,0.9673125vw) 0 0 ${({theme}) => theme.hover};
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
    @media (min-width: 1500px) {
        .contenedorCoin {
            max-width: 350px!important;
            height: 450px;
            width: 85%;
        }
    }
`
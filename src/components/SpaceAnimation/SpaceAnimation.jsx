import React from 'react';
import styled from 'styled-components';

const SpaceAnimation = () => {
    return (
        <AnimationSpace id='home'>
            <img className='cicle-ethe' src="https://i.ibb.co/0mbTwjJ/ethe.png" alt="" />
            <img className='cicle-ethe-sm' src="https://i.ibb.co/0mbTwjJ/ethe.png" alt="" />
            <img className='cicle-slp' src="https://i.ibb.co/V06PTJY/slp.png" alt="" />
            <img className='cicle-slp-sm' src="https://i.ibb.co/V06PTJY/slp.png" alt="" />
            <img className='cicle-doge' src="https://i.ibb.co/h72LcWh/doge.png" alt="" />
            <img className='cicle-doge-md' src="https://i.ibb.co/h72LcWh/doge.png" alt="" />
            <img className='cicle-doge-sm' src="https://i.ibb.co/h72LcWh/doge.png" alt="" />
        </AnimationSpace>
    );
};

export default SpaceAnimation;

const AnimationSpace = styled.div`
    height: 150vh;
    width: 100%;
    position: relative;
    z-index: 18;
    background: radial-gradient(circle, black 20%,#9400D3 100%);
    background-size: 700% 700%;
    animation: color 17s ease-in-out infinite;
    overflow: hidden;
    @keyframes color{
        0%{
            background-position: 0 50%;
        }
        50%{
            background-position: 100% 50%;
        }
        100%{
            background-position: 0 50%;
        }
    }
    img {
        z-index: -10;
        position: absolute;
        animation-name: cicle-anim;
        animation-duration: 20s;
        animation-iteration-count: infinite;
    }
    .cicle-ethe {
        bottom: 70%;
        left: -5%;
        max-width: 250px;
        animation-name: cicle-anim-two;
    }
    .cicle-ethe-sm {
        bottom: 0%;
        left: 65%;
        max-width: 200px;
        animation-name: cicle-anim-two;
    }
    .cicle-doge {
        bottom: 73%;
        left: 45%;
        max-width: 280px;
    }
    .cicle-doge-sm {
        bottom: -1%;
        left: 30%;
        transform: rotate(-60deg);
        max-width: 90px;
        animation-name: cicle-anim-one;
    }
    .cicle-doge-md {
        bottom: 45%;
        left: -1%;
        max-width: 150px;
        animation-name: cicle-anim-two;
    }
    .cicle-slp {
        bottom: 8%;
        left: -20%;
        max-width: 190px;
    }
    .cicle-slp-sm {
        bottom: 40%;
        left: 40%;
        max-width: 200px;
        animation-name: cicle-anim-one;
    }
    @keyframes cicle-anim {
            0% {
                translate: 0px -18px;
            }
            20% {
                translate: 20px 10px;
            }
            40% {
                translate: 40px 30px;
            }
            60% {
                translate: 65px 20px;
            }
            80% {
                translate: -12px 0px;
            }
            100% {
                translate: 0px -18px;
            }
        }
        @keyframes cicle-anim-one {
            0% {
                translate: 20px 0px;
            }
            20% {
                translate: -20px -10px;
            }
            40% {
                translate: -40px -30px;
            }
            60% {
                translate: 5px -10px;
            }
            80% {
                translate: 40px 20px;
            }
            100% {
                translate: 20px 0px;
            }
        }
        @keyframes cicle-anim-two {
            0% {
                translate: -20px 20px;
            }
            20% {
                translate: -40px 40px;
            }
            40% {
                translate: -40px -30px;
            }
            60% {
                translate: -10px 10px;
            }
            80% {
                translate: -40px 40px;
            }
            100% {
                translate: -20px 20px;
            }
        }
        @media(min-width: 600px) {
            .cicle-ethe {
                max-width: 350px;
            }
            .cicle-ethe-sm {
                bottom: 0%;
                left: 65%;
                max-width: 250px;
            }
            .cicle-doge-md {
                bottom: 45%;
                left: 5%;
                max-width: 180px;
            }
            .cicle-slp {
                bottom: 10%;
                left: -2%;
                max-width: 220px;
            }
            .cicle-slp-sm {
                max-width: 250px;
            }
        }
        
        @media(min-width: 1200px) {
            .cicle-ethe {
                max-width: 350px;
            }
            .cicle-ethe-sm {
                bottom: 0%;
                left: 65%;
                max-width: 250px;
            }
            .cicle-doge-md {
                bottom: 45%;
                left: 5%;
                max-width: 180px;
            }
            .cicle-slp {
                bottom: 10%;
                left: -2%;
                max-width: 220px;
            }
            .cicle-slp-sm {
                max-width: 250px;
            }
        }
`
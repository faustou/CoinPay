import React from 'react';
import styled from 'styled-components';

const SpaceAnimation = () => {
    return (
        <AnimationSpace>
            <img className='cicle-cry' src="https://i.ibb.co/0mbTwjJ/ethe.png" alt="" />
            <img className='cicle-eth' src="https://i.ibb.co/V06PTJY/slp.png" alt="" />
            <img className='cicle-btc' src="https://i.ibb.co/h72LcWh/doge.png" alt="" />
        </AnimationSpace>
    );
};

export default SpaceAnimation;

const AnimationSpace = styled.div`
    height: 150vh;
    width: 100%;
    position: relative;
    z-index: 18;
    background: radial-gradient(circle,#00c3ff 20%,#9400D3 100%);
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
    }
    .cicle-cry {
        position: absolute;
        bottom: 48%;
        left: -45%;
        max-width: 300px;
        animation-name: cicle-anim;
        animation-duration: 25s;
        animation-iteration-count: infinite;
    }
    .cicle-btc {
        position: absolute;
        bottom: 58%;
        left: 45%;
        max-width: 300px;
        animation-name: cicle-anim;
        animation-duration: 25s;
        animation-iteration-count: infinite;
    }
    .cicle-eth {
        position: absolute;
        bottom: -8%;
        left: -15%;
        max-width: 300px;
        animation-name: cicle-anim;
        animation-duration: 25s;
        animation-iteration-count: infinite;
    }
    @keyframes cicle-anim {
            0% {
                transition: 0px -18px;
            }
            20% {
                transition: 20px 10px;
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
`
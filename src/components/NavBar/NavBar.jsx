import React, { useState } from 'react';
import styled from 'styled-components';
import BurguerButton from './components/BurguerButton';
import ButtonAppNav from './components/ButtonAppNav';
import { Link } from 'react-scroll';

function NavBar() {
    const [clicked, setClicked] = useState(false)
    const handleClick = () => {
        setClicked(!clicked)
    }
    return (
        <>
            <NavContainer className='nav'>
                <div className='logo'>
                    <h2 className='logo-coinpay'>CoinPay</h2>
                </div>
                <div className={`links ${clicked ? 'active' : ''}`}>
                    <Link to="home" spy={true} smooth={true} offset={50} duration={500} className='text-decoration-none'>
                        <a>Home</a>
                    </Link>
                    <Link to="CryptoTable" spy={true} smooth={true} offset={0} duration={500} className='text-decoration-none'>
                        <a href='/'>Market</a>
                    </Link>
                    <Link to='/1' className='text-decoration-none'>
                        <a href='/'>EARN</a>
                    </Link>
                    <Link to="CoinPayCard" spy={true} smooth={true} offset={-150} duration={500} className='text-decoration-none'>
                        <a>Tarjeta</a>
                    </Link>
                    <Link to='/1' className='text-decoration-none'>
                        <a href='/2322211'>Ayuda/FAQ</a>
                    </Link>
                </div>
                <div className='burguer'>
                    <BurguerButton clicked={clicked} handleClick={handleClick}  />
                </div>
                <BgDiv className={`initial ${clicked ? 'active' : ''}`}></BgDiv>
                    <ButtonAppNav />
            </NavContainer>
        </>
    )
}

export default NavBar

const NavContainer = styled.nav`
        color: white;
        padding: 1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-family: 'Poppins', sans-serif;
        display: flex;
        position: fixed;
        top: 20px;
        left: 20px;
        z-index: 20;
        width: 84%;
        .burguer {
            position: absolute;
            right: -10px;
        }
        a {
            text-decoration: none;
            margin-right: 1rem;
            color: white;
        }
        .logo-coinpay {
            background-clip: text;
            font-family: 'Poppins', sans-serif;
            -webkit-background-clip: text;
            color: transparent;
            background-color: white;
            text-transform: uppercase;
            font-size: 2rem;
            font-weight: 800;
            text-shadow: 0px 0px 4px rgba(255, 255, 255, 0.8);
            background-color: #f1f1f1;
        }
        .links {
            position: absolute;
            top: -700px;
            left: -2000px;
            right: 0;
            margin-left: auto;
            margin-right: auto;
            text-align: center;
            transition: all .5s ease;
            background-color: #00c3ff;
            padding: 1rem;
            border-radius: 25px;
            border: black 1px solid;
            a{
                color: white;
                font-size: 2rem;
                font-weight: 800;
                display: block;
                text-transform: uppercase;
            }
            @media(min-width: 1024px){
                position: initial;
                margin: 0;
                width: 450px!important;
                a{
                    font-size: 0.8rem;
                    color: black;
                    display: inline;
                }
            }
        }
        @media(min-width: 1024px) {
            left: 80px;
        }
        @media(min-width: 1500px) {
            .links{
                width: 550px!important;
                a {
                    font-size: 1rem;
                }

            }
            .logo-coinpay {
                font-size: 2.5rem;
            }
        }
        .links:hover {
            box-shadow: max(8px,0.6909375vw) max(12px,0.9673125vw) 0 0 black;
        }
        .links.active{
            width: 100%;
            display: block;
            position: absolute;
            margin-left: auto;
            margin-right: auto;
            top: 30%;
            left: 0;
            right: 0;
            text-align: center;
            a {
                font-size: 2rem;
                margin-top: 1rem;
                color: white;
            }
        }
        .open {
            top: 30px;
        }
        .burguer{
            @media(min-width: 1024px){
                display: none;
            }
        }

`

const BgDiv = styled.div`
    background-color: #222;
    position: absolute;
    top: -2000px!important;
    left: -1000px;
    width: 100%;
    height: 100%;
    z-index: -1;
    transition: all .6s ease;
    &.active{
        border-radius: 0 0 80% 0;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`
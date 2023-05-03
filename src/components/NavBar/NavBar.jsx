import React, { useState } from 'react';
import styled from 'styled-components';
import BurguerButton from './components/BurguerButton';
import ButtonApp from './components/ButtonApp';

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
                    <a href='/323'>Home</a>
                    <a href='/2323'>Market</a>
                    <a href='/312344'>Tarjeta</a>
                    <a href='/2322211'>FAQ</a>
                </div>
                <div className='burguer'>
                    <BurguerButton clicked={clicked} handleClick={handleClick}  />
                </div>
                <BgDiv className={`initial ${clicked ? 'active' : ''}`}></BgDiv>
                    <ButtonApp />
            </NavContainer>
        </>
    )
}

export default NavBar

const NavContainer = styled.nav`
        color: white;
        padding: .4rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-family: 'Poppins', sans-serif;
        display: flex;
        position: fixed;
        top: 20px;
        left: 20;
        z-index: 20;
        width: 120%;
        a {
            text-decoration: none;
            margin-right: 1rem;
            color: white;
        }
        .logo-coinpay {
            background-clip: text;
            font-family: 'Poppins', sans-serif;
            -webkit-background-clip: text; /* Para compatibilidad con navegadores antiguos */
            color: transparent;
            background-color: white;
            text-transform: uppercase;
            font-size: 2rem;
            font-weight: 800;
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
                font-weight: 700;
                display: block;
            }
            @media(min-width: 768px){
                position: initial;
                margin: 0;
                a{
                    font-size: 1rem;
                    color: black;
                    display: inline;
                }
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
            @media(min-width: 768px){
                display: none;
            }
        }

`

const BgDiv = styled.div`
    background-color: #222;
    position: absolute;
    top: -2000px;
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
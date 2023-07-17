import React, { useState } from 'react';
import styled from 'styled-components';
import BurguerButton from './components/BurguerButton';
import ButtonAppNav from './components/ButtonAppNav';
import { Link } from 'react-scroll';
import Switch from './components/Switch';
import { useTranslation } from "react-i18next";
import LanguageMobile from './components/languageMobile';


function NavBar({ theme, setTheme }) {
    const[t, i18n] = useTranslation("global");

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
                    <div>
                        <Link to="home" spy={true} smooth={true} offset={50} duration={500} className='text-decoration-none'>
                            <a>{t("menu-nav.nav1")}</a>
                        </Link>
                        <Link to="CryptoTable" spy={true} smooth={true} offset={-135} duration={500} className='text-decoration-none'>
                            <a href='/'>{t("menu-nav.nav2")}</a>
                        </Link>
                        <Link to='/1' className='text-decoration-none'>
                            <a href='/'>{t("menu-nav.nav3")}</a>
                        </Link>
                        <Link to="CoinPayCard" spy={true} smooth={true} offset={-189} duration={500} className='text-decoration-none'>
                            <a>{t("menu-nav.nav4")}</a>
                        </Link>
                        <Link to='/1' className='text-decoration-none'>
                            <a href='/2322211'>{t("menu-nav.nav5")}</a>
                        </Link>
                    </div>
                    <div className='mobile'>
                        <LanguageMobile />
                        <div className='mobile'>
                            <Switch theme={theme} setTheme={setTheme} />
                        </div>
                    </div>
                </div>
                <div className='burguer'>
                    <BurguerButton clicked={clicked} handleClick={handleClick}  />
                </div>
                <div className='desktop'>
                    <LanguageMobile />
                    <Switch  theme={theme} setTheme={setTheme} />
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
        justify-content: space-between!important;
        font-family: 'Poppins', sans-serif;
        display: flex;
        position: fixed;
        top: 20px;
        left: 20px;
        z-index: 20;
        width: 84%!important;
        @media(min-width: 1024px){
            width: 100%!important;
        }
        @media(min-width: 1024px){
            justify-content: space-evenly!important;
        }
        .desktop{
            display: flex;
            gap: 1rem;
            @media(max-width: 1023px){
                display: none;
            }
        }
        .burguer {
            position: absolute;
            right: -10px;
        }
        a {
            text-decoration: none;
            margin: 0.5rem;
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
            background-color: #9400D3;
            padding: 1rem;
            border-radius: 25px;
            border: ${({ theme }) => theme.terciary} 1px solid;
            .mobile{
                margin-top: 1.5rem;
                @media(min-width: 1024px){
                    display: none;
                }
            }
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
                    color: ${({theme}) => theme.terciary};
                    display: inline;
                }
            }
        }
        @media(min-width: 1024px) {
            left: 0px;
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
            box-shadow: max(2px,0.3909375vw) max(2px,0.4673125vw) 0 0 ${({ theme }) => theme.terciary};
        }
        .links.active{
            width: 100%;
            display: flex;
            justify-content: space-evenly;
            position: absolute;
            padding-top: 2rem;
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
                @media(min-width: 1024px){
                    font-size: 1rem;
                }
            }
        }
        .open {
            top: 15px;
            left: -10px;
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
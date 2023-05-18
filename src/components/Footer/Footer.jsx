import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <FooterStyle>
            <div className='logoCoinpay'>
                <h2>COINPAY</h2>
            </div>
            <div className='networks'>
                <a href="https://twitter.com/" target="_blank"> <img className='imgNetworks' src="/img/instagram.svg" alt="telegram" style={{ height: '25px'}} /> </a>
                <a href="https://twitter.com/" target="_blank"> <img className='imgNetworks' src="/img/telegram.svg" alt="telegram" style={{ height: '25px' }} /> </a>
                <a href="https://twitter.com/" target="_blank"> <img className='imgNetworks' src="/img/discord.svg" alt="telegram" style={{ height: '25px' }} /> </a>
                <a href="https://twitter.com/" target="_blank"> <img className='imgNetworks' src="/img/twitter.svg" alt="telegram" style={{ height: '25px' }} /> </a>
                <a href="https://twitter.com/" target="_blank"> <img className='imgNetworks' src="/img/tiktok.svg" alt="telegram" style={{ height: '25px' }} /> </a>
                <a href="https://twitter.com/" target="_blank"> <img className='imgNetworks' src="/img/youtube.svg" alt="telegram" style={{ height: '25px' }} /> </a>
                <a href="https://twitter.com/" target="_blank"> <img className='imgNetworks' src="/img/linkedin.svg" alt="telegram" style={{ height: '25px' }} /> </a>
            </div>
            <div className='links'>
                <div className='linksContainer'>
                    <div>
                        <p>Home</p>
                        <p>Earn</p>
                        <p>Wiki</p>
                        <p>Tarjeta</p>
                        <p>Curso</p>
                    </div>
                    <div>
                        <p>Contactanos</p>
                        <p>Ayuda/FAQ</p>
                        <p>Lemon Talks</p>
                        <p>Trabajar En Lemon</p>
                    </div>
                    <div className='textNet'>
                        <p>Instagram</p>
                        <p>Twitter</p>
                        <p>TIKTOK</p>
                        <p>Comunidad Discord</p>
                        <p>Comunidad Reddit</p>
                    </div>
                </div>
                <div className='terms'>
                    <div>
                        <p>Terminos De Servicio</p>
                        <p>Copyright 2023 © COINPAY •</p>
                        <p>soporte@coinpay.me</p>
                    </div>
                    <div>
                        <p>Politica De Privacidad</p>
                    </div>
                </div>
            </div>
        </FooterStyle>
    );
};

export default Footer;

const FooterStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 2rem;
    background-color: #9400D3;
    gap: 1rem;
    h2 {
        font-size: 2rem;
        font-weight: 800;
    }
    .links {
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 18px;
        font-weight: 800;
        font-family: 'Poppins', sans-serif;
        line-height: 1;
        gap: 1rem;
        .linksContainer {
            display: flex;
            justify-content: space-evenly;
            gap: 2rem;
            .textNet {
                display: none;
            }
        }
    }
    .networks {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        a{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 35px;
            height: 35px;
            color: black;
            font-weight: 800;
        }
    }
    .terms {
        display: flex;
        font-size: 0.8rem;
        font-weight: 400;
    }
    @media (min-width: 464px) {
        h2 {
            font-size: 3rem;
        }
        .links {
            font-size: 1.5rem;
            gap: 1.5rem;
            .linksContainer {
                display: flex;
                justify-content: center;
                gap: 2rem;
            }
        }
        .networks {
            gap: 1rem;
            a{
                width: 50px;
                height: 55px;
            }
            a .imgNetworks {
                height: 45px!important;
            }
        }
        @media (min-width: 740px) {
            flex-direction: row;
            justify-content: space-evenly;
            h2 {
                font-size: 2rem;
                margin: 2rem;
            }
            .networks {
                display: none;
                a{
                    width: 50px;
                    height: 55px;
                }
                a .imgNetworks {
                    height: 45px!important;
                }
            }
            .links {
                justify-content: center;
                .linksContainer {
                    gap: 4rem;
                    .textNet {
                        display: block;
                    }
                }
            }
        }
    }
`
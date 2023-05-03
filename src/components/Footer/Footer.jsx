import React from 'react';
import styled from 'styled-components';
import { InstagramFilled, FacebookFilled, YoutubeFilled, TwitterCircleFilled, LinkedinFilled } from '@ant-design/icons';

const Footer = () => {
    return (
        <FooterStyle>
            <div className='logoCoinpay'>
                <h2>COINPAY</h2>
            </div>
            <div className='networks'>
                <a href="https://twitter.com/" target="_blank"> <img src="../public/img/instagram.svg" alt="telegram" style={{ height: '25px'}} /> </a>
                <a href="https://twitter.com/" target="_blank"> <img src="../public/img/telegram.svg" alt="telegram" style={{ height: '25px' }} /> </a>
                <a href="https://twitter.com/" target="_blank"> <img src="../public/img/discord.svg" alt="telegram" style={{ height: '25px' }} /> </a>
                <a href="https://twitter.com/" target="_blank"> <img src="../public/img/twitter.svg" alt="telegram" style={{ height: '25px' }} /> </a>
                <a href="https://twitter.com/" target="_blank"> <img src="../public/img/tiktok.svg" alt="telegram" style={{ height: '25px' }} /> </a>
                <a href="https://twitter.com/" target="_blank"> <img src="../public/img/youtube.svg" alt="telegram" style={{ height: '25px' }} /> </a>
                <a href="https://twitter.com/" target="_blank"> <img src="../public/img/linkedin.svg" alt="telegram" style={{ height: '25px' }} /> </a>
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
`
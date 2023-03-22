import React from 'react';
import styled from 'styled-components';

function NavBar() {

    return (
        <>
            <NavContainer className='nav'>
                <div className='logo'>
                    <h2 className='logo-coinpay'>CoinPay</h2>
                </div>
                <div className='links'>
                    <a href='/323'>Home</a>
                    <a href='/2323'>Market</a>
                    <a href='/312344'>Tarjeta</a>
                    <a href='/2322211'>FAQ</a>
                </div>
                <div>
                    
                </div>
            </NavContainer>
        </>
    )
}

export default NavBar

const NavContainer = styled.nav`
        background-color: black;
        color: white;
        padding: .4rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .logo-coinpay {
            background-clip: text;
            font-family: 'Poppins', sans-serif;
            -webkit-background-clip: text; /* Para compatibilidad con navegadores antiguos */
            color: transparent;
            background-image: linear-gradient(50deg, rgb(0, 255, 0) 3%, rgba(95,46,218,1) 15%);
            font-size: 4rem;
        }
        .links {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            a {
                text-decoration: none;
                color: white;
            }
        }
`
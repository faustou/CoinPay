import React from 'react';
import ButtonApp from '../NavBar/components/ButtonApp';
import styled from 'styled-components';


const CoinPayCart = () => {
    return (
        <PayCart>
                <div>
                    <img className='cart-coinpay' src="https://i.ibb.co/9cmVNsF/cart.png" alt="cart-coinpay" />
                </div>
                <div>
                    <p>COINPAY CARD</p>
                    <h2>Di adiós a las limitaciones bancarias y paga con libertad usando nuestra tarjeta crypto</h2>
                    <ButtonApp />
                    <p>Para más información visitá los</p>
                </div>
        </PayCart>
    );
};

export default CoinPayCart;

const PayCart = styled.div`
    display: flex;
    background-color: black;
    gap: 3rem;
    justify-content: center;
    align-items: center;
    background-image: url(../../../public/object.svg);
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: 90%;
    padding-top: max(80px,7.6003125vw);
    padding-bottom: max(10px,0.6909375vw);
    overflow: visible;
    z-index: 12;
    color: white;
    .cart-coinpay{
        width: 300px;
    }

`

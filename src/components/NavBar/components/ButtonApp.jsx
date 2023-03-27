import React from 'react';
import styled from 'styled-components';

const ButtonApp = () => {
    return (
        <AppButton>
            <div>
                <h2 className='app'>DESCARGÁ LA APP</h2>
            </div>
        </AppButton>
    );
};

export default ButtonApp;

const AppButton = styled.div`
        .app{
        background-color: #00c3ff;
        padding: 1rem;
        border-radius: 25px;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1;
        color: black;
        border: black 1px solid;
        max-width: 190px;
        @media(max-width: 768px){
            display: none;
        }
    }
`
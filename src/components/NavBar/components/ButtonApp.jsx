import React from 'react';
import styled from 'styled-components';

const ButtonApp = () => {
    return (
        <AppButton >
            <div>
                <h2 className='app'>DESCARGÁ LA APP</h2>
            </div>
        </AppButton>
    );
};

export default ButtonApp;

const AppButton = styled.div`
        margin-top: 1.5rem;
        .app{
        background-color: #9400D3;
        padding: 1rem;
        border-radius: 25px;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1;
        color: black;
        border: black 1px solid;
        max-width: 190px;
    }
`
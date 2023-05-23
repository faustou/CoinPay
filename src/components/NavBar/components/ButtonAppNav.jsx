import React from 'react';
import styled from 'styled-components';

const ButtonAppNav = () => {
    return (
        <AppButtonNav >
            <div>
                <h2 className='app'>DESCARGÁ LA APP</h2>
            </div>
        </AppButtonNav>
    );
};

export default ButtonAppNav;

const AppButtonNav = styled.div`
        display: none;
        margin-top: 0.5rem;
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
        @media(min-width: 1024px) {
            display: block!important;
        }
`
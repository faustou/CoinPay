import React from 'react';
import styled from 'styled-components';
import { useTranslation } from "react-i18next";

const ButtonAppNav = () => {
    const[t] = useTranslation("global");
    return (
        <AppButtonNav >
            <div>
                <h2 className='app'>{t("button-app.download")}</h2>
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
            color: ${({ theme }) => theme.terciary};
            border: ${({ theme }) => theme.terciary} 1px solid;
            max-width: 193px;
            transition: all .3s ease;
        }
        h2:hover {
            background-color: ${({ theme }) => theme.colorButtomNav};
            box-shadow: max(2px,0.3909375vw) max(2px,0.4673125vw) 0 0 ${({ theme }) => theme.terciary};
        }
        @media(min-width: 1024px) {
            display: block!important;
        }
`
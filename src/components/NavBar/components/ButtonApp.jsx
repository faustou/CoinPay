import React from 'react';
import styled from 'styled-components';
import { useTranslation } from "react-i18next";

const ButtonApp = () => {
    const[t] = useTranslation("global");
    return (
        <AppButton >
            <div>
                <h2 className='app'>{t("button-app.download")}</h2>
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
            border: ${({ theme }) => theme.terciary} 1px solid;
            max-width: 193px;
        }
        h2:hover {
            box-shadow: max(2px,0.3909375vw) max(2px,0.4673125vw) 0 0 ${({ theme }) => theme.terciary};
        }
`
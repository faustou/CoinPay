import React, { useState } from 'react';
import styled from 'styled-components';
import { BsSun, BsMoon } from "react-icons/bs";

const Switch = (props) => {
    const [position, SetPosition] = useState(false);

    const { theme, setTheme } = props;

    const changePosition = () => {
        SetPosition(!position)
    }

    const changeMode = () => {
        if (theme === 'light') {
            setTheme ('dark');
            changePosition()
        } else{
            setTheme('light');
            changePosition()
        }
    }

    const icon = props.theme === "light" ? <BsSun className='sunIcon' /> : <BsMoon className='moonIcon' />;
    return (
        <>
            <SwitchContainer>
                <SwitchWrapper>
                    <SwitchBGC>
                        <ButtonSwitch 
                            onClick={() => changeMode()}
                            position={position}
                        >
                            {icon}
                        </ButtonSwitch>
                    </SwitchBGC>
                </SwitchWrapper>
            </SwitchContainer>
        </>
    );
};

export default Switch;

export const SwitchContainer = styled.div`
    position: relative;
    top: 175px;
    @media(min-width: 1024px){
            top: 5px;
        }
`

export const SwitchWrapper = styled.div`
    width: 100%;
    max-width: 1300px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row-reverse;
`

export const SwitchBGC = styled.div`
    position: relative;
    width: 60px;
    height: 40px;
    border: ${({ theme }) => theme.terciary} 1px solid;
    border-radius: 30px;
    background-color: ${({theme}) => theme.primary};
    transition: all .3s ease;
    :hover {
            box-shadow: max(2px,0.3909375vw) max(2px,0.4673125vw) 0 0 ${({ theme }) => theme.terciary};
        }
`

export const ButtonSwitch = styled.button`
    position: absolute;
    cursor: pointer;
    bottom: 5px;
    left: ${({position}) => position ? '5px' : '25px' };
    width: 30px;
    height: 30px;
    border: none;
    border-radius: 50%;
    background-color: ${({theme}) => theme.terciary};
    outline: none;
    .sunIcon {
        color: ${({theme}) => theme.primary};
    }
    .moonIcon {
        color: ${({theme}) => theme.primary};
    }
`
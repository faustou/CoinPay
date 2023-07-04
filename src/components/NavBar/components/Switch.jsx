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
    transition: 0.5s all ease-in;
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
    border: black 1px solid;
    border-radius: 30px;
    background-color: ${({theme}) => theme.primary};
    transition: 1s all ease-in;
    :hover {
            box-shadow: max(8px,0.6909375vw) max(12px,0.9673125vw) 0 0 black;
            transition: 0.5s all ease-in;
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
    transition: 0.4s all ease-in;
    outline: none;
    .sunIcon {
        color: ${({theme}) => theme.primary};
    }
    .moonIcon {
        color: ${({theme}) => theme.primary};
    }
`
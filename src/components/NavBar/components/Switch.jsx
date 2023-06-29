import React from 'react';
import styled from 'styled-components';

const Switch = () => {
    return (
        <>
            <SwitchContainer>
                <SwitchWrapper>
                    <SwitchBGC>
                        <ButtonSwitch></ButtonSwitch>
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
    width: 50px;
    height: 40px;
    border-radius: 30px;
    background-color: ${({theme}) => theme.primary};
    transition: 1s all ease-in;
`

export const ButtonSwitch = styled.button`
    position: absolute;
    cursor: pointer;
    bottom: 5px;
    left: 5px;
    width: 30px;
    height: 30px;
    border: none;
    border-radius: 50%;
    background-color: #fff;
    transition: 0.4s all ease-in;
    outline: none;
`
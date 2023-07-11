import React, { useState } from 'react';
import styled from 'styled-components';
import { BsFillCaretDownFill } from "react-icons/bs";
import { useTranslation } from "react-i18next";

const LanguageMobile = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [t, i18n] = useTranslation("global");

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
    setShowDropdown(false);
  };

  return (
    <LanguageContainer>
      <LanguageWrapper>
        <LanguageBGC>
          <p className='primary-btn' onClick={toggleDropdown}>
            {t("Language.1")} <BsFillCaretDownFill />
          </p>
          {showDropdown && (
            <DropdownMenu>
              <p className='hover-btn' onClick={() => handleLanguageChange(t("Language.2"))}>
                {t("Language.2")}
              </p>
              <p className='hover-btn' onClick={() => handleLanguageChange(t("Language.3"))}>
                {t("Language.3")}
              </p>
            </DropdownMenu>
          )}
        </LanguageBGC>
      </LanguageWrapper>
    </LanguageContainer>
  );
};

export default LanguageMobile;

export const LanguageContainer = styled.div`
  color: ${({ theme }) => theme.terciary};
`;

export const LanguageWrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
`;

export const LanguageBGC = styled.div`
  position: relative;
  width: 80px;
  height: 50px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.primary};
  font-size: 1.5rem;
  text-transform: uppercase;
  border: ${({ theme }) => theme.terciary} 1px solid;

  .primary-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0.4rem;
    cursor: pointer;
  }

  :hover {
    box-shadow: max(2px,0.3909375vw) max(2px,0.4673125vw) 0 0 ${({ theme }) => theme.terciary};
  }
`;

export const DropdownMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  margin-top: 1rem;
  top: 100%;
  left: 0;
  pointer-events: auto;

  .hover-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 50px;
    box-shadow: max(2px,0.3909375vw) max(2px,0.4673125vw) 0 0 ${({ theme }) => theme.terciary};
    border: black 1px solid;
    border-radius: 30px;
    background-color: ${({ theme }) => theme.primary};
    cursor: pointer;
  }
`;
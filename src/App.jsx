import './App.css'
import styled from 'styled-components';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Theme from './theme.js';
import CoinPayCard from './components/CoinPayCart/CoinPayCart'
import NavBar from './components/NavBar/NavBar'
import CryptoTable from './components/CryptoTable/CryptoTable';
import SpaceAnimation from './components/SpaceAnimation/SpaceAnimation';
import TrackAndTrade from './components/TrackAndTrade/TrackAndTrade';
import CarouselInf from './components/CarouselInf/CarouselInf';
import CarouselInf2 from './components/CarouselInf/CarouselInf2';
import LinearCoins from './components/CoinPayCart/LinearCoins';
import LinearCoin from './components/LinearCoin/LinearCoin';
import Footer from './components/Footer/Footer';
import Faqs from './components/Faq/Faqs';

function App() {
  const [theme, setTheme] =useState('light');

  return (
    <>
      <ThemeProvider theme={Theme[theme]}>
        <BrowserRouter>
          <AppContainer>
            <div className='container bg-dark'>
              <NavBar theme={theme} setTheme={setTheme} />
            </div>
            <SpaceAnimation />
            <LinearCoins />
            <CoinPayCard />
            <CarouselInf />
            <TrackAndTrade />
            <CarouselInf2 />
            <Routes>
            <Route path='/' element={
              <CryptoTable />
            } />
              <Route path='/:number' element={
                <CryptoTable />
              } />
            </Routes>
            <LinearCoin />
            <Faqs />
            <Footer />
          </AppContainer>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App

const AppContainer = styled.div`
  background-color: ${({theme}) => theme.bgc};
  color: black;
  font-family: 'Poppins', sans-serif;
`
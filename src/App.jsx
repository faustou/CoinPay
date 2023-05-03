import './App.css'
import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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

function App() {

  return (
    <>
      <BrowserRouter>
        <AppContainer className='bg-dark'>
          <div className='container bg-dark'>
            <NavBar />
          </div>
          <SpaceAnimation />
          <TrackAndTrade />
          <LinearCoins />
          <CoinPayCard />
          <CarouselInf />
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
          <Footer />
        </AppContainer>
      </BrowserRouter>
    </>
  )
}

export default App

const AppContainer = styled.div`
  color: black;
  font-family: 'Poppins', sans-serif;
`
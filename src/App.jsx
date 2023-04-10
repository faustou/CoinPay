import './App.css'
import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CoinPayCard from './components/CoinPayCart/CoinPayCart'
import NavBar from './components/NavBar/NavBar'
import CryptoTable from './components/CryptoTable/CryptoTable';
import SpaceAnimation from './components/SpaceAnimation/SpaceAnimation';
import TrackAndTrade from './components/TrackAndTrade/TrackAndTrade';
import CarouselInf from './components/CarouselInf/CarouselInf';

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
          <CoinPayCard />
          <CarouselInf />
          <Routes>
          <Route path='/' element={
              <CryptoTable />
            } />
            <Route path='/:number' element={
              <CryptoTable />
            } />
          </Routes>
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
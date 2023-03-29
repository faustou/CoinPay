import './App.css'
import styled from 'styled-components';
import CoinPayCard from './components/CoinPayCart/CoinPayCart'
import NavBar from './components/NavBar/NavBar'
import CryptoTable from './components/CryptoTable/CryptoTable';

function App() {

  return (
      <AppContainer>
        <div className='container'>
          <NavBar />
        </div>
          <CoinPayCard />
          <CryptoTable />
      </AppContainer>
  )
}

export default App

const AppContainer = styled.div`
  color: black;
  font-family: 'Poppins', sans-serif;
`
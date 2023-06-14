import axios from 'axios';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import CoinRow from './CoinRow';
import { Link, useParams } from 'react-router-dom';

const titles = ['Coin', 'Price', 'Price Change', '24h Volume']

const CryptoTable = () => {

    const {number} = useParams()
    const numbers = !number ? number : 1
    const [coins, setCoins] = useState([])
    const getData = async () => {
        const res = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${numbers}&sparkline=false&locale=en`)
        setCoins(res.data)
    }
    useEffect(() => {
        getData()
    }, [number])
    console.log(coins)

    return (
        <TableStyles>
            <div className='container table-container pt-4' id='CryptoTable'>
                <table className='table ps-0'>
                    <thead className='text-start'>
                        <tr>
                            {
                                titles.map(title => (
                                    <td key={title}> {title} </td>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {coins.map((coin, index) =>(
                            <CoinRow coin={coin} key={index} index={index + 1} />
                        ))}
                    </tbody>
                        
                </table>
                <div pill className='container d-flex align-items-center justify-content-center'>
                    <Link to='/1' className='text-decoration-none'>
                        <p className='rounded bg-gradient text-white p-2 ms-4'>1</p>
                    </Link>
                    <Link to='/2' className='text-decoration-none'>
                        <p className='rounded bg-gradient text-white p-2 ms-4'>2</p>
                    </Link>
                    <Link to='/3' className='text-decoration-none'>
                        <p className='rounded bg-gradient text-white p-2 ms-4'>3</p>
                    </Link>
                    <Link to='/4' className='text-decoration-none'>
                        <p className='rounded bg-gradient text-white p-2 ms-4'>4</p>
                    </Link>
                    <Link to='/5' className='text-decoration-none'>
                        <p className='rounded bg-gradient text-white p-2 ms-4'>5</p>
                    </Link>
                </div>
            </div>
        </TableStyles>
        
    );
};

export default CryptoTable;

const TableStyles = styled.div`
    background-color: #9400D3;
    overflow: hidden;
    thead {
        text-align: center;
        font-size: 0.6rem;
        white-space: nowrap;
        color: white;
    }
    .table-container{
        font-size: 0.56rem;
    }
    @media (min-width: 464px) {
        .table-container{
            font-size: 0.7rem;
        }
    }

    @media (min-width: 768px) {
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        thead {
            text-align: center;
            font-size: 1rem;
            white-space: nowrap;
            color: white;
        }
    }
`
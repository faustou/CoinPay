import axios from 'axios';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import CoinRow from './CoinRow';
import { Link, useParams } from 'react-router-dom';

const titles = ['#', 'Coin', 'Price', 'Price Change', '24h Volume']

const CryptoTable = () => {

    const {number} = useParams()
    const numbers = number ? number : 1
    const [coins, setCoins] = useState([])
    const getData = async () => {
        const res = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${numbers}&sparkline=false&locale=en`)
        setCoins(res.data)
    }
    useEffect(() => {
        getData()
    }, [number])

    return (
        <TableStyles>
            <div className='container table-container ps-0'>
                <table className='table table-dark ps-0'>
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
                        <p className='rounded bg-black bg-gradient text-white p-2 ms-4'>1</p>
                    </Link>
                    <Link to='/2' className='text-decoration-none'>
                        <p className='rounded bg-black bg-gradient text-white p-2 ms-4'>2</p>
                    </Link>
                    <Link to='/3' className='text-decoration-none'>
                        <p className='rounded bg-black bg-gradient text-white p-2 ms-4'>3</p>
                    </Link>
                    <Link to='/4' className='text-decoration-none'>
                        <p className='rounded bg-black bg-gradient text-white p-2 ms-4'>4</p>
                    </Link>
                    <Link to='/5' className='text-decoration-none'>
                        <p className='rounded bg-black bg-gradient text-white p-2 ms-4'>5</p>
                    </Link>
                </div>
            </div>
        </TableStyles>
        
    );
};

export default CryptoTable;

const TableStyles = styled.div`
    thead {
        font-size: 0.8rem;
    }
    .table-container{
        font-size: 0.7rem;
    }
`
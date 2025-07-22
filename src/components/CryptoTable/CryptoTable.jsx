import axios from 'axios';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import CoinRow from './CoinRow';
import { Link, useParams } from 'react-router-dom';

const titles = ['Coin', 'Price', 'Price Change', '24h Volume']

const CryptoTable = () => {

    const {number} = useParams()
    const page = number || "1"
    const [coins, setCoins] = useState([])
    const getData = async () => {
        const res = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${page}&sparkline=false&locale=en`)
        setCoins(res.data)
    }
    useEffect(() => {
        getData()
    }, [number])

    return (
        <TableStyles>
            <div className='tittle-market'>
                <h2 className='market-t'>Cryptocurrency Prices by Market Cap</h2>
            </div>
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
                <div pill className='container d-flex align-items-center justify-content-center pills'>
                    <Link to='/1' className='text-decoration-none links-pills'>
                        <p className='rounded bg-gradient text-black p-1.5 ms-4 btn btn-outline-dark btn-text-hover'>1</p>
                    </Link>
                    <Link to='/2' className='text-decoration-none links-pills'>
                        <p className='rounded bg-gradient text-black p-1.5 ms-4 btn btn-outline-dark btn-text-hover'>2</p>
                    </Link>
                    <Link to='/3' className='text-decoration-none links-pills'>
                        <p className='rounded bg-gradient text-black p-1.5 ms-4 btn btn-outline-dark btn-text-hover'>3</p>
                    </Link>
                    <Link to='/4' className='text-decoration-none links-pills'>
                        <p className='rounded bg-gradient text-black p-1.5 ms-4 btn btn-outline-dark btn-text-hover'>4</p>
                    </Link>
                    <Link to='/5' className='text-decoration-none links-pills'>
                        <p className='rounded bg-gradient text-black p-1.5 ms-4 btn btn-outline-dark btn-text-hover'>5</p>
                    </Link>
                </div>
            </div>
        </TableStyles>
        
    );
};

export default CryptoTable;

const TableStyles = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${({theme}) => theme.secondary};
    background-color: ${({theme}) => theme.bgc};
    overflow: hidden;
    border-radius: max(50px,3.4546875vw) max(50px,3.4546875vw) max(50px,3.4546875vw) max(50px,3.4546875vw);
    margin: 3rem 0px 3rem 0px;
    border: black 1px solid;
    .tittle-market {
        padding-top: 1.5rem;
        font-family: "Tusker Grotesk";
        text-transform: uppercase;
        .market-t {
            font-size: 2rem;
        }
    }
    thead {
        text-align: center;
        font-size: 0.6rem;
        white-space: nowrap;
        color: ${({theme}) => theme.terciary};
        border-color: ${({theme}) => theme.terciary};
    }
    tbody{
        border-color: ${({theme}) => theme.terciary};
    }
    .table-container{
        font-size: 0.56rem;
    }
    #CryptoTable{
        .pills{
            .links-pills{
                .btn-text-hover {
                    color: ${({theme}) => theme.terciary}!important;
                    &:hover {
                        background-color: ${({theme}) => theme.primary};
                        color: ${({theme}) => theme.terciary}!important;
                    }
                }
            }
        }
    }
    @media (min-width: 464px) {
        .table-container{
            font-size: 0.7rem;
        }
        thead {
            font-size: 1rem;
        }
    }
    @media (min-width: 600px) {
        margin: 2rem 1rem 1rem 1rem;
    }
    @media (min-width: 768px) {
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 2rem 1rem 0 1rem;
        thead {
            text-align: center;
            font-size: 1rem;
            white-space: nowrap;
        }
        .tittle-market {
            .market-t {
                font-size: 4rem;
            }
        }
    }
    @media (min-width: 1200px) {
        margin: 2rem 4rem 0 4rem;
        .tittle-market {
            .market-t {
                font-size: 6rem;
            }
        }
    }
`
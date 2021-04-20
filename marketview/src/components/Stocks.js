import React, { useState, useEffect } from 'react'
import Header from './Header'
import Navbar from './Navbar'
import '../css/Stocks.css';
import './StockModal'
import StockModal from './StockModal';


function Stocks({ logOut, username }) {

    //the ticker symbol they search for
    const [searchTerm, setSearchTerm] = useState("")
    //dates fetched from api
    const [xValues, setXValues] = useState([])
    //prices fetched from api
    const [yValues, setYValues] = useState([])
    //decide whether to show the stock graph modal or not
    const [showStockModal, setShowStockModal] = useState(false)

    //fetch the stock data whenever the state changes
    useEffect(() => {
        function fetchStock() {
            const apiKey = "BFW1POG1RFAENYS8"
            let tickerSymbol = searchTerm
            let apiCall = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${tickerSymbol}&outputsize=compact&apikey=${apiKey}`
            let futureXVals = [];
            let futureYVals = [];
    
            fetch(apiCall)
                .then(response => response.json())
                .then(response => {
                    for (const item in response['Time Series (Daily)']) {
                        futureXVals.push(item);
                        futureYVals.push(response['Time Series (Daily)'][item]['1. open']);
                    }
    
                    setXValues(futureXVals)
                    setYValues(futureYVals)
                })
        }
        fetchStock();
    }, [searchTerm])

    
    return (
        <div>
            <Header title = "Stocks" username = {username} logOut = {logOut} />
            <Navbar />
                <div className = {"searchContainer"}>
                    <div className = {"inputBox"}>
                      <input
                         type = "text"
                         placeholder = "Enter a Stock Ticker"
                         onChange = {(event) => {
                            setSearchTerm(event.target.value)
                         }}
                     />
                        <i className = {"fa fa-search searchIcon"} aria-hidden="true"/>
                    </div>
                </div>
            <StockModal
                xValues = {xValues}
                yValues = {yValues}
                showStockModal = {showStockModal}
                setShowStockModal = {setShowStockModal}
                tickerSymbol = {searchTerm}
            />
        </div>
    )
}

export default Stocks
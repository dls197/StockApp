import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import StockModal from './StockModal'


function StockFolder({ username, fetchStock, xValues, 
                    yValues, showStockModal, setShowStockModal,
                    purpose }) {


    const [tickerSymbolList, setTickerSymbolList] = useState([])
    
    //get & set list of ticker symbols user is following on inital render        
    useEffect(() => {
        Axios.get("http://localhost:3001/getStockInfo", {
            params: {
                username: username
            }
        }).then((response) => {
            setTickerSymbolList(response.data.map((row) => {
                return row.stock_ticker
            }))
        })
    }, [])

    //set x and y values so we can pull up the stock graph on a click
    const getStockInfo = (index) => {
        setShowStockModal(true)
        const symbol = tickerSymbolList[index]
        fetchStock(symbol) //sets x and y vals

        return (
            <StockModal
                xValues = {xValues}
                yValues = {yValues}
                showStockModal = {showStockModal}
                setShowStockModal = {setShowStockModal}
                tickerSymbol = {symbol}
                purpose = {purpose}
                username = {username}
                tickerSymbolList = {tickerSymbolList}
                setTickerSymbolList = {setTickerSymbolList}
            />
        )
    }

    return (
        <div className = "folderContainer">
            <div className = "headingContainer">
                <h1>Stock Folder</h1>
            </div>
            {tickerSymbolList.map((symbol, index) => {
                return (
                    <button 
                        key = {index}
                        onClick = {() => getStockInfo(index)}
                    ><h3>{symbol}</h3>
                    </button>       
                )
            })}
        </div>
        )
}

export default StockFolder
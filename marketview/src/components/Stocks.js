import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import '../css/Stocks.css';
import './StockModal'
import StockModal from './StockModal';


function Stocks({ username, setUsername, setPassword, 
                setShowWelcomeModal, setLoginStatus, 
                searchTerm, setSearchTerm, xValues,
                yValues, showStockModal, setShowStockModal,
                fetchStock }) {

    
    //fetch the stock data whenever the form gets submitted
    function handleSubmit(event) {
        event.preventDefault()
        fetchStock(searchTerm)
        setShowStockModal(true)
    }

    
    return (
        <div>
            <Header 
            title = "Stocks" 
            username = {username} 
            setUsername = {setUsername}
            setPassword = {setPassword}
            setShowWelcomeModal = {setShowWelcomeModal}
            setLoginStatus = {setLoginStatus} 
            />
            <Navbar />
                <div className = {"searchContainer"}>
                    <form onSubmit = {handleSubmit}>
                        <div className = {"inputBox"}>
                        <input
                            type = "text"
                            value = {searchTerm}
                            placeholder = "Enter a Stock Ticker"
                            onChange = {(event) => {
                                setSearchTerm(event.target.value)
                            }}
                        />
                        <input type = "submit" className = {"submitButton"}/>
                        </div>
                    </form>
                </div>
            <StockModal
                xValues = {xValues}
                yValues = {yValues}
                showStockModal = {showStockModal}
                setShowStockModal = {setShowStockModal}
                tickerSymbol = {searchTerm}
                purpose = "stocks"
                username = {username}
            />
        </div>
    )
}

export default Stocks
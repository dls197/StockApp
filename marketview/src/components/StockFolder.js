import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import StockModal from './StockModal'
import '../css/StockFolder.css'


function StockFolder({ username, fetchStock, xValues, 
                    yValues, showStockModal, setShowStockModal,
                    purpose }) {

    const [tickerSymbolList, setTickerSymbolList] = useState([])
    const [currentSymbol, setCurrentSymbol] = useState("")
    const [stockFolderPrivate, setStockFolderPrivate] = useState("")
    
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

        Axios.get("http://localhost:3001/getPrivateFolderStatus", {
            params: {
                username: username
            }
        }).then((response) => {
            setStockFolderPrivate(response.data[0].has_private_stock_folder)
            console.log(response)
        })
    }, [])

    const makeStockFolderPrivate = () => {
        Axios.put("http://localhost:3001/makeStockFolderPrivate", {
            username: username
        }).then(() => {
            setStockFolderPrivate('Y')
        })
    }

    const makeStockFolderPublic = () => {
        Axios.put("http://localhost:3001/makeStockFolderPublic", {
            username: username
        }).then(() => {
            setStockFolderPrivate('N')
        })
    }

    if (stockFolderPrivate === 'N' && purpose === 'myProfile') { //stock folder is public, and the user is viewing it on myprofile
        return (
            <div className = "folderContainer">
                    <div className = "headingContainer">
                        <h1>Stock Folder</h1>
                    </div>
                    <div className = "folderButtonContainer">
                    {tickerSymbolList.map((symbol, index) => {
                        return (
                            <button 
                                key = {index}
                                onClick = {() => {
                                    setCurrentSymbol(symbol)
                                    fetchStock(symbol)     //set x and y values so we can pull up the stock graph on a click       
                                    setShowStockModal(true)
                                }}
                            ><h3>{symbol}</h3>
                            </button>       
                        )
                    })}
                    </div>
                <StockModal
                    xValues = {xValues}
                    yValues = {yValues}
                    showStockModal = {showStockModal}
                    setShowStockModal = {setShowStockModal}
                    tickerSymbol = {currentSymbol}
                    purpose = {purpose}
                    username = {username}
                    tickerSymbolList = {tickerSymbolList}
                    setTickerSymbolList = {setTickerSymbolList}
                />
                <button id = "makePrivate" onClick = {makeStockFolderPrivate}>Make Stock Folder Private</button>
            </div>
        )
    } else if (stockFolderPrivate === 'Y' && purpose === 'myProfile') { //stock folder is private, and the user is viewing it on myprofile
        return (
            <div className = "folderContainer">
                    <div className = "headingContainer">
                        <h1>Stock Folder</h1>
                    </div>
                    <div className = "folderButtonContainer">
                    {tickerSymbolList.map((symbol, index) => {
                        return (
                            <button 
                                key = {index}
                                onClick = {() => {
                                    setCurrentSymbol(symbol)
                                    fetchStock(symbol)     //set x and y values so we can pull up the stock graph on a click       
                                    setShowStockModal(true)
                                }}
                            ><h3>{symbol}</h3>
                            </button>       
                        )
                    })}
                    </div>
                <StockModal
                    xValues = {xValues}
                    yValues = {yValues}
                    showStockModal = {showStockModal}
                    setShowStockModal = {setShowStockModal}
                    tickerSymbol = {currentSymbol}
                    purpose = {purpose}
                    username = {username}
                    tickerSymbolList = {tickerSymbolList}
                    setTickerSymbolList = {setTickerSymbolList}
                />
                <button id = "makePublic" onClick = {makeStockFolderPublic}>Make Stock Folder Public</button>
            </div>
        )
    } else if (stockFolderPrivate === 'N' && purpose === 'social') { //stock folder is public, but someone else is viewing it from social page
        return (
            <div className = "folderContainer">
                    <div className = "headingContainer">
                        <h1>Stock Folder</h1>
                    </div>
                    <div className = "folderButtonContainer">
                    {tickerSymbolList.map((symbol, index) => {
                        return (
                            <button 
                                key = {index}
                                onClick = {() => {
                                    setCurrentSymbol(symbol)
                                    fetchStock(symbol)     //set x and y values so we can pull up the stock graph on a click       
                                    setShowStockModal(true)
                                }}
                            ><h3>{symbol}</h3>
                            </button>       
                        )
                    })}
                    </div>
                <StockModal
                    xValues = {xValues}
                    yValues = {yValues}
                    showStockModal = {showStockModal}
                    setShowStockModal = {setShowStockModal}
                    tickerSymbol = {currentSymbol}
                    purpose = {purpose}
                    username = {username}
                    tickerSymbolList = {tickerSymbolList}
                    setTickerSymbolList = {setTickerSymbolList}
                />
            </div>
        )
    } 
    else { //stock folder is private, but someone else is viewing it from the social page
        return (
            <div className = "folderContainer">
                <div className = "headingContainer">
                    <h1>Stock Folder</h1>
                </div>
                <div className = "folderButtonContainer">
                    <h4>{username}'s Stock Folder is Private</h4>
                </div>
            </div>
        )
    }
}

export default StockFolder
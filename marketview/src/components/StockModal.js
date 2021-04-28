import React from 'react';
import Plot from 'react-plotly.js';
import Modal from 'react-modal';
import '../css/StockModal.css';
import Axios from 'axios';

Modal.setAppElement('#root')

function StockModal({ xValues, yValues, showStockModal, 
                    setShowStockModal, tickerSymbol, purpose,
                    username, tickerSymbolList, setTickerSymbolList }) {

    const customStyles = {
        overlay : {
            backgroundColor: 'grey'
        },
        content : {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)'
        }
      }
    
    const addStock = () => {
        Axios.post("http://localhost:3001/addStock", {
            username: username,
            tickerSymbol: tickerSymbol
        })
        setShowStockModal(false)
    }

    const deleteStock = () => {
        setShowStockModal(false)
    }
      
    
    const addOrRemoveButton = () => {
        if (purpose === "stocks" || purpose === "social") {
            return (
                <button
                    onClick = {addStock}
                    className = {"addStockButton"}>Add to Stock Folder
                </button>
            )
        } else {
            return (
                <button
                    onClick = {deleteStock}
                    className = {"addStockButton"}>Remove from Stock Folder
                </button>
            )
        }
    }

    return (
        <div className = {"stockModal"}>
            
            <Modal
                isOpen = {showStockModal}
                onRequestClose = {() => setShowStockModal(false)}
                style = {customStyles}>
                
                <Plot
                    data = {[
                        {
                            x: xValues,
                            y: yValues,
                            type: 'scatter',
                            mode: 'lines+markers',
                            marker: {color: 'red'},
                        }
                        ]}
                        layout={ {width: 720, height: 440, title: `Ticker Symbol ${tickerSymbol} Stock Information`} }
                />
                <button
                    onClick = {() => setShowStockModal(false)}
                    className = {"closeModalButton"}>Close Stock Information
                </button>
                {addOrRemoveButton()}
            </Modal>
        </div>
    )
}

export default StockModal
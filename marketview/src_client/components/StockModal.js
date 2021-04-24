import React from 'react';
import Plot from 'react-plotly.js';
import Modal from 'react-modal';
import '../css/StockModal.css';

Modal.setAppElement('#root')

function StockModal({ xValues, yValues, showStockModal, setShowStockModal, tickerSymbol }) {

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
                <button
                    onClick = {() => setShowStockModal(false)}
                    className = {"addStockButton"}>Add to Stock Folder
                    {/*this button needs to be connected with the backend*/}
                </button>
            </Modal>
        </div>
    )
}

export default StockModal
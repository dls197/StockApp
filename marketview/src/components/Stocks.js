import React, { useState } from 'react'
import Header from './Header'
import Navbar from './Navbar'
import '../css/Stocks.css';


function Stocks({ logOut, username }) {

    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div>
            <Header title = "Stocks" username = {username} logOut = {logOut} />
            <Navbar />
            <body>
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
            </body>
        </div>
    )
}

export default Stocks
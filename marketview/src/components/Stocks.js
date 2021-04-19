import React, { useState } from 'react'
import Header from './Header'
import Navbar from './Navbar'


function Stocks({ logOut, username }) {

    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div>
            <Header title = "Stocks" username = {username} logOut = {logOut} />
            <Navbar />
            <body>
                <div className = {"stocksSearch"}>
                    <input
                        type = "text"
                        placeholder = "Enter a Stock Ticker"
                        onChange = {(event) => {
                            setSearchTerm(event.target.value)
                        }}
                    />
                    <i class="fa fa-search" aria-hidden="true"/>
                </div>
            </body>
        </div>
    )
}

export default Stocks
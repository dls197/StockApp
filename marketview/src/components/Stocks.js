import React from 'react'
import Header from './Header'
import Navbar from './Navbar'


function Stocks({ logOut, username }) {
    return (
        <div>
            <Header title = "Stocks" username = {username} logOut = {logOut} />
            <Navbar />
            <body>
                <h1>Stocks Page</h1>
            </body>
        </div>
    )
}

export default Stocks
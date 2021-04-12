import React from 'react'
import Header from './Header'


function Stocks({ logOut, username }) {
    return (
        <div>
            <Header title = "Stocks" username = {username} logOut = {logOut} />
            <h1>Stocks Page</h1>
        </div>
    )
}

export default Stocks
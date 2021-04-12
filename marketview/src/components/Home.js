import React from 'react'
import Header from './Header'


function Home({ logOut, username }) {
    return (
        <div>
            <Header title = "Home" username = {username} logOut = {logOut} />
            <h1>Home Page</h1>
        </div>
    )
}

export default Home
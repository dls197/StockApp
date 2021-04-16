import React from 'react'
import Header from './Header'
import Navbar from './Navbar'


function Home({ logOut, username }) {
    return (
        <div>
            <Header title = "Home" username = {username} logOut = {logOut} />
            <Navbar />
            <body>
                <h1>Home Page</h1>
            </body>
        </div>
    )
}

export default Home
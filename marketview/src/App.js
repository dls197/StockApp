import './App.css'
import Header from './components/Header.js'
import React, { useState } from 'react'



function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //func we will eventually use to log the user out, and pass it into header as a prop
  const logOut = () => {
    console.log("User logged out")
    if (isLoggedIn === true) {
      setIsLoggedIn(false)
    }
  }

  return (
    <div>
      <Header title = "Home" username = "User23" logOut = {logOut}/>
    </div>
  )
}

export default App

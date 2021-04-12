import './App.css'
import Home from './components/Home'
import News from './components/News'
import Stocks from './components/Stocks'
import MyProfile from './components/MyProfile'
import Social from './components/Social'
import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'



function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userThatIsLoggedIn, setUserThatIsLoggedIn] = useState("User23")

  //func we will eventually use to log the user out, and pass it into header as a prop
  const logOut = () => {
    //log them out then
    console.log("User logged out")
    if (isLoggedIn === true) {
      setIsLoggedIn(false)
      setUserThatIsLoggedIn("")
    }
  }

  const logIn = (username) => {
    //log them in then
    console.log("User logged in")
    if (isLoggedIn === false) {
      setUserThatIsLoggedIn(username)
    }
  }

  return (
    <Router>
      <div className = "app">
        <Switch>
          <Route 
          path = "/" exact
          render = {(props) => <Home 
                                  {...props} 
                                  logout = {logOut} 
                                  username = {userThatIsLoggedIn} 
                                />}
          />
          <Route 
          path = "/news"
          render = {(props) => <News 
                                  {...props} 
                                  logout = {logOut} 
                                  username = {userThatIsLoggedIn} 
                                />}
          />
          <Route 
          path = "/stocks"
          render = {(props) => <Stocks 
                                  {...props} 
                                  logout = {logOut} 
                                  username = {userThatIsLoggedIn} 
                                />}
          />
          <Route 
          path = "/myprofile"
          render = {(props) => <MyProfile 
                                  {...props} 
                                  logout = {logOut} 
                                  username = {userThatIsLoggedIn} 
                                />}
          />
          <Route 
          path = "/social"
          render = {(props) => <Social 
                                  {...props} 
                                  logout = {logOut} 
                                  username = {userThatIsLoggedIn} 
                                />}
          />
        </Switch>
      </div>
    </Router>
  )
}

export default App

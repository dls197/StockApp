import './App.css'
import Home from './components/Home'
import News from './components/News'
import Stocks from './components/Stocks'
import MyProfile from './components/MyProfile'
import Social from './components/Social'
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'



function App() {
  const finnhubApiKey = process.env.REACT_APP_FINNHUB_API_KEY;
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userThatIsLoggedIn, setUserThatIsLoggedIn] = useState("User23");
  const [newsData, setNewsData] = useState([]); //variable to store newsData

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

  //API Call for sending news article info
  const getNewsData = async () => {
    await fetch(`https://finnhub.io/api/v1/news?category=general&token=${finnhubApiKey}`)
            .then(Response => Response.json())
            .then(data => setNewsData(data));
  }
  
  useEffect(() => {
    getNewsData();
  }, []);

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
                                  newsData = {newsData} 
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

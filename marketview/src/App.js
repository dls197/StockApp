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
  const [loginStatus, setLoginStatus] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [newsData, setNewsData] = useState([]); //variable to store newsData
  const [showWelcomeModal, setShowWelcomeModal] = useState(true)

  //func we will eventually use to log the user out, and pass it into header as a prop
  const logOut = () => {
    alert("You logged out. Log back in to use MarketView!")
    setUsername("")
    setPassword("")
    setLoginStatus("Logged out")
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
                                  username = {username}
                                  password = {password}
                                  setUsername = {setUsername}
                                  setPassword = {setPassword}
                                  loginStatus = {loginStatus}
                                  setLoginStatus = {setLoginStatus}
                                  showWelcomeModal = {showWelcomeModal}
                                  setShowWelcomeModal = {setShowWelcomeModal} 
                                />}
          />
          <Route 
          path = "/news"
          render = {(props) => <News 
                                  {...props} 
                                  logout = {logOut} 
                                  username = {username} 
                                  newsData = {newsData} 
                                />}
          />
          <Route 
          path = "/stocks"
          render = {(props) => <Stocks 
                                  {...props} 
                                  logout = {logOut} 
                                  username = {username} 
                                />}
          />
          <Route 
          path = "/myprofile"
          render = {(props) => <MyProfile 
                                  {...props} 
                                  logout = {logOut} 
                                  username = {username} 
                                />}
          />
          <Route 
          path = "/social"
          render = {(props) => <Social 
                                  {...props} 
                                  logout = {logOut} 
                                  username = {username} 
                                />}
          />
        </Switch>
      </div>
    </Router>
  )
}

export default App

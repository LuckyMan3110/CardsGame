import React, { useState, useEffect } from 'react'
import { Routes, store } from './config';
import { Provider } from 'react-redux';
import setAuthToken from "./utils/setAuthToken.jsx";
import {jwtDecode} from "jwt-decode";
import {getMe} from "./config/action/index.js";
import {logoutUser} from "./config/action/index.js";
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwtDecode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(getMe());

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // window.location.href = "/signin";
  }
}

function App() {
  const [loading, setLoading] = useState(true)
  const preloader = document.getElementById('preloader')

  if (preloader) {
    setTimeout(() => {
      preloader.style.display = 'none'
      setLoading(false)
    }, 1000);
  }

  useEffect(() => {
    setTimeout(() => setLoading(false), 500)
  }, [])
  return (
    !loading && (
      <Provider store={store}>
        <Routes />
      </Provider>
    )
  )
}

export default App;

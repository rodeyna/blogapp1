import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import './App.css'
import Login from './pages/login'
import AddBlog from './pages/addblog'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Nav from './components/navbar'
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );
  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);

  return (
    <Router>
      <Nav isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/addblog" element={isLoggedIn ? <AddBlog /> : <Login setIsLoggedIn={setIsLoggedIn} />} />
      </Routes>
      </Router>
    
  )
}

export default App

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/login';
import Signup from './pages/Signup';
import Addblog from './pages/Addblog';
import Edit from './pages/Edit';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Addblog" element={<Addblog />} />
        <Route path="/Edit/:id" element={<Edit />} />
      </Routes>
    </Router>
  );
}

export default App;
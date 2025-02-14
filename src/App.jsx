import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css'
import Login from './pages/login'
import AddBlog from './pages/addblog'
import Home from './pages/Home'
import Signup from './pages/Signup';
function App() {
  

  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/addblog" element={<AddBlog />} />
        </Routes>
      </Router> 
  )
}

export default App

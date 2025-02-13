import React from 'react'
import '../style/navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <nav className="navbar">
          <h1>Blog</h1>
          <div className="button-container">
    <Link  to='/login'><button className="button button-blue">login</button></Link>
      <button className="button button-green">sing up</button>
    </div>
        </nav>
      );
}

export default Navbar
import React from 'react'
import { useState } from 'react'
import '../style/form.css'
import { Link } from 'react-router-dom'
const Signup = () => {
    const [User, setUser] = useState({
        username: "",
        email: "",
        password: ""
    })
    const handelChange = (e) => {
        let targetName = e.target.name
        let targetValue = e.target.value
        setUser({
            ...User,
            [targetName]: targetValue
        })
      
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("User Data:", User);
    };
    return (
  <div className="form">
    <div className='img'></div>
    <div className='mainlog'>
      <div className='log'>
        <div className="intro">
          <h2 className="form-title">sign up</h2>
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
        <div className="input-container">
        <label className="cleargrey">User Name</label>
          <input
            type="text"
            name='name'
            placeholder="Enter your username"
            value={User.username}
            onChange={handelChange}
          />
        </div>
        <div className="input-container">
        <label className="cleargrey">Password</label>
          <input
            type="password"
            name='password'
            placeholder="Enter password"
            value={User.password}
            onChange={handelChange}
          />
          </div>
          <div className="input-container">
          <label className="cleargrey">E-mail</label>
            <input
              type="text"
              name='email'
              placeholder="Enter email"
              value={User.email}
              onChange={handelChange}
            />
          </div>
          <button className="submit" type="submit">Sign up</button>
          <div class="signup-link">
            <p className="cleargrey">have an account?</p> 
            <Link  to='/login'><p>login</p></Link>
          </div>
        </form>
      </div>
    </div>
  </div>
  );
}
export default Signup
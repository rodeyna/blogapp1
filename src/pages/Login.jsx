import React from 'react'
import { useState } from 'react'
import '../style/form.css'
import { Link } from 'react-router-dom'

const Login = () => {
    const [User, setUser] = useState({
        username: "",
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
                <h2 className="form-title">Login</h2>
                <p className='cleargrey'>Welcome back! Please login to your <br /> account.</p>
              </div>
              <form className="login-form" onSubmit={handleSubmit}>
                <div className="input-container" >
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
                <div className="param">
                  <div className="remember">
                   <input type="checkbox" />
                    <p>Remember Me</p>
                  </div>
                  <div className="forgot">
                    <p>Forgot Password?</p>
                  </div>
                </div>
                <button className="submit" type="submit">Login</button>
                <div class="signup-link">
                  <p className='cleargrey'>No account?</p>
                  <Link  to='/Signup'><p>Sign up</p></Link>
                </div>
              </form>
            </div>
          </div>
        </div>
    );
}

export default Login
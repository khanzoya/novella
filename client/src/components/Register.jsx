import React, { useState } from 'react';
import {useNavigate} from "react-router-dom"
import '../css/Register.css'
import axios from 'axios';

const Register = ({setRolevar}) => {
  const [username, setUsername] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
  const [role, setRole ] = useState('user')

  const navigate = useNavigate()
  
  axios.defaults.withCredentials = true;
  const handleChange = (e) => {
     const { name, value } = e.target;
    if (name === 'username') setUsername(value);
    else if (name === 'email') setEmail(value);
    else if (name === 'password') setPassword(value);
   
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  console.log('Submitting form with username:', username, 'email:', email, 'password:', password, 'role:', role);
  try {
    const res = await axios.post('http://localhost:3001/user/register', { username, email, password, role });
    console.log('Response from server:', res.data);
    setRolevar('user');
    navigate('/home');
  } catch (err) {
    console.error('Error submitting form:', err);
  }
};

  return (
    <div className="register-page">
      <div className="register-container">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" placeholder="Username" onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="Email" onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="Password" onChange={handleChange} />
          </div>
          <button type="submit" className="btn-register">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;

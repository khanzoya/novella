import React , {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import '../css/Login.css'
import axios from 'axios'



const Login = ({setRolevar}) => {
  const [username , setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole ] = useState('admin')
  const navigate = useNavigate()


  axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();
  axios.post('http://localhost:3001/auth/login', { username, password, role })
    .then(res => {
      console.log('Response:', res.data);
      if(res.data.login && res.data.role === 'admin') {
        setRolevar('admin')
        navigate('/dashboard');
      } else if(res.data.login && res.data.role === 'user') {
        setRolevar('user')
        navigate('/home');
      }
    })
    .catch(err => {
      console.error('Error:', err);
    });
};



  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2><br/>
        <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type='text' placeholder='Enter Username'  onChange={(e) => setUsername(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type='password' placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div className="form-group">
         <label htmlFor='role'>Role:</label>
         <select name='role' id='role' onChange={(e) => setRole(e.target.value)}>
          <option value='admin'>Admin</option>
          <option value='user'>User</option>
         </select>
        </div>
        <button  type="submit" className='btn-login'>Login</button>
        {/* <button className='btn-login' onClick={(e) => handleSubmit(e)}>Login</button> */}
        </form>
      </div>
      {/* <img src="images/bookreadin.avif" alt="Book Reading" /> */}
    </div>
  )
}

export default Login

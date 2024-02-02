// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/LoginForm.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Add a class to the body
    document.body.classList.add('login-form-page');

    // Remove the class when the component unmounts
    return () => {
      document.body.classList.remove('login-form-page');
    };
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:5555/users/login', { username, password });
      if (response.data.success) {
        
        // Store the token in local storage
        localStorage.setItem('token', response.data.token);

        navigate('/valentines'); // Redirect to Valentines page
      } else {
        console.log('Login failed:', response.data.message);
      }
    } catch (error) {
      console.error('Error during login:', error.response ? error.response.data : error);
    }

    


  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <div className="login-header">Login</div>
      <div className="input-wrapper">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="login-input"
        />
      </div>
      <div className="input-wrapper">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="login-input"
        />
      </div>
      <button type="submit" className="login-button">Submit</button>
    </form>
  );
};



export default LoginForm;

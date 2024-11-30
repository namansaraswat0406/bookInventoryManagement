import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/SignUp.css';


const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }

    const existingUser = JSON.parse(localStorage.getItem('user'));
    if (existingUser) {
      setError('User already exists. Please log in.');
      return;
    }

    const user = { email, password };
    localStorage.setItem('user', JSON.stringify(user));

    navigate('/login');
  };

  return (
    <div className="form-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/SignIn.css';

const SignIn = () => {
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

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
      // Redirect to profile after successful login
      navigate('/');
      window.location.reload(); 
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="form-container">
      <h2>Sign In</h2>
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
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;

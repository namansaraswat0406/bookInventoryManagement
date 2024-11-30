import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Profile.css';

const Profile = () => {
  const navigate = useNavigate();
  const storedUser = JSON.parse(localStorage.getItem('user'));

  // If there's no user logged in, redirect to login page
  if (!storedUser) {
    navigate('/login');
    window.location.reload(); 
  }

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem('user');  // Clear user data from localStorage
    navigate('/signup');  // Redirect to home after logout
    window.location.reload();  // Refresh the page
  };

  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      <p><strong>Email:</strong> {storedUser.email}</p>
      <button onClick={handleLogout}>Log out</button>
    </div>
  );
};

export default Profile;

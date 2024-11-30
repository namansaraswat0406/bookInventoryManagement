import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';

const Navbar = () => {
  const [user, setUser] = useState(null); // State to hold user info

  // Update the user state whenever localStorage changes
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user')); // Get user from localStorage
    setUser(storedUser); // Set user state with the data from localStorage
  }, []); // Run only once when the component mounts

  return (
    <nav className="navbar">
      <h1>Book Inventory Management</h1>
      <Link to="/">Home</Link>
      {/* Show the Profile link only if the user is logged in */}
      {user ? (
        <Link to="/profile">Profile</Link>
      ) : (
        <>
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Sign In</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;

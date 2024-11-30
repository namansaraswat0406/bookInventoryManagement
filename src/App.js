import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookTable from './components/BookTable';
import BookDetails from './components/BookDetails';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Profile from './components/Profile';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<BookTable />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import './styles/BookTable.css'

const BookTable = () => {
  const [books, setBooks] = useState([]);
  const user = JSON.parse(localStorage.getItem('user')); // Check if the user is logged in

  useEffect(() => {
    // Fetch the books data (you can replace this with a real API call if needed)
    fetch('/book.json')
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error('Error fetching books:', error));
  }, []);

  // Handle delete action
  const handleDelete = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };

  return (
    <div className="container">
      <h2>Books List</h2>
      {books.length === 0 ? (
        <p>Loading books...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>
                    <button
                     style={{
                        // marginLeft: '10px',
                        backgroundColor: 'blue',
                        color: 'white',
                        border: 'none',
                        padding: '5px 5px',
                        cursor: 'pointer',
                        borderRadius: '4px',
                      }}>

                  <Link to={`/book/${book.id}`} style={{textDecoration:'none', color:'white'}}>View Details</Link>
                    </button>
                  
                </td>
                <td>{user && (
                    <button
                      onClick={() => handleDelete(book.id)}
                      style={{
                        // marginLeft: '10px',
                        backgroundColor: '#dc3545',
                        color: 'white',
                        border: 'none',
                        padding: '5px 5px',
                        cursor: 'pointer',
                        borderRadius: '4px',
                      }}
                    >
                      Delete
                    </button>
                  )}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default BookTable;

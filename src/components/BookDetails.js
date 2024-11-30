import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const BookDetails = () => {
  const { id } = useParams();  // Get book ID from the URL
  const [book, setBook] = useState(null);  // State to store book details

  useEffect(() => {
    // Fetch book data from the JSON file in public folder
    fetch('/book.json')
      .then((response) => response.json())
      .then((data) => {
        // Find the book with the matching ID
        const foundBook = data.find((book) => book.id === parseInt(id));
        setBook(foundBook);  // Set the book data to the state
      })
      .catch((error) => {
        console.error("Error fetching book data:", error);
      });
  }, [id]);  // Re-run the effect when the book ID changes

  if (!book) {
    return <div>Loading...</div>;  // Show loading message if data is not yet loaded
  }

  return (
    <div className="container">
      <h2>Book Details</h2>
      <p><strong>Title:</strong> {book.title}</p>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Published Date:</strong> {book.publishedDate}</p>
      <p><strong>Publisher:</strong> {book.publisher}</p>
      <p><strong>Overview:</strong> {book.overview}</p>
    </div>
  );
};

export default BookDetails;

import React, { useState } from 'react';

const BookForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    email: '',
    age: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form Submitted: ' + JSON.stringify(formData));
  };

  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <h2>Add/Edit Book</h2>
      <label>
        Title:
        <input type="text" name="title" value={formData.title} onChange={handleChange} required />
      </label>
      <label>
        Author:
        <input type="text" name="author" value={formData.author} onChange={handleChange} required />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Age:
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BookForm;

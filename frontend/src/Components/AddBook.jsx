import React, { useState, useEffect } from "react";

import {
  addBooks,
  fetchBook,
  updateBooks,
  deleteBooks,
} from "../Utilis/handleBooks";

import "../Style/AddBook.css";
import { fetchPublishers } from "../Utilis/handlePublishers";

function AddBook({ setBook }) {
  const [Book_id, setBookid] = useState("");
  const [Title, setTitle] = useState("");
  const [Author, setAuthor] = useState("");
  const [Pname, setPname] = useState("");
  const [Price, setPrice] = useState("");
  const [Available, setAvailable] = useState("");

  const [publisher, setPublishers] = useState([]);

  const [isUpdating, setIsUpdating] = useState(false);

  const handleAdd = async (e) => {
    e.preventDefault();
    const newBook = {
      Book_id: Book_id,
      Title: Title,
      Author: Author,
      Pname:Pname,
      Price: Price,
      Available: Available,
    };
    setBook(newBook);
    await addBooks(newBook);
  };
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBook(setBooks);
  }, []);
  // fetchBook(setBooks);

  useEffect(() => {
    fetchPublishers(setPublishers);
  }, []);

  const Update = async (Book_id, Title, Author,Pname, Price, Available) => {
    setBookid(Book_id);
    setTitle(Title);
    setAuthor(Author);
    setPname(Pname);
    setPrice(Price);
    setAvailable(Available);
    setIsUpdating(true);
  };
  const handleUpdate = async (e) => {
    // e.preventDefault();
    const newBook = {
      Book_id: Book_id,
      Title: Title,
      Author: Author,
      Pname:Pname,
      Price: Price,
      Available: Available,
    };
    console.log(Title);
    updateBooks(Book_id, newBook);
    setIsUpdating(false);
  };

  const handleDelete = async (Book_id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this book?"
    );
    if (confirmDelete) {
      try {
        // console.log("HELLO");
        await deleteBooks(Book_id);
        fetchBook(setBooks);
      } catch (error) {
        console.error("Error deleting book: ", +error);
      }
    }
  };

  return (
    <div className="main">
      <div className="addStudent">
        <h2>Add new book</h2>
        {isUpdating ? (
          <form onSubmit={handleUpdate}>
            <table>
              <tr>
                <th>
                  <label htmlFor="BookId">Book_id</label>
                </th>
                <th>
                  <label htmlFor="Title">Title</label>
                </th>
                <th>
                  <label htmlFor="Author">Author</label>
                </th>
                <th>
                  <label htmlFor="Pname">Publisher</label>
                </th>
                <th>
                  <label htmlFor="Price">Price(in Rs)</label>
                </th>
                <th>
                  <label htmlFor="Available">Available</label>
                </th>
              </tr>
              <tr>
                <td>
                  <input
                    type="number"
                    id="BookId"
                    value={Book_id}
                    onChange={(e) => setBookid(e.target.value)}
                    min="0"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    id="Title"
                    value={Title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    id="Author"
                    value={Author}
                    onChange={(e) => setAuthor(e.target.value)}
                  />
                </td>
                <td>
                  <select
                    id="Pname"
                    value={Pname}
                    onChange={(e) => setPname(e.target.value)}
                  >
                    <option value="">Select Publisher</option>
                    {publisher.map((pub, i) => (
                      <option key={i} value={pub.Pname}>
                        {pub.Name}
                      </option>
                    ))}
                  </select>
                </td>
                <td>
                  <input
                    type="number"
                    id="Price"
                    min="0"
                    value={Price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    id="Available"
                    min="0"
                    value={Available}
                    onChange={(e) => setAvailable(e.target.value)}
                  />
                </td>
              </tr>
            </table>
            <input type="submit" value="Update" />
          </form>
        ) : (
          <form onSubmit={handleAdd}>
            <table>
              <tr>
                <th>
                  <label htmlFor="BookId">Book_id</label>
                </th>
                <th>
                  <label htmlFor="Title">Title</label>
                </th>
                <th>
                  <label htmlFor="Author">Author</label>
                </th>
                <th>
                  <label htmlFor="Pname">Publisher</label>
                </th>
                <th>
                  <label htmlFor="Price">Price(in Rs)</label>
                </th>
                <th>
                  <label htmlFor="Available">Available</label>
                </th>
              </tr>
              <tr>
                <td>
                  <input
                    type="number"
                    id="BookId"
                    value={Book_id}
                    onChange={(e) => setBookid(e.target.value)}
                    min="0"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    id="Title"
                    value={Title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    id="Author"
                    value={Author}
                    onChange={(e) => setAuthor(e.target.value)}
                  />
                </td>
                <td>
                  <select
                    id="Pname"
                    value={Pname}
                    onChange={(e) => setPname(e.target.value)}
                  >
                    <option value="">Select Publisher</option>
                    {publisher.map((pub, i) => (
                      <option key={i} value={pub.Pname}>
                        {pub.Pname}
                      </option>
                    ))}
                  </select>
                </td>
                <td>
                  <input
                    type="number"
                    id="Price"
                    min="0"
                    value={Price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    id="Available"
                    min="0"
                    value={Available}
                    onChange={(e) => setAvailable(e.target.value)}
                  />
                </td>
              </tr>
            </table>
            <input type="submit" value="Add" />
          </form>
        )}
      </div>

      <div>
        <h2>Available Books</h2>
        <div className="availableBooks">
          <table>
            <thead>
              <tr>
                <th>Book_id</th>
                <th>Title</th>
                <th>Author</th>
                <th>Price(in Rs)</th>
                <th>Available</th>
                <th className="extra"></th>
                <th className="extra"></th>
              </tr>
            </thead>
            <tbody>
              {books.map((book, i) => (
                <tr key={i}>
                  <td>{book.Book_id}</td>
                  <td>{book.Title}</td>
                  <td>{book.Author}</td>
                  <td>{book.Price}</td>
                  <td>{book.Available}</td>
                  <td className="extra1">
                    <button
                      className="update"
                      onClick={() =>
                        Update(
                          book.Book_id,
                          book.Title,
                          book.Author,
                          book.Pname,
                          book.Price,
                          book.Available
                        )
                      }
                    >
                      Update
                    </button>
                  </td>
                  <td className="extra1">
                    <button
                      className="delete"
                      onClick={() => handleDelete(book.Book_id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AddBook;

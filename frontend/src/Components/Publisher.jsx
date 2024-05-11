import React from "react";
import { useState,useEffect } from "react";
import { addPublishers, deletePublishers, fetchPublishers, updatePublishers } from "../Utilis/handlePublishers";

function Publisher() {
  const [Pname, setPname] = useState("");
  const [Email, setEmail] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [publishers, setPublishers] = useState([]);

  const handleAdd = async (e) => {
    e.preventDefault();
    const Publisher = {
      Pname: Pname,
      Email: Email,
    };
    await addPublishers(Publisher);
  };

  useEffect(() => {
    fetchPublishers(setPublishers);
  }, []);

  const Update = async (Pname, Email) => {
    setPname(Pname);
    setEmail(Email);

    setIsUpdating(true);
  };

  const handleUpdate = async (e) => {
    const updatePublisher = {
      Pname: Pname,
      Email: Email,
    };
    updatePublishers(Pname, updatePublisher);
    setIsUpdating(false);
  };

  const handleDelete = async (Name) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this Publisher?"
    );
    if (confirmDelete) {
      try {
        await deletePublishers(Name);
        fetchPublishers(setPublishers);
      } catch (error) {
        console.error("Error deleting book: ", +error);
      }
    }
  };

  return (
    <div className="main">
      <div className="addStudent">
        <h2>Add details of the Publishers</h2>
        {isUpdating ? (
          <form onSubmit={handleUpdate}>
            <table>
              <tr>
                <th>
                  <label htmlFor="Name">Name</label>
                </th>
                <th>
                  <label htmlFor="Email">Email</label>
                </th>
                {/* <th>
                  <label htmlFor="BookId">Book_id</label>
                </th> */}
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    id="Name"
                    value={Pname}
                    onChange={(e) => setPname(e.target.value)}
                  />
                </td>

                <td>
                  <input
                    type="email"
                    id="email"
                    min="0"
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </td>
                {/* <td>
                  <input
                    type="number"
                    id="BookId"
                    min="0"
                    value={Book_id}
                    onChange={(e) => setBookid(e.target.value)}
                  />
                </td> */}
              </tr>
            </table>
            <input type="submit" value="Update" />
          </form>
        ) : (
          <form onSubmit={handleAdd}>
            <table>
              <tr>
                <th>
                  <label htmlFor="Name">Name</label>
                </th>
                <th>
                  <label htmlFor="Email">Email</label>
                </th>
                {/* <th>
                  <label htmlFor="Bookid">Book_id</label>
                </th> */}
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    id="Name"
                    value={Pname}
                    onChange={(e) => setPname(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="email"
                    id="email"
                    min="0"
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </td>
                
              </tr>
            </table>
            <input type="submit" value="Add" />
          </form>
        )}
      </div>

      <div>
        <h2>Publishers of the books</h2>
      </div>
      <div className="student-list">
        <div className="stu-container">
          <div className="container1">
            <table>
              <thead>
                <tr>
                  <th>Sl No.</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th className="extra"></th>
                  <th className="extra"></th>
                </tr>
              </thead>
              <tbody>
                {publishers.map((pub, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{pub.Pname}</td>
                    <td>{pub.Email}</td>
                    <td className="extra1">
                      <button
                        className="update"
                        onClick={() => Update(pub.Name, pub.Email)}
                      >
                        Update
                      </button>
                    </td>
                    <td className="extra1">
                      <button
                        className="delete"
                        onClick={() => handleDelete(pub.Pname)}
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
    </div>
  );
}

export default Publisher;

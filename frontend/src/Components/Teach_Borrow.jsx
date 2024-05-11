import React, { useState, useEffect } from "react";
import {
  addTeachB,
  deleteTeachers,
  fetchBook,
  fetchTeachers1,
  fetchTeachers2,
  fetchTeachers3,
  fetchTeachers4,
  fetchTeachers5,
  getTeacherId,
  updateTeachers,
} from "../Utilis/handlleTeahB";

function Teach_Borrow() {
  const [TeachId, setTeachId] = useState("");
  const [Dept, setDept] = useState("");
  const [Book_id, setBook] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);

  const [teacherId, setTeacherId] = useState([]);

  const [teacher1, setTeacher1] = useState([]);
  const [teacher2, setTeacher2] = useState([]);
  const [teacher3, setTeacher3] = useState([]);
  const [teacher4, setTeacher4] = useState([]);
  const [teacher5, setTeacher5] = useState([]);
  const [fetchbook, setFetchBook] = useState([]);

  const handleAdd = async (e) => {
    e.preventDefault();
    const newTeacher = {
      TeachId: TeachId,
      Dept: Dept,
      Book_id: Book_id,
    };
    await addTeachB(newTeacher);
  };

  useEffect(() => {
    fetchBook(setFetchBook);
  }, []);

  useEffect(() => {
    fetchTeachers1(setTeacher1);
  }, []);
  useEffect(() => {
    fetchTeachers2(setTeacher2);
  }, []);

  useEffect(() => {
    fetchTeachers3(setTeacher3);
  }, []);

  useEffect(() => {
    fetchTeachers4(setTeacher4);
  }, []);
  useEffect(() => {
    fetchTeachers5(setTeacher5);
  }, []);

  useEffect(() => {
    Dept && getTeacher();
  }, [Dept]);

  const getTeacher = async () => {
    console.log(Dept);
    await getTeacherId(Dept, setTeacherId);
  };

 const [Id, setId] = useState("");

  const Update = async (TeachId, Dept, Book_id) => {
    setId(Book_id);
    setTeachId(TeachId);
    setDept(Dept);
    setBook(Book_id);
    setIsUpdating(true);
  };
  const handleUpdate = async (e) => {
    // e.preventDefault();
    const updateStudent = {
      TeachId: TeachId,
      Dept: Dept,
      Book_id: Book_id,
    };
    updateTeachers(TeachId,Id, updateStudent);
    setIsUpdating(false);
  };

  const handleDelete = async (TeachId, Book_id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );
    if (confirmDelete) {
      try {
        console.log(TeachId);
        await deleteTeachers(TeachId, Book_id);
        fetchTeachers1(setTeacher1);
        fetchTeachers2(setTeacher2);
        fetchTeachers3(setTeacher3);  
        fetchTeachers4(setTeacher4);
        fetchTeachers5(setTeacher5);
      } catch (error) {
        console.error("Error deleting book: ", +error);
      }
    }
  };

  return (
    <div className="main">
      <div className="addStudent">
        <h2>Add details of the borrower's</h2>
        {isUpdating ? (
          <form onSubmit={handleUpdate}>
            <table>
              <tr>
                {/* <th>
                  <label htmlFor="Dept">Departmet</label>
                </th> */}
                <th>
                  <label htmlFor="TeachId" >Teacher Id</label>
                </th>
                <th>
                  <label htmlFor="Email">Book</label>
                </th>
              </tr>
              <tr>
                {/* <td>
                  <select
                    name=""
                    id="Dept"
                    onChange={(e) => {
                      setDept(e.target.value);
                      getTeacher();
                    }}
                    required
                  >
                    <option value="" hidden>
                      Select department
                    </option>
                    <option value="CSE">CSE</option>
                    <option value="ISE">ISE</option>
                    <option value="ECE">ECE</option>
                    <option value="CV">CV</option>
                    <option value="ME">ME</option>
                  </select>
                </td> */}
                <td>
                <select className="noHover"
                    value={TeachId}
                    onChange={(e) => setTeachId(e.target.value)}
                  >
                    <option value="">Select Teacher Id</option>
                    {teacherId.map((teach, i) => (
                      <option key={i} value={teach.TeachId}>
                        {teach.TeachId}
                      </option>
                    ))}
                  </select>
                </td>
                <td>
                  <select
                    value={Book_id}
                    onChange={(e) => setBook(e.target.value)}
                  >
                    <option value="">Select Book</option>
                    {fetchbook.map((book, i) => (
                      <option key={i} value={book.Book_id}>
                        {book.Title}
                      </option>
                    ))}
                  </select>
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
                  <label htmlFor="Dept">Departmet</label>
                </th>
                <th>
                  <label htmlFor="TeachId">Teacher Id</label>
                </th>
                <th>
                  <label htmlFor="Email">Book</label>
                </th>
              </tr>
              <tr>
                <td>
                  <select
                    name=""
                    id="Dept"
                    onChange={(e) => {
                      setDept(e.target.value);
                      getTeacher();
                    }}
                    required
                  >
                    <option value="" hidden>
                      Select department
                    </option>
                    <option value="CSE">CSE</option>
                    <option value="ISE">ISE</option>
                    <option value="ECE">ECE</option>
                    <option value="CV">CV</option>
                    <option value="ME">ME</option>
                    {/* <option value="CV">4</option> */}
                  </select>
                </td>
                <td>
                  <select
                    value={TeachId}
                    onChange={(e) => setTeachId(e.target.value)}
                  >
                    <option value="">Select Teacher Id</option>
                    {teacherId.map((teach, i) => (
                      <option key={i} value={teach.TeachId}>
                        {teach.TeachId}
                      </option>
                    ))}
                  </select>
                </td>
                <td>
                  <select
                    value={Book_id}
                    onChange={(e) => setBook(e.target.value)}
                  >
                    <option value="">Select Book</option>
                    {fetchbook.map((book, i) => (
                      <option key={i} value={book.Book_id}>
                        {book.Title}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
            </table>
            <input type="submit" value="Add" />
          </form>
        )}
      </div>
      <div>
        <h2>Teachers list</h2>
      </div>
      <div className="student-list">
        <div className="stu-container">
          <div className="container1">
            <h3>CSE</h3>
            <table>
              <thead>
                <tr>
                  <th>Sl No.</th>
                  <th>Teacher Id</th>
                  <th>Book</th>
                  <th className="extra"></th>
                  <th className="extra"></th>
                </tr>
              </thead>
              <tbody>
                {teacher1.map((teacher, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{teacher.TeachId}</td>
                    <td>{teacher.Title}</td>
                    <td className="extra1">
                    <button
                        className="update"
                        onClick={() =>
                          Update(teacher.TeachId, teacher.Dept, teacher.Book_id)
                        }
                      >
                        Update
                      </button>
                    </td>
                    <td className="extra1">
                      <button
                        className="delete"
                        onClick={() => handleDelete(teacher.TeachId, Book_id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="container2">
            <h3>ISE</h3>
            <table>
              <thead>
                <tr>
                  <th>Sl No.</th>
                  <th>Teacher Id</th>
                  <th>Book</th>
                  <th className="extra"></th>
                  <th className="extra"></th>
                </tr>
              </thead>
              <tbody>
                {teacher2.map((teacher, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{teacher.TeachId}</td>
                    <td>{teacher.Title}</td>
                    <td className="extra1">
                    <button
                        className="update"
                        onClick={() =>
                          Update(teacher.TeachId, teacher.Dept, teacher.Book_id)
                        }
                      >
                        Update
                      </button>
                    </td>
                    <td className="extra1">
                      <button
                        className="delete"
                        onClick={() =>
                          handleDelete(teacher.TeachId, teacher.Book_id)
                        }
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="container3">
            <h3>ECE</h3>
            <table>
              <thead>
                <tr>
                  <th>Sl No.</th>
                  <th>Teacher Id</th>
                  <th>Book</th>
                  <th className="extra"></th>
                  <th className="extra"></th>
                </tr>
              </thead>
              <tbody>
                {teacher3.map((teacher, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{teacher.TeachId}</td>
                    <td>{teacher.Title}</td>
                    <td className="extra1">
                      <button
                        className="update"
                        onClick={() =>
                          Update(teacher.TeachId, teacher.Dept, teacher.Book_id)
                        }
                      >
                        Update
                      </button>
                    </td>
                    <td className="extra1">
                      <button
                        className="delete"
                        onClick={() =>
                          handleDelete(teacher.TeachId, teacher.Book_id)
                        }
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="container4">
            <h3>ME</h3>
            <table>
              <thead>
                <tr>
                  <th>Sl No.</th>
                  <th>Teacher Id</th>
                  <th>Book</th>
                  <th className="extra"></th>
                  <th className="extra"></th>
                </tr>
              </thead>
              <tbody>
                {teacher4.map((teacher, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{teacher.TeachId}</td>
                    <td>{teacher.Title}</td>
                    <td className="extra1">
                      <button
                        className="update"
                        onClick={() =>
                          Update(teacher.TeachId, teacher.Dept, teacher.Book_id)
                        }
                      >
                        Update
                      </button>
                    </td>
                    <td className="extra1">
                      <button
                        className="delete"
                        onClick={() =>
                          handleDelete(teacher.TeachId, teacher.Book_id)
                        }
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="container4">
            <h3>CV</h3>
            <table>
              <thead>
                <tr>
                  <th>Sl No.</th>
                  <th>Teacher Id</th>
                  <th>Book</th>
                  <th className="extra"></th>
                  <th className="extra"></th>
                </tr>
              </thead>
              <tbody>
                {teacher5.map((teacher, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{teacher.TeachId}</td>
                    <td>{teacher.Title}</td>
                    <td className="extra1">
                      <button
                        className="update"
                        onClick={() =>
                          Update(teacher.TeachId, teacher.Dept, teacher.Book_id)
                        }
                      >
                        Update
                      </button>
                    </td>
                    <td className="extra1">
                      <button
                        className="delete"
                        onClick={() =>
                          handleDelete(teacher.TeachId, teacher.Book_id)
                        }
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

export default Teach_Borrow;

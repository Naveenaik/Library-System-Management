import React, { useState, useEffect } from "react";

import {
  fetchStudents1,
  fetchStudents2,
  fetchStudents3,
  fetchStudents4,
  addStudents,
  updateStudents,
  deleteStudents,
} from "../Utilis/handleStudent";

// import "../Style/AllBooks.css";

import "../Style/Students.css";

function Students() {
  const [USN, setUsn] = useState("");
  const [Name, setName] = useState("");
  const [Year, setYear] = useState("");
  const [Dept,setDept] = useState("");
  const [Email, setEmail] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);

  const [students1, setStudents1] = useState([]);
  const [students2, setStudents2] = useState([]);
  const [students3, setStudents3] = useState([]);
  const [students4, setStudents4] = useState([]);

  const handleAdd = async (e) => {
    e.preventDefault();
    const newStudent = {
      USN: USN,
      Name: Name,
      Year: Year,
      Dept: Dept,
      Email: Email,
    };
    await addStudents(newStudent);
  };

  useEffect(() => {
    fetchStudents1(setStudents1);
  }, []);
  useEffect(() => {
    fetchStudents2(setStudents2);
  }, []);

  useEffect(() => {
    fetchStudents3(setStudents3);
  }, []);

  useEffect(() => {
    fetchStudents4(setStudents4);
  }, []);

  const Update = async (USN, Name, Year,Dept,Email) => {
    setUsn(USN);
    setName(Name);
    setYear(Year);
    setDept(Dept);
    setEmail(Email);
    setIsUpdating(true);
  };
  const handleUpdate = async (e) => {
    // e.preventDefault();
    const updateStudent = {
      USN: USN,
      Name: Name,
      Year: Year,
      Dept:Dept,
      Email: Email
    };
    updateStudents(USN, updateStudent);
    setIsUpdating(false);
  };

  const handleDelete = async (USN) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );
    if (confirmDelete) {
      try {
        console.log(USN);
        await deleteStudents(USN);
        fetchStudents1(setStudents1);
        fetchStudents2(setStudents2);
        fetchStudents3(setStudents3);
        fetchStudents4(setStudents4);
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
                <th>
                  <label htmlFor="USN">USN</label>
                </th>
                <th>
                  <label htmlFor="Name">Name</label>
                </th>
                <th>
                  <label htmlFor="Year">Year</label>
                </th>
                <th>
                  <label htmlFor="Dept">Departmet</label>
                </th>
                <th>
                  <label htmlFor="Email">Email</label>
                </th>
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    id="USN"
                    value={USN}
                    onChange={(e) => setUsn(e.target.value)}
                    required
                  />
                </td>
                <td>
                  <input
                    type="text"
                    id="Name"
                    value={Name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </td>
                <td>
                  <select
                    name=""
                    id="Year"
                    onChange={(e) => setYear(e.target.value)}
                    required
                  >
                    <option value="" hidden>Choose a year</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </td>
                <td>
                  <select
                    name=""
                    id="Dept"
                    onChange={(e) => setDept(e.target.value)}
                    required
                  >
                    <option value="" hidden>Select department</option>
                    <option value="CSE">CSE</option>
                    <option value="ISE">ISE</option>
                    <option value="ECE">ECE</option>
                    <option value="CV">CV</option>
                    <option value="ME">ME</option>
                    {/* <option value="CV">4</option> */}
                  </select>
                </td>
                <td>
                  <input
                    type="email"
                    id="Email"
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
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
                  <label htmlFor="USN">USN</label>
                </th>
                <th>
                  <label htmlFor="Name">Name</label>
                </th>
                <th>
                  <label htmlFor="Year">Year</label>
                </th>
                <th>
                  <label htmlFor="Dept">Department</label>
                </th>
                <th>
                  <label htmlFor="Email">Email</label>
                </th>
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    id="USN"
                    value={USN}
                    onChange={(e) => setUsn(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    id="Name"
                    value={Name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </td>
                <td>
                  <select
                    name=""
                    id="Year"
                    onChange={(e) => setYear(e.target.value)}
                  >
                    <option value="" hidden>Choose a year</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </td>
                <td>
                  <select
                    name=""
                    id="Dept"
                    onChange={(e) => setDept(e.target.value)}
                    required
                  >
                    <option value="" hidden>Select department</option>
                    <option value="CSE">CSE</option>
                    <option value="ISE">ISE</option>
                    <option value="ECE">ECE</option>
                    <option value="CV">CV</option>
                    <option value="ME">ME</option>
                    {/* <option value="CV">4</option> */}
                  </select>
                </td>
                <td>
                  <input
                    type="email"
                    id="email"
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
        <h2>Students list</h2>
      </div>
      <div className="student-list">
        <div className="stu-container">
          <div className="container1">
            <h3>First year</h3>
            <table>
              <thead>
                <tr>
                  <th>Sl No.</th>
                  <th>USN</th>
                  <th>Name</th>
                  <th>Dept</th>
                  <th className="extra"></th>
                  <th className="extra"></th>
                </tr>
              </thead>
              <tbody>
                {students1.map((student, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{student.USN}</td>
                    <td>{student.Name}</td>
                    <td>{student.Dept}</td>
                    <td className="extra1">
                      <button
                        className="update"
                        onClick={() =>
                          Update(
                            student.USN,
                            student.Name,
                            student.Year,
                            student.Dept,
                            student.Email
                          )
                        }
                      >
                        Update
                      </button>
                    </td>
                    <td className="extra1">
                      <button
                        className="delete"
                        onClick={() =>
                          handleDelete(student.USN)
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
          <div className="container2">
            <h3>Second year</h3>
            <table>
              <thead>
                <tr>
                  <th>Sl No.</th>
                  <th>USN</th>
                  <th>Name</th>
                  <th>Dept</th>
                  <th className="extra"></th>
                  <th className="extra"></th>
                </tr>
              </thead>
              <tbody>
                {students2.map((student, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{student.USN}</td>
                    <td>{student.Name}</td>
                    <td>{student.Dept}</td>
                    <td className="extra1">
                      <button
                        className="update"
                        onClick={() =>
                          Update(
                            student.USN,
                            student.Name,
                            student.Year,
                            student.Dept,
                            student.Email
                          )
                        }
                      >
                        Update
                      </button>
                    </td>
                    <td className="extra1">
                      <button
                        className="delete"
                        onClick={() =>
                          handleDelete(student.USN)
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
            <h3>Third year</h3>
            <table>
              <thead>
                <tr>
                  <th>Sl No.</th>
                  <th>USN</th>
                  <th>Name</th>
                  <th>Book</th>
                  <th className="extra"></th>
                  <th className="extra"></th>
                </tr>
              </thead>
              <tbody>
                {students3.map((student, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{student.USN}</td>
                    <td>{student.Name}</td>
                    <td>{student.Title}</td>
                    <td className="extra1">
                      <button
                        className="update"
                        onClick={() =>
                          Update(
                            student.USN,
                            student.Name,
                            student.Year,
                            student.Dept,
                            student.Email
                          )
                        }
                      >
                        Update
                      </button>
                    </td>
                    <td className="extra1">
                      <button
                        className="delete"
                        onClick={() =>
                          handleDelete(student.USN)
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
            <h3>Fourth year</h3>
            <table>
              <thead>
                <tr>
                  <th>Sl No.</th>
                  <th>USN</th>
                  <th>Name</th>
                  <th>Book</th>
                  <th className="extra"></th>
                  <th className="extra"></th>
                </tr>
              </thead>
              <tbody>
                {students4.map((student, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{student.USN}</td>
                    <td>{student.Name}</td>
                    <td>{student.Title}</td>
                    <td className="extra1">
                      <button
                        className="update"
                        onClick={() =>
                          Update(
                            student.USN,
                            student.Name,
                            student.Year,
                            student.Dept,
                            student.Email
                          )
                        }
                      >
                        Update
                      </button>
                    </td>
                    <td className="extra1">
                      <button
                        className="delete"
                        onClick={() => handleDelete(student.USN)}
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

export default Students;

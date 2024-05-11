import React, { useEffect, useState } from "react";
import { addStuB, deleteStudents, fetchBook, fetchStudents1, fetchStudents2, fetchStudents3, fetchStudents4, getStudentUsn, updateStudents } from "../Utilis/handleStuB";

function Stu_Borrowers() {
  const [USN, setUsn] = useState("");
  const [Year, setYear] = useState("");
  const [Dept, setDept] = useState("");
  const [Book_id,setBook] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);

  const [studentUsn, setStudentUsn] = useState([]);

  const [students1, setStudents1] = useState([]);
  const [students2, setStudents2] = useState([]);
  const [students3, setStudents3] = useState([]);
  const [students4, setStudents4] = useState([]);
  const [fetchbook, setFetchBook] = useState([]);

  const handleAdd = async (e) => {
    e.preventDefault();
    const newStudent = {
      USN: USN,
      Year: Year,
      Dept: Dept,
      Book_id: Book_id,
    };
    await addStuB(newStudent);
  };

  useEffect(() => {
    fetchBook(setFetchBook);
  }, []);
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

  useEffect(()=>{
     getStudent();
  },[Dept])

  const getStudent=async() =>{
    console.log(Year);
    console.log(Dept);
    await getStudentUsn(Year,Dept,setStudentUsn)
  }

  const Update = async (USN,Dept,Year,Book_id) => {
    setUsn(USN);
    // console.log(USN)
    setDept(Dept);
    setYear(Year);
    setBook(Book_id);
    setIsUpdating(true);
  };
  const handleUpdate = async (e) => {
    // e.preventDefault();
    const updateStudent = {
      USN: USN,
      Dept: Dept,
      Year: Year,
      Book_id: Book_id
    };
    updateStudents(USN,Book_id, updateStudent);
    setIsUpdating(false);
  };

  const handleDelete = async (USN,Book_id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );
    if (confirmDelete) {
      try {
        // console.log(USN);
        await deleteStudents(USN,Book_id);
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
                {/* <th>
                  <label htmlFor="Year">Year</label>
                </th>
                <th>
                  <label htmlFor="Dept">Departmet</label>
                </th> */}
                <th>
                  <label htmlFor="USN">USN</label>
                </th>
                <th>
                  <label htmlFor="Email">Book</label>
                </th>
              </tr>
              <tr>
                {/* <td>
                  <select
                    name=""
                    id="Year"
                    onChange={(e) => setYear(e.target.value)}
                  >
                    <option value="" hidden>
                      Choose a year
                    </option>
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
                    onChange={(e) => {
                        setDept(e.target.value);
                        getStudent();
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
                value={USN}
                onChange={(e) => setUsn(e.target.value)}
                >
                    <option value="">Select USN</option>
                    {studentUsn.map((stu, i) => (
                      <option key={i} value={stu.USN}>
                        {stu.USN}
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
                  <label htmlFor="Year">Year</label>
                </th>
                <th>
                  <label htmlFor="Dept">Departmet</label>
                </th>
                <th>
                  <label htmlFor="USN">USN</label>
                </th>
                <th>
                  <label htmlFor="Email">Book</label>
                </th>
              </tr>
              <tr>
                <td>
                  <select
                    name=""
                    id="Year"
                    onChange={(e) => {
                        setYear(e.target.value);

                    }}
                  >
                    <option value="" hidden>
                      Choose a year
                    </option>
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
                    onChange={(e) => {
                        setDept(e.target.value);
                        getStudent();
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
                value={USN}
                onChange={(e) => setUsn(e.target.value)}
                >
                    <option value="">Select USN</option>
                    {studentUsn.map((stu, i) => (
                      <option key={i} value={stu.USN}>
                        {stu.USN}
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
                  <th>Dept</th>
                  <th>Book</th>
                  <th className="extra"></th>
                  <th className="extra"></th>
                </tr>
              </thead>
              <tbody>
                {students1.map((student, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{student.USN}</td>
                    <td>{student.Dept}</td>
                    <td>{student.Title}</td>
                    <td className="extra1">
                      <button
                        className="update"
                        onClick={() =>
                          Update(
                            student.USN,
                            student.Dept,
                            student.Year,
                            student.Book_id
                          )
                        }
                      >
                        Update
                      </button>
                    </td>
                    <td className="extra1">
                      <button
                        className="delete"
                        onClick={() => handleDelete(student.USN,student.Book_id)}
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
                  <th>Dept</th>
                  <th>Book</th>
                  <th className="extra"></th>
                  <th className="extra"></th>
                </tr>
              </thead>
              <tbody>
                {students2.map((student, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{student.USN}</td>
                    <td>{student.Dept}</td>
                    <td>{student.Title}</td>
                    <td className="extra1">
                      <button
                        className="update"
                        onClick={() =>
                          Update(
                            student.USN,
                            student.Dept,
                            student.Year,
                            student.Book_id
                          )
                        }
                      >
                        Update
                      </button>
                    </td>
                    <td className="extra1">
                      <button
                        className="delete"
                        onClick={() => handleDelete(student.USN,student.Book_id)}
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
                  <th>Dept</th>
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
                    <td>{student.Dept}</td>
                    <td>{student.Title}</td>
                    <td className="extra1">
                      <button
                        className="update"
                        onClick={() =>
                          Update(
                            student.USN,
                            student.Dept,
                            student.Year,
                            student.Book_id
                          )
                        }
                      >
                        Update
                      </button>
                    </td>
                    <td className="extra1">
                      <button
                        className="delete"
                        onClick={() => handleDelete(student.USN,student.Book_id)}
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
                  <th>Dept</th>
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
                    <td>{student.Dept}</td>
                    <td>{student.Title}</td>
                    <td className="extra1">
                      <button
                        className="update"
                        onClick={() =>
                          Update(
                            student.USN,
                            student.Dept,
                            student.Year,
                            student.Book_id
                          )
                        }
                      >
                        Update
                      </button>
                    </td>
                    <td className="extra1">
                      <button
                        className="delete"
                        onClick={() => handleDelete(student.USN,student.Book_id)}
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

export default Stu_Borrowers;

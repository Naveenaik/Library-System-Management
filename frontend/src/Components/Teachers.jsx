import React, { useState, useEffect } from "react";

import { addTeachers, deleteTeachers, fetchTeachers1 ,fetchTeachers2,fetchTeachers3,fetchTeachers4,fetchTeachers5,updateTeachers} from "../Utilis/handleTeachers";

function Teachers() {
  const [TeachId, setTeachId] = useState("");
  const [Name, setName] = useState("");
  const [Dept, setDept] = useState("");
  const [Email, setEmail] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);

  const [teacher1, setTeacher1] = useState([]);
  const [teacher2, setTeacher2] = useState([]);
  const [teacher3, setTeacher3] = useState([]);
  const [teacher4, setTeacher4] = useState([]);
  const [teacher5, setTeacher5] = useState([]);

  const handleAdd = async (e) => {
    e.preventDefault();
    const newTeacher = {
      TeachId: TeachId,
      Name: Name,
      Dept: Dept,
      Email: Email,
    };
    await addTeachers(newTeacher);
  };


  useEffect(()=>{
    fetchTeachers1(setTeacher1);
  },[]);
  useEffect(()=>{
    fetchTeachers2(setTeacher2);
  },[]);
  useEffect(()=>{
    fetchTeachers3(setTeacher3);
  },[]);
  useEffect(()=>{
    fetchTeachers4(setTeacher4);
  },[]);
  useEffect(()=>{
    fetchTeachers5(setTeacher5);
  },[]);

 const Update = async(TeachId,Name,Department,Email,)=>{
    setTeachId(TeachId);
    setName(Name);
    setDept(Department);
    setEmail(Email);
    setIsUpdating(true);
  }
  const handleUpdate = async (e) => {
    
    const updateTeacher = {
      TeachId:TeachId,
      Name:Name,
      Dept:Dept,
      Email:Email,
    };

   updateTeachers(TeachId,updateTeacher);
   setIsUpdating(false);
  }

  const handleDelete = async (TeachId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );
    if (confirmDelete) {
      try {
        await deleteTeachers(TeachId);
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
                  <label htmlFor="TeachId">TeacherId</label>
                </th>
                <th>
                  <label htmlFor="Name">Name</label>
                </th>
                <th>
                  <label htmlFor="Department">Department</label>
                </th>
                <th>
                  <label htmlFor="Email">Email</label>
                </th>
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    id="TeachId"
                    value={TeachId}
                    onChange={(e) => setTeachId(e.target.value)}
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
                    // min="0"
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
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
                  <label htmlFor="TeachId">TeachId</label>
                </th>
                <th>
                  <label htmlFor="Name">Name</label>
                </th>
                <th>
                  <label htmlFor="Department">Department</label>
                </th>
                <th>
                  <label htmlFor="Email">Email</label>
                </th>

              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    id="TeachId"
                    value={TeachId}
                    onChange={(e) => setTeachId(e.target.value)}
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
                    id="Dept"
                    onChange={(e) => setDept(e.target.value)}
                  >
                    <option value=""  hidden>Select department</option>
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
                    // min="0"
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
                  <th>TeachId</th>
                  <th>Name</th>
                  <th className="extra"></th>
                  <th className="extra"></th>
                </tr>
              </thead>
              <tbody>
                {teacher1.map((teach, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{teach.TeachId}</td>
                    <td>{teach.Name}</td>
                    <td className="extra1">
                      <button
                        className="update"
                        onClick={() =>
                          Update(
                            teach.TeachId,
                            teach.Name,
                            teach.Department,
                            teach.Email,
                          )
                        }
                      >
                        Update
                      </button>
                    </td>
                    <td className="extra1">
                      <button
                        className="delete"
                        onClick={() => handleDelete(teach.TeachId,teach.Book_id)}
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
                  <th>TeachId</th>
                  <th>Name</th>
                  <th className="extra"></th>
                  <th className="extra"></th>
                </tr>
              </thead>
              <tbody>
                {teacher2.map((teach, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{teach.TeachId}</td>
                    <td>{teach.Name}</td>
                    <td className="extra1">
                      <button
                        className="update"
                        onClick={() =>
                          Update(
                            teach.TeachId,
                            teach.Name,
                            teach.Department,
                            teach.Email,
                          )
                        }
                      >
                        Update
                      </button>
                    </td>
                    <td className="extra1">
                      <button
                        className="delete"
                        onClick={() => handleDelete(teach.TeachId,teach.Book_id)}
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
                  <th>TeachId</th>
                  <th>Name</th>
                  <th className="extra"></th>
                  <th className="extra"></th>
                </tr>
              </thead>
              <tbody>
                {teacher3.map((teach, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{teach.TeachId}</td>
                    <td>{teach.Name}</td>
                    <td className="extra1">
                      <button
                        className="update"
                        onClick={() =>
                          Update(
                            teach.TeachId,
                            teach.Name,
                            teach.Department,
                            teach.Email,
                          )
                        }
                      >
                        Update
                      </button>
                    </td>
                    <td className="extra1">
                      <button
                        className="delete"
                        onClick={() => handleDelete(teach.TeachId,teach.Book_id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="container1">
            <h3>ME</h3>
            <table>
              <thead>
                <tr>
                  <th>Sl No.</th>
                  <th>TeachId</th>
                  <th>Name</th>
                  <th className="extra"></th>
                  <th className="extra"></th>
                </tr>
              </thead>
              <tbody>
                {teacher4.map((teach, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{teach.TeachId}</td>
                    <td>{teach.Name}</td>
                    <td className="extra1">
                      <button
                        className="update"
                        onClick={() =>
                          Update(
                            teach.TeachId,
                            teach.Name,
                            teach.Department,
                            teach.Email,
                          )
                        }
                      >
                        Update
                      </button>
                    </td>
                    <td className="extra1">
                      <button
                        className="delete"
                        onClick={() => handleDelete(teach.TeachId,teach.Book_id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="container1">
            <h3>CV</h3>
            <table>
              <thead>
                <tr>
                  <th>Sl No.</th>
                  <th>TeachId</th>
                  <th>Name</th>
                  <th className="extra"></th>
                  <th className="extra"></th>
                </tr>
              </thead>
              <tbody>
                {teacher5.map((teach, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{teach.TeachId}</td>
                    <td>{teach.Name}</td>
                    <td className="extra1">
                      <button
                        className="update"
                        onClick={() =>
                          Update(
                            teach.TeachId,
                            teach.Name,
                            teach.Department,
                            teach.Email,
                          )
                        }
                      >
                        Update
                      </button>
                    </td>
                    <td className="extra1">
                      <button
                        className="delete"
                        onClick={() => handleDelete(teach.TeachId,teach.Book_id)}
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

export default Teachers;

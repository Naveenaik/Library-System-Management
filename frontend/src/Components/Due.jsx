import React, { useState, useEffect } from "react";
import {
  fetchStudents1,
  fetchStudents2,
  fetchStudents3,
  fetchStudents4,
} from "../Utilis/handleDue";
import { deleteStudents } from "../Utilis/handleStudent";

function Due() {
  const [students1, setStudents1] = useState([]);
  const [students2, setStudents2] = useState([]);
  const [students3, setStudents3] = useState([]);
  const [students4, setStudents4] = useState([]);

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

  const handleDelete = async (USN, Book_id) => {
    const confirmDelete = window.confirm(
      "Are you sure this student has paid penalty?"
    );
    if (confirmDelete) {
      try {
        console.log(USN, Book_id);
        await deleteStudents(USN, Book_id);
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
      <h2>Over Due student details</h2>
      <div className="stu-container">
        <div className="container1">
          <h3>First year</h3>
          <table>
            <thead>
              <tr>
                <th>Sl No.</th>
                <th>USN</th>
                <th>Name</th>
                <th>Book</th>
                <th>Date_out</th>
                <th>Fine(Rs)</th>
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
                  <td>{student.Title}</td>
                  <td>{student.Date_out}</td>
                  <td style={{ color: "red" }}>
                    {(student.days_borrowed - 15) * 5}
                  </td>
                  <td className="extra1">
                    <button
                      className="delete"
                      onClick={() => handleDelete(student.USN, student.Book_id)}
                    >
                      Paid
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
                <th>Book</th>
                <th>Date_out</th>
                <th>Penalty(Rs)</th>
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
                  <td>{student.Title}</td>
                  <td>{student.Date_out}</td>
                  <td style={{ color: "red" }}>
                    {(student.days_borrowed - 15) * 5}
                  </td>
                  <td className="extra1">
                    <button
                      className="delete"
                      onClick={() => handleDelete(student.USN, student.Book_id)}
                    >
                      Paid
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
                <th>Date_out</th>
                <th>Penalty(Rs)</th>
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
                  <td>{student.Date_out}</td>
                  <td style={{ color: "red" }}>
                    {(student.days_borrowed - 15) * 5}
                  </td>
                  <td className="extra1">
                    <button
                      className="delete"
                      onClick={() => handleDelete(student.USN, student.Book_id)}
                    >
                      Paid
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
                <th>Date_out</th>
                <th>Penalty(Rs)</th>
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
                  <td>{student.Date_out}</td>
                  <td style={{ color: "red" }}>
                    {(student.days_borrowed - 15) * 5}
                  </td>

                  <td className="extra1">
                    <button
                      className="delete"
                      onClick={() => handleDelete(student.USN)}
                    >
                      Paid
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

export default Due;

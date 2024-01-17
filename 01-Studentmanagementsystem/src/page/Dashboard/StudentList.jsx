import React from "react";

function StudentList({ students, handleEdit, handleDelete }) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: null,
  });
  return (
    <div className="contain-table">
      <table className="striped-table" id="myTable">
        <thead>
          <tr>
            <th>Roll No</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Fees / Years (₹)</th>
            <th>AdmissionDate</th>
            <th>Education Qualifaction</th>
            <th colSpan={2} className="text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {students.length > 0 ? (
            students.map((student, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.email}</td>
                <td>{formatter.format(student.fees)}</td>
                <td>{student.AdmissionDate} </td>
                <td>{student.educationqual}</td>
                <td className="text-right">
                  <button
                    onClick={() => handleEdit(student._id)}
                    className="button muted-button"
                    style={{
                      backgroundColor: "#c79a32",
                      color: "white",
                      borderRadius: "40px",
                    }}
                  >
                    Edit
                  </button>
                </td>
                <td className="text-left">
                  <button
                    onClick={() => handleDelete(student._id)}
                    className="button muted-button"
                    style={{
                      background: "#e33960",
                      color: "white",
                      borderRadius: "40px",
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}>No students ! Add Students to continue</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;

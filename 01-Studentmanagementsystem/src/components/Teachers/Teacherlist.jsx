import React from "react";
import { useSelector } from "react-redux";

function ListingTeacherDetails({ teachers, handleEdit, handleDelete }) {
  
const data = useSelector(state => state.data)
// console.log(data)
  return (
    <div className="contain-table">
      <table className="striped-table">
        <thead>
          <tr>
            <th>Teachers ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Courses</th>
            <th>JoiningDate</th>
            <th></th>
            <th colSpan={2} className="text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
        
          {teachers.length > 0 ? (     //todo add loading and error message by useSelector state;
            teachers.map((teacher, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{teacher.firstName}</td>
                <td>{teacher.lastName}</td>
                <td>{teacher.email}</td>
                <td>{teacher.courses}</td>
                <td>{teacher.JoiningDate} </td>
                <td className="text-right">
                  <button
                    onClick={() => handleEdit(teacher._id)}
                    className="button muted-button"
                    style={{ backgroundColor: "#2257ab", color: "white",borderRadius:"40px" }}
                  >
                    Edit
                  </button>
                </td>
                <td className="text-left">
                  <button
                    onClick={() => handleDelete(teacher._id)}
                    className="button muted-button"
                    style={{ background: "#eb0c0c", color: "white" ,borderRadius:"40px"}}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td  colSpan={7}>No teachers data available ! please add to continue!</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ListingTeacherDetails;

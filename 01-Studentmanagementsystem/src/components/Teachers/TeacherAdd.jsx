import React, { useEffect, useState, } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { TeacherDetails } from "../../components/Teachers/TRedux/TeacherSlices";

function AddingTeachersDetails({ teachers, setteachers, setIsAdding }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [courses, setcourses] = useState("");
  const [JoiningDate, setDate] = useState("");

const dispatch = useDispatch();
const handleAdd =(e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !courses || !JoiningDate) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }

   const newTeacher = {
    firstName,
    lastName,
    email,
    courses,
    JoiningDate,
  };

   dispatch(TeacherDetails(newTeacher))

    // setteachers(teachers);
    setIsAdding(false);

    Swal.fire({
      icon: "success",
      title: "Added!",
      text: `${firstName} ${lastName}'s data has been Added.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };
  
  return (
    <div className="small-container">
      <form onSubmit={handleAdd}>
        <h1 className="font-serif text-4xl text-orange-600">Add Teacher</h1>
        <label htmlFor="TeacherFirstName">First Name</label>
        <input
          id="firstName"
          type="text"
          name="TeacherFirstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label htmlFor="TeacherLastName">Last Name</label>
        <input
          id="lastName"
          type="text"
          name="TeacherLastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <label htmlFor="TeacherEmail">Email</label>
        <input
          id="TeacherEmail"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
       <label htmlFor="courses" className="form-label" >Courses</label>
        <select name="courses" id="courses"   onChange={(e)=>setcourses(e.target.value.toUpperCase())}  defaultValue={courses} required>
          <option value="">Select a Courses</option>
          <option value="Bsc - Food Technology">Bsc- Food Technology</option>
          <option value="BCA">BCA</option>
          <option value="Bsc - Agriculture">Bsc - Agriculture</option>
          <option value="Bsc - Home Science">Bsc - Home Science</option>
          <option value="Bsc - Microbiology">Bsc - Microbiology</option> 
          <option value="B.Tech - Electronic">B.Tech - Electronic</option> 
          <option value="B.Tech - Civil">B.Tech - Civil</option> 
          <option value="B.Tech - Infromation Technology">B.Tech - Infromation Technology</option> 
          <option value="B.B.A">B.B.A</option> 
          <option value="Hotel Management">Hotel Management</option>
        </select>
        <input
          id="extra"
          type="text"
          name="courses"
          placeholder="Add More courses"
          value= { courses }
          onChange={(e)=>setcourses(e.target.value.toUpperCase())}
         required
          />
        <label htmlFor="TeacherDate">Joining Date</label>
        <input
          id="TeacherDate"
          type="date"
          name="JoiningDate"
          value={JoiningDate}
          onChange={(e) => setDate(e.target.value)}
        />
        <div style={{ marginTop: "30px" }}>
          <input type="submit" value="Add" />
          <input
            style={{ marginLeft: "12px" }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsAdding(false)}
          />
        </div>
      </form>
    </div>
  );
}

export default AddingTeachersDetails;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import {EditTeacherDetails} from '../../components/Teachers/TRedux/TeacherSlices'

function TeacherEdit({ teachers, selectedTeacher, setteachers, setIsEditing }) {

   const dispatch = useDispatch() 

  const _id = selectedTeacher._id;
  const [firstName, setFirstName] = useState(selectedTeacher.firstName);
  const [lastName, setLastName] = useState(selectedTeacher.lastName);
  const [email, setEmail] = useState(selectedTeacher.email);
  const [courses, setcourses] = useState(selectedTeacher.courses);
  const [JoiningDate, setDate] = useState(selectedTeacher.JoiningDate);

  const handleUpdate = async(e) => {
    e.preventDefault();//preventing the default submitation !Not neccassry 
    
    if (!firstName || !lastName || !email || !courses || !JoiningDate) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }

    const Teacher = {
      _id,
      firstName,
      lastName,
      email,
      courses,
      JoiningDate,
    };
    dispatch(EditTeacherDetails(Teacher))//Dispatching to TeacherSlices.js for updation
      
       for (let i = 0; i < teachers.length; i++) {
      if (teachers[i]._id === _id) {
        teachers.splice(i, 1, Teacher);
        break;
      }
    }

    setteachers(teachers);
    setIsEditing(false);

    Swal.fire({
      icon: "success",
      title: "Updated!",
      text: `${Teacher.firstName} ${Teacher.lastName}'s data has been updated.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };


  //TODO remove the form Tag's further for better optimizations;
  return (
    <div className="small-container">
      <form onSubmit={handleUpdate}>
        <h1 className="text-4xl font-serif text-orange-600">Edit Teacher!</h1>
        <label htmlFor="TeacherFirstName">First Name</label>
        <input
          id="TeacherFirstName"
          type="text"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label htmlFor="TeacherLastName">Last Name</label>
        <input
          id="TeacherLastName"
          type="text"
          name="lastName"
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
       <label htmlFor="courses" className="form-label" >Subjects </label>
        <select name="courses" id="courses"  onChange={(e)=>setcourses(e.target.value.toUpperCase())} defaultValue={courses} >
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
          id="editextra"
          type="text"
          name="courses"
          value={courses}
          onChange={(e) => setcourses(e.target.value.toUpperCase())}
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
          <input type="submit" value="Update" />
          <input
            style={{ marginLeft: "12px" }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsEditing(false)}
          />
        </div>
      </form>
    </div>
  );
}

export default TeacherEdit;

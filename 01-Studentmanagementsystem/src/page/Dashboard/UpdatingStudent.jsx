import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import {EditStudent} from './SRedux/StudentSlices'

function UpdatingStudentDetails({ students, selectedStudent, setstudents, setIsEditing }) {

const dispatch = useDispatch()
  const _id = selectedStudent._id;

  const [firstName, setFirstName] = useState(selectedStudent.firstName);
  const [lastName, setLastName] = useState(selectedStudent.lastName);
  const [email, setEmail] = useState(selectedStudent.email);
  const [fees, setfees] = useState(selectedStudent.fees);
  const [AdmissionDate, setDate] = useState(selectedStudent.AdmissionDate);
  const [educationqual, setEducationQual] = useState(
    selectedStudent.educationqual
  );
  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !fees || !AdmissionDate) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }
    if (!educationqual) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Include Education Qualifaction..",
        showConfirmButton: true,
      });
    }
    const Student = {
      _id,
      firstName,
      lastName,
      email,
      fees,
      AdmissionDate,
      educationqual,
    };
dispatch(EditStudent(Student))
 

    for (let i = 0; i < students.length; i++) {
      if (students[i]._id === _id) {
        students.splice(i, 1, Student);
        break;
      }
    }

    setstudents(students);
    setIsEditing(false);

    Swal.fire({
      icon: "success",
      title: "Updated!",
      text: `${Student.firstName} ${Student.lastName}'s data has been updated.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleUpdate}>
        <h1 className="text-4xl font-serif text-orange-600">Edit Student!</h1>
        <label htmlFor="firstName">First Name</label>
        <input
          id="teacherfirstname"
          type="text"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          type="text"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="salary">Fees/Years (₹)</label>
        <input
          id="fees"
          type="number"
          name="fees"
          value={fees}
          onChange={(e) => setfees(e.target.value)}
        />
        <label htmlFor="courses" className="form-label">
          Education Qualifaction
        </label>
        <select
          name="courses"
          id="courses"
          onChange={(e) => setEducationQual(e.target.value.toUpperCase())}
          defaultValue={educationqual}
        >
          <option value="">Select Your Education</option>
          <option value="Bsc - Food Technology">Bsc- Food Technology</option>
          <option value="BCA">BCA</option>
          <option value="Bsc - Agriculture">Bsc - Agriculture</option>
          <option value="Bsc - Home Science">Bsc - Home Science</option>
          <option value="Bsc - Microbiology">Bsc - Microbiology</option>
          <option value="B.Tech - Electronic">B.Tech - Electronic</option>
          <option value="B.Tech - Civil">B.Tech - Civil</option>
          <option value="B.Tech - Infromation Technology">
            B.Tech - Infromation Technology
          </option>
          <option value="B.B.A">B.B.A</option>
          <option value="Hotel Management">Hotel Management</option>
        </select>
        <input
          id="extra"
          type="text"
          name="courses"
          placeholder="Any Others ? Mentioned Her!"
          value={educationqual}
          onChange={(e) => setEducationQual(e.target.value.toUpperCase())}
        />
        <label htmlFor="date">Admission Date </label>
        <input
          id="date"
          type="date"
          name="date"
          value={AdmissionDate}
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

export default UpdatingStudentDetails;

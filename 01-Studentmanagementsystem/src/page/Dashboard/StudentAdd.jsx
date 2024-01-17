import  { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import {StudentDetails} from './SRedux/StudentSlices'

function AddingStudents({ students, setstudents, setIsAdding }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [fees, setfees] = useState("");
  const [AdmissionDate, setDate] = useState("");
  const [educationqual, setEducationQual] = useState("");
  const textInput = useRef(null);

  useEffect(() => {
    textInput.current.focus();
  }, []);

  const dispatch = useDispatch()


  const handleAdd = async (e) => {
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
        text: "Include Education Qualifaction.",
        showConfirmButton: true,
      });
    }
   // const id = students.length + 1
    const newStudent = {
      firstName,
      lastName,
      email,
      fees,
      AdmissionDate,
      educationqual,
    };
    dispatch(StudentDetails(newStudent))

    //setstudents(students);
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
        <h1 className="font-serif text-4xl text-orange-600">Add Student</h1>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          type="text"
          ref={textInput}
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
        <label htmlFor="salary">Fees /Year (₹)</label>
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
          placeholder="Any Others ? Mentioned Here!"
          value={educationqual}
          onChange={(e) => setEducationQual(e.target.value.toUpperCase())}
        />
        <label htmlFor="date">AdmissionDate</label>
        <input
          id="date"
          type="date"
          name="AdmissionDate"
          value={AdmissionDate}
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

export default AddingStudents;

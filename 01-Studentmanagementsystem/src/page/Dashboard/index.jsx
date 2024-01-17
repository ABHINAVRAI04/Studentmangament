import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Header from "./Header";
import StudentList from "./StudentList";
import AddingStudents from "./StudentAdd";
import UpdatingStudentDetails from "./UpdatingStudent";
import { useNavigate } from "react-router-dom";

 function StudentDashboard() {
  const [students, setstudents] = useState("");
  const auth = localStorage.getItem("user")
  const navigator = useNavigate()
  useEffect(()=>{
    if(!auth){navigator("/login")}
  })
   useEffect(()=>{
    const fetchData = async () => {
      let response = await fetch('http://localhost:8080/find')
       response = await response.json();
      setstudents(response);
  };
  fetchData()
   })
  
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = (_id) => {
    const [Student] = students.filter((Student) => Student._id === _id);
    setSelectedStudent(Student);
    setIsEditing(true);
  };
    
  const handleDelete = (_id)=>{
    Swal.fire({
          icon: "warning",
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          showCancelButton:true,
          confirmButtonText: "Yes, delete it!",
          cancelButtonText:"No ,please cancel!"
        }).then((result)=>{
          if(result.value){
            result = fetch(`http://localhost:8080/student/${_id}`,{
              method:"DELETE",
            }).then((result)=>{
              result = result.json()
              const [Student] = students.filter((Student) => Student._id === _id);
                     Swal.fire({
                icon: "success",
                title: "Deleted!",
                text: `${Student.firstName} ${Student.lastName}'s data has been deleted.`,
                showConfirmButton: false,
                timer: 1500,
              });
              setstudents(students.filter((Student) => Student._id !== _id));
            })
          }
        })
  }

  return (
    <div className="container">
      {/* List */}
      {!isAdding && !isEditing && (
        <>
          <Header setIsAdding={setIsAdding} />
          <StudentList
            students={students}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </>
      )}
      {/* Add */}
      {isAdding && (
        <AddingStudents
          students={students}
          setstudents={setstudents}
          setIsAdding={setIsAdding}
        />
      )}
      {/* Edit */}
      {isEditing && (
        <UpdatingStudentDetails
          students={students}
          selectedStudent={selectedStudent}
          setstudents={setstudents}
          setIsEditing={setIsEditing}
        />
      )}
    </div>
  );
}

export default StudentDashboard;
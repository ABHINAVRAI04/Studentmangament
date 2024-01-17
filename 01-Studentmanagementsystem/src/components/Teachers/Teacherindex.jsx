import React, { useState } from "react";
import Swal from "sweetalert2";
import Header from "./Teachersheader";
import ListingTeacherDetails from "./Teacherlist";
import AddingTeachersDetails from "./TeacherAdd";
import TeacherEdit from "./Teacheredit";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


function TecherIndexPage() {
  const [teachers, setteachers] = useState("");

  const auth = localStorage.getItem("user")
  const navigator = useNavigate()
  useEffect(()=>{
    if(!auth){navigator("/login")}
  })

  //finding the Teacher Data from Databases to display on Teacherlist.jsx
  //useEffect to ensure to continous fetching the data 
  useEffect(()=>{
    const fetchteacherdata = async () => {
      let response = await fetch('http://localhost:8080/teachersfind')
       response = await response.json();
      setteachers(response);
  };
  fetchteacherdata()
   })
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
 
//handling update in Teacher Add Details or Editing the Teacher's Details
  const handleEdit = (_id) => {
    const [Teacher] = teachers.filter((Teacher) => Teacher._id === _id);
    setSelectedTeacher(Teacher);
    setIsEditing(true);
  };

  //Deleting the Teacher Data from the Database;
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
            result = fetch(`http://localhost:8080/teacher/${_id}`,{
              method:"DELETE",
            }).then((result)=>{
              result = result.json()
              const [teacher] = teachers.filter((teacher) => teacher._id === _id);
                     Swal.fire({
                icon: "success",
                title: "Deleted!",
                text: `${teacher.firstName} ${teacher.lastName}'s data has been deleted.`,
                showConfirmButton: false,
                timer: 1500,
              });
              setteachers(teachers.filter((teacher) => teacher._id !== _id));
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
          <ListingTeacherDetails
            teachers={teachers}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </>
      )}
      {/* Add */}
      {isAdding && (
        <AddingTeachersDetails
          teachers={teachers}
          setteachers={setteachers}
          setIsAdding={setIsAdding}
        />
      )}
      {/* Edit */}
      {isEditing && (
        <TeacherEdit
          teachers={teachers}
          selectedTeacher={selectedTeacher}
          setteachers={setteachers}
          setIsEditing={setIsEditing}
        />
      )}
    </div>
  );
}

export default TecherIndexPage;
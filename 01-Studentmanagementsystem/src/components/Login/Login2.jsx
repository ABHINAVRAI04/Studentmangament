
import React, {  useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function Login2(){
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const navigator = useNavigate()
  const auth = localStorage.getItem("user") 

  useEffect(()=>{
    if(auth){navigator("/")}  //todo at outlet //checking now to ensure if someone as doesnot come out if he/she as authorization
  })
  const handlelogin = async(e) => {
    e.preventDefault();

    if (!username || !password) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }
    const user = {
      username,
      password,
    };

    //Fetching the data and sending data in form of Json to backend
    let Logindata = await fetch("http://localhost:8080/login",{
      method:"post",
      body:JSON.stringify(user),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    Logindata = await Logindata.json()
    
        if(Logindata.username){
          Swal.fire({
            icon: "success",
            title: `successfully login <h1>${username}</h1>`,
            text: ` Welcome ${username} to studyAdda.com.`,
            showConfirmButton: false,
            timer: 2500,
          }).then(function(){
            localStorage.setItem("user",JSON.stringify(Logindata.username))
            navigator("/")
          })
        }
        else {
          return Swal.fire({
            icon: "error",
            title: "Error!",
            text: "Incorrect details",
            showConfirmButton: true,
          });
        }

    
  };
  function showpswd() {
    const password = document.querySelector("#pswrd")
    if (password.type == "password") {
      password.type = "text";
    
    } else {
      password.type = "password";
    }
  }
  return (
    <div className="small-container" >
      <form onSubmit={handlelogin} >
        <h1 className="font-serif text-4xl text-center">Welcome to <span className="text-orange-700 font-serif text-4xl">Login</span></h1>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">password</label>
        <input
          id="pswrd"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="shwpswrd">
       <input type="checkbox" onClick={showpswd} id="shwpswrd"/>Show password
        </label>
        <div style={{ marginTop: "30px" }}>
          <input type="submit" value="Login"/>
        </div>
      </form>
    </div>
      
    
  );
}

export default Login2;

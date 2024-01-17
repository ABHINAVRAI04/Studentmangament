
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Signup2() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [gender,setGender] = useState("others");
  const [country,setCountry] = useState("")

    const genderoption = (e)=>{
      setGender(e.target.value) //Getting the value of Gender from form
    }
   
  const navigator = useNavigate();
  const auth = localStorage.getItem("user") 

  useEffect(()=>{
    if(auth){navigator("/")} //todo at outlet 
  })

  const handlesignup = async (e) => {
    e.preventDefault();
    //Checking the strength of username and password during signuup
    let Strongpassword = /(?=.*[A-Z].*[A-Z]).{8}/g;
    let strongusername = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g; 

    if (!username||!password) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }
   
    if(!country){
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Include Country details!",
        showConfirmButton: true,
      });
    }
 
    else if(!password.match(Strongpassword)){
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Password should include 2 Uppercase & of 8 Characters  ",
        showConfirmButton: true,
      });
    }
    else if(!username.match(strongusername)){
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Username should be Minimum of eight characters and at least one letter and one number",
        showConfirmButton: true,
      });
    }
    
    const newuser = {
      username,
      password,
      gender,         //Data of newUsers 
      country
    };

    //Fetching the Data 
    let data = await fetch("http://localhost:8080/signup", {
      method: "post",
      body: JSON.stringify(newuser),
      headers: {
        "Content-Type": "application/json",
      },
    });
    data = await data.json();

    //if everything goes right its popup to a Welcome message
    Swal.fire({
      icon: "success",
      title: `successfully created Your account <strong>${username}</strong>`,
      text: ` Login  to continue.`,
      showConfirmButton: false,
      timer: 2500,
    }).then(function () {
      navigator("/login");
    });
  
  };
  
  //to show password highly useFull for me
  function shw2password() {
    const password = document.querySelector("#signupassword");
    if (password.type == "password") {
      password.type = "text";
    } else {
      password.type = "password";
    }
  }
  return (
    <>
      <div className="small-container">
        <form onSubmit={handlesignup}> 
          <h1 className="font-serif text-4xl text-center">
            Welcome to{" "}
            <span className="text-orange-700 font-serif text-4xl">
              studyAdda.com
            </span>
          </h1>
          <label htmlFor="username">Username</label>
          <input
            id="singupusername"
            type="text"
            name="singupusername"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password">password</label>
          <input
            id="signupassword"
            type="password"
            name="signupassword"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="shw12paswrd" >
       <input type="checkbox" onClick={shw2password} id="shw12paswrd"/>  Show password
        </label>
          {/* starts */}
          <label style={{display:"inline-block"}} >Gender : </label>
  <input className="form-check-input ml-4" type="radio" name="gender" id="inlineRadio1" value="male"
  checked={gender==="male"} onChange={genderoption} 
  /> 
  <label className="form-check-label ml-2 " htmlFor="inlineRadio1" style={{display:"inline-block"}} >Male</label>
  <input className="form-check-input ml-3" type="radio" name="gender" id="inlineRadio2" value="female" 
    checked={gender==="female"}onChange={genderoption}
  />
  <label className="form-check-label ml-2 " htmlFor="inlineRadio2" style={{display:"inline-block"}}>Female</label>
  <input className="form-check-input ml-3" type="radio" name="gender" id="inlineRadio3" value="others" 
    checked={gender==="others"} onChange={genderoption}
  />
  <label className="form-check-label ml-2 " htmlFor="inlineRadio3" style={{display:"inline-block"}}>Others</label>       
          {/* ends */}
          {/* country */}
          <select name="country" className="form-control" id="country" onChange={(e)=>setCountry(e.target.value)}>
            <option value= ""  label="Select a Country">Select a Country</option>
            <option value="AF" label="Afghanistan">Afghanistan</option>
            <option value="AM" label="Armenia">Armenia</option>
            <option value="AZ" label="Azerbaijan">Azerbaijan</option>
            <option value="BH" label="Bahrain">Bahrain</option>
            <option value="BD" label="Bangladesh">Bangladesh</option>
            <option value="BT" label="Bhutan">Bhutan</option>
            <option value="BN" label="Brunei">Brunei</option>
            <option value="KH" label="Cambodia">Cambodia</option>
            <option value="CN" label="China">China</option>
            <option value="GE" label="Georgia">Georgia</option>
            <option value="HK" label="Hong Kong SAR China">Hong Kong SAR China</option>
            <option value="IN" label="India">India</option>
            <option value="ID" label="Indonesia">Indonesia</option>
            <option value="IR" label="Iran">Iran</option>
            <option value="IQ" label="Iraq">Iraq</option>
            <option value="IL" label="Israel">Israel</option>
            <option value="JP" label="Japan">Japan</option>
            <option value="JO" label="Jordan">Jordan</option>
            <option value="KZ" label="Kazakhstan">Kazakhstan</option>
            <option value="KW" label="Kuwait">Kuwait</option>
            <option value="KG" label="Kyrgyzstan">Kyrgyzstan</option>
            <option value="LA" label="Laos">Laos</option>
            <option value="LB" label="Lebanon">Lebanon</option>
            <option value="MO" label="Macau SAR China">Macau SAR China</option>
            <option value="MY" label="Malaysia">Malaysia</option>
            <option value="MV" label="Maldives">Maldives</option>
            <option value="MN" label="Mongolia">Mongolia</option>
            <option value="MM" label="Myanmar [Burma]">Myanmar [Burma]</option>
            <option value="NP" label="Nepal">Nepal</option>
            <option value="NT" label="Neutral Zone">Neutral Zone</option>
            <option value="KP" label="North Korea">North Korea</option>
            <option value="OM" label="Oman">Oman</option>
            <option value="PK" label="Pakistan">Pakistan</option>
            <option value="PS" label="Palestinian Territories">Palestinian Territories</option>
            <option value="YD" label="People's Democratic Republic of Yemen">People's Democratic Republic of Yemen</option>
            <option value="PH" label="Philippines">Philippines</option>
            <option value="QA" label="Qatar">Qatar</option>
            <option value="SA" label="Saudi Arabia">Saudi Arabia</option>
            <option value="SG" label="Singapore">Singapore</option>
            <option value="KR" label="South Korea">South Korea</option>
            <option value="LK" label="Sri Lanka">Sri Lanka</option>
            <option value="SY" label="Syria">Syria</option>
            <option value="TW" label="Taiwan">Taiwan</option>
            <option value="TJ" label="Tajikistan">Tajikistan</option>
            <option value="TH" label="Thailand">Thailand</option>
            <option value="TL" label="Timor-Leste">Timor-Leste</option>
            <option value="TR" label="Turkey">Turkey</option>
            <option value="TM" label="Turkmenistan">Turkmenistan</option>
            <option value="AE" label="United Arab Emirates">United Arab Emirates</option>
            <option value="UZ" label="Uzbekistan">Uzbekistan</option>
            <option value="VN" label="Vietnam">Vietnam</option>
            <option value="YE" label="Yemen">Yemen</option>
        </select>

          {/* {countryoptionends} */}
          <div style={{ marginTop: "30px" }}>
            <input type="submit" value="Signup" />
          </div>
        </form>
        <p className="text-lg text-blue-900">Already have an account ? </p>
      <Link
        to="/login"
        className="text-white bg-blue-800 hover:bg-blue-700  focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
      >
        Log in
      </Link>
      </div>
     
    </>
  );
}

export default Signup2;

const express = require("express");
const cors = require("cors");
const userCollection = require("./moongoose");
const studentData = require("./studentdb")  
const teacherData = require("./teacherdb") 
const app = express();
const port = 8080    

app.use(cors());
app.use(express.json());

//Api for newUser 
app.post("/signup", async (req, resp) => {
  const signupdata = new userCollection(req.body)    //requesting the body contain all the infromation 
  const result = await signupdata.save();         //Data save to mongoDb using moongoose to ensure that data types;
  resp.send(result);                           //response for frontend which data further utilized by using fetch method
});

//for login
app.post("/login", async (req, resp) => {
  if (req.body.username && req.body.password) {
    const user = await userCollection.findOne(req.body)

    if (user) {
         resp.send(user)
        }
     else {
      resp.send({ result: "No user found ! please signup to continue" });
    }
  } else {
    resp.send("Please add a valid details");
  }
});


//adding the student and Teacher POST data
app.post("/student",async(req,resp)=>{
    const studentdata = new studentData(req.body)
            const addresult = await studentdata.save();
        resp.send(addresult)
})
app.post("/teacher",async(req,resp)=>{
  const teacherdata = new teacherData(req.body)
          const teacherAdded = await teacherdata.save();
      resp.send(teacherAdded)
      
})

//Updating studentdata and Teachers PUT data for Updation
app.put("/studentdata/:id",async(req,resp)=>{
    const updatestudentdata = req.params.id;
        const data = await studentData.updateOne(
            {_id:updatestudentdata},
            {$set:req.body}
            )
    resp.send(data)
})
//Query for Teacher's Data Updatation
app.put("/teachersdata/:id",async(req,resp)=>{
  const updateteacherdata = req.params.id;
  const six_pack_body = req.body
      const teachrdata = await teacherData.updateOne(
          {_id:updateteacherdata},
          {$set:six_pack_body}
          )
  resp.send(teachrdata)
})

//Getting the data from Databases

app.get("/find",async(req,resp)=>{
    const data = await studentData.find()
        resp.send(data)
})
app.get("/teachersfind",async(req,resp)=>{
  const teahcerData = await teacherData.find()
      resp.send(teahcerData)
     
})

//Deleting Student Data 
app.delete("/student/:id",async(req,resp)=>{
    const deleteresult = await studentData.deleteOne({_id:req.params.id})
        resp.send(deleteresult)
})

//Deleting Teacher Data 
app.delete("/teacher/:id",async(req,resp)=>{
  const id = req.params.id;
  const deltresult = await teacherData.deleteOne({_id:id})
      resp.send(deltresult)
})


//Our running port 
app.listen(port, () => {
  console.log(`Server is listenally at ${port}`);
});

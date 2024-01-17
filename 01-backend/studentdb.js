const studentdb  = require('mongoose');

let connection = async()=>{
await studentdb.createConnection("mongodb://localhost:27017/studyadda");
}
connection();
const schema =  new studentdb.Schema({
    firstName:String,
    lastName:String,
    email:String,
    AdmissionDate:String,
    fees:String,
    educationqual:String

});
const studentData =  studentdb.model("addstudent",schema);
module.exports = studentData;

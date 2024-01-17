const teacherdb  = require('mongoose');

let connection = async()=>{
await teacherdb.createConnection("mongodb://localhost:27017/teacherdb");
}
connection();
const schema =  new teacherdb.Schema({
    firstName:String,
    lastName:String,
    email:String,
    courses:String,
    JoiningDate:String,

});
const teacherData =  teacherdb.model("teacherdata",schema);
module.exports = teacherData;

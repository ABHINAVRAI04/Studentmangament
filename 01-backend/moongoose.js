const mongoose = require('mongoose');

let connect = async()=>{
await mongoose.connect("mongodb://localhost:27017/infromatativedetails");
}
connect();
const schema =  new mongoose.Schema({
    username:String,
    password:String,
    gender:String,
    country:String
});
const userCollection =  mongoose.model("GetDetails",schema);
module.exports = userCollection;

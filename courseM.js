const mongoose = require("mongoose");
let courseSchema = new mongoose.Schema({
 Course_Name: {
    type: String,
    required:true,

 },
 Course_Code: {
    type: String,
    required:true,

 },
 Course_Level: {
    type: String,
    required:true,

 },
},{timestamps:true});
module.exports = new mongoose.model("Course", courseSchema);

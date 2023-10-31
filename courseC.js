const CourseModel =require("../Models/courseM");
let createCourse = async(req,res)=>{
    try{
        let data =req.body;
        let register = await CourseModel.create(data);
        return res
        .status(201)
        .send({
            status:true, 
            msg:"Course Registered successfully",
            data: register,
        
        })
    }catch (error){
        return res
        .status(500)
        .send({
            status:false, 
            msg:"Registered unsuccessfully",

        });

}
};
module.exports = {createCourse}
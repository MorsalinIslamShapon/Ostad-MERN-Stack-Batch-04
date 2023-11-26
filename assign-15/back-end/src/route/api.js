const express=require('express');
const StudentController=require('../controller/StudentController');
const router=express.Router();





// Task
router.post("/student-registration",StudentController.createStudent);
router.get("/delete-student/:id",StudentController.deleteStudent);
router.post("/update-student/:id",StudentController.updateStudent);
router.get("/list-student",StudentController.listStudent);
router.get("/student-by-id/:id",StudentController.StudentByID);




module.exports=router;
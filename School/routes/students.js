const express = require("express");
const router = express.Router();

const {
  getStudentlist,
  addstudents,
  updatestudents,
  deleteStudentlist,
} = require("../Controller/TeacherControll");

router.get("/list", getStudentlist);
router.post("/add", addstudents);
router.post("/update/:id", updatestudents);
router.delete("/delete_student/:id", deleteStudentlist);
module.exports = router;

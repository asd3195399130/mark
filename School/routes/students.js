const express = require("express");
const router = express.Router();

const { getStudentlist } = require("../Controller/TeacherControll");

router.get("/list", getStudentlist);
router.get("/add", getStudentlist);
module.exports = router;

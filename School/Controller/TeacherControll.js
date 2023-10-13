const express = require("express");
const app = express.Router();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
const {
  getstudents,
  addstudent,
  updatestudent,
  deleteStudent,
} = require("../Database/schools");

const getStudentlist = (req, res, next) => {
  const page = req.query.page || 1;
  const size = req.query.size || 10;
  //获取数据模型
  getstudents({ page, size })
    .then((response) => {
      let result = {
        code: 200,
        msg: "success",
        data: response,
      };
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};
//添加
const addstudents = (req, res, next) => {
  console.log(req.body);
  addstudent(req.body)
    .then((response) => {
      let result = {
        code: 200,
        msg: "success",
        data: response,
      };
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};
// 更新
const updatestudents = (req, res, next) => {
  updatestudent(req.params.id, req.body)
    .then((response) => {
      let result = {
        code: 200,
        msg: "success",
        data: response,
      };
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

const deleteStudentlist = (req, res, next) => {
  deleteStudent(req.params.id, req.body)
    .then((response) => {
      let result = {
        code: 200,
        msg: "success",
        data: response,
      };
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = {
  getStudentlist,
  addstudents,
  updatestudents,
  deleteStudentlist,
};

const express = require("express");
const app = express.Router();
const fs = require("fs");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.get("/index", (req, res, next) => {
  fs.readFile("../demo.txt", "utf-8", (err, result) => {
    if (err) {
      next(err);
    } else {
      res.send(result);
    }
  });
});
app.use((err, req, res, next) => {
  res.status(500).send(err.message);
});
//定义中间件
app.get("/get_data", (req, res, next) => {
  req.name = "张三";
  console.log("继续执行");
  next(); //向下执行
});
app.get("/get_data", (req, res) => {
  res.send(req.name); //返回响应
});
app.get("/datalist", (req, res) => {
  console.log(req.query);
  // res.send(req.query);
});
app.post("/home", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});
app.get("/route/:id/:name", (req, res) => {
  console.log(req.params); // {"id": "123","name": "tom"}
  res.send(req.params);
});
module.exports = app;

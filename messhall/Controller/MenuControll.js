const express = require("express");
const app = express.Router();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
const {
  getmenu,
  addmenu,
  updatemenu,
  deletemenu,
} = require("../Database/foots");

const getmenulist = (req, res, next) => {
  const page = req.query.page || 1;
  const size = req.query.size || 5;
  //获取数据模型
  getmenu({ page, size })
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
const addmenulist = (req, res, next) => {
  addmenu(req.body)
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
const updatemenulist = (req, res, next) => {
  updatemenu(req.params.id, req.body)
    .then((response) => {
      let result = {
        code: 200,
        msg: "success",
        data: response,
      };
      res.send(result);
    })
    .catch((error) => {
      console.log(error);
    });
};
//删除
const deletemenulist = (req, res, next) => {
  deletemenu(req.params.id, req.body)
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
  getmenulist,
  addmenulist,
  updatemenulist,
  deletemenulist,
};

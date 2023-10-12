var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json({
    code: 200,
    msg: "success",
    data: {
      name: "张三",
      age: 20,
    },
  });
});
router.post("/api", function (req, res, next) {});

module.exports = router;

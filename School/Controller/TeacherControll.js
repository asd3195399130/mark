const { getstudents } = require("../Database/schools");

const getStudentlist = (req, res, next) => {
  const page = req.query.page || 1;
  const size = req.query.size || 5;
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

  getadd();
};

module.exports = {
  getStudentlist,
};

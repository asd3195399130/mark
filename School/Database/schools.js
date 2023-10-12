const connection = require("./db");

//查询
const getstudents = (params) => {
  return new Promise((resolve, reject) => {
    //第一个参数：sql语句
    //第二个参数：回调函数（err：查询错误，data：查询结果）
    const limit = (params.page - 1) * params.size;
    connection.query(
      `SELECT * FROM student LIMIT ${limit},${params.size}`,
      (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
      }
    );
  });
};
// //添加
// const insertCar = (param) => {
//   return new Promise((resolve, reject) => {
//     connection.query(
//       "insert into Car(name,color) values(?,?)",
//       [param.name, param.color],
//       (err, data) => {
//         //如果err为null则成功
//         resolve(data);
//       }
//     );
//   });
// };
// //改
// const updateCar = (param) => {
//   return new Promise((resolve, reject) => {
//     connection.query(
//       "update car set username = ? where phone = ?",
//       param,
//       (err, data) => {
//         //如果err为null则成功
//         resolve(data);
//       }
//     );
//   });
// };

//删除
// const deleteCar = (param) => {
//   return new Promise((resolve, reject) => {
//     connection.query("delete from car where id = ?", param, (err, data) => {
//       resolve(data);
//     });
//   });
// };
//导出方法，在需要使用到的模块中导入
module.exports = {
  getstudents,
  //   insertCar,
  //   updateCar,
  //   deleteCar,
};

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
//添加
const addstudent = (params) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `INSERT INTO student(name,sex,age) VALUES(?,?,?)`,
      [params.name, params.sex, params.age],
      (err, data) => {
        resolve(data);
      }
    );
  });
};
//改

const updatestudent = (id, param) => {
  return new Promise((resolve, reject) => {
    // console.log(id);
    connection.query(
      "update student set name = ?,sex= ?,age= ? where id = ?",
      [param.name, param.sex, param.age, id],
      (err, data) => {
        if (err) {
          reject(err);
        }
        //如果err为null则成功
        resolve(data);
      }
    );
  });
};

//删除
const deleteStudent = (id, param) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "delete from student where id = ? ",
      [param.name, param.sex, param.age, id],
      (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
      }
    );
  });
};

//导出方法，在需要使用到的模块中导入
module.exports = {
  getstudents,
  addstudent,
  updatestudent,
  deleteStudent,
};

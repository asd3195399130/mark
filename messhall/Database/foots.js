const connection = require("./db");

//获取数据
const getmenu = (params) => {
  return new Promise((resolve, reject) => {
    //第一个参数：sql语句
    //第二个参数：回调函数（err：查询错误，data：查询结果）
    const limit = (params.page - 1) * params.size;
    connection.query(
      `SELECT * FROM fooder LIMIT ${limit},${params.size} `,
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
const addmenu = (params) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `INSERT INTO fooder(dishname, price, status, number,image_path) VALUES(?,?,?,?,?)`,
      [
        params.dishname,
        params.price,
        params.status,
        params.number,
        params.image_path,
      ],
      (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
      }
    );
  });
};
//改

const updatemenu = (id, param) => {
  return new Promise((resolve, reject) => {
    // console.log(id);
    connection.query(
      `update fooder set dishname= ?  ,price= ?  ,status= ?  , number= ? , image_path= ? where id = ${id}`,
      [
        param.dishname,
        param.price,
        param.status,
        param.number,
        param.image_path,
      ],
      (err, data) => {
        if (err) {
          console.log(err);
          reject(err);
        }
        //如果err为null则成功
        resolve(data);
      }
    );
  });
};

//删除
const deletemenu = (id, param) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `delete from fooder where id = ${id} `,
      param,
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
  getmenu,
  addmenu,
  updatemenu,
  deletemenu,
};

const mysql = require("mysql2");

const { MYSQL_HOST: HOST, MYSQL_USER: USER, MYSQL_PASSWORD: PASSWORD, MYSQL_DB: DB } = process.env;

let pool = mysql.createPool({
  connectionLimit: 5,
  host: HOST,
  user: USER,
  password: PASSWORD,
  database: DB,
  port: 3306,
  charset: "utf8mb4",
});

async function init() {
  return new Promise((acc, rej) => {
    pool.query(
      "CREATE TABLE IF NOT EXISTS user_account (id varchar(36), username varchar(255), password varchar(255)) DEFAULT CHARSET utf8mb4",
      (err) => {
        if (err) return rej(err);
        console.log(`Connected to mysql db at host ${HOST}`);
        acc();
      },
    );
  });
}

module.exports = {
  init,
  pool,
};

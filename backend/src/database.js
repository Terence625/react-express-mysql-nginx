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
  const createClientTable =
    "CREATE TABLE IF NOT EXISTS client_info (client_id int NOT NULL AUTO_INCREMENT, name varchar(255), phone varchar(255), email varchar(255), PRIMARY KEY (client_id))";
  const createAdminTable =
    "CREATE TABLE IF NOT EXISTS user_account (id varchar(36), username varchar(255), password varchar(255))";
  await Promise.all([
    pool.promise().query(createClientTable),
    pool.promise().query(createAdminTable),
  ]);
  console.log(`Connected to mysql db at host ${HOST}`);
}

module.exports = {
  init,
  pool,
};

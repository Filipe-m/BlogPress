const Sequelize = require("sequelize");

const connection = new Sequelize(
  "BlogPress",
  "root",
  process.env.MYSQL_PASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
    logging: false,
  }
);

module.exports = connection;
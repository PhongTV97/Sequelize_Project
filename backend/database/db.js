import Sequelize from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

var database = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  server: process.env.DB_SERVER,
  host: '127.0.0.1',
  dialect: 'mssql',
  port: 1433,
  // disable logging; default: console.log
  logging: false,
});
//check
try {
  await database.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

export default database;

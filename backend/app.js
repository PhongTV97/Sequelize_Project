// // Nodejs module
// // npm init => package.json and package-lock.js

// // get variable from env
import dotenv from 'dotenv';
dotenv.config();
import './models/index.js';
import { syncData } from './utils/index.js';
import database from './database/db.js';
import router from './routes/routes.js';
import cors from 'cors';
// sync data
syncData(database);

//config express
// npm install express --save
// npm install body-parser --save
import express from 'express';
var app = express();

// npm install cors
// import cors from "cors";
app.use(cors());

app.use(express.json({ limit: '50mb', extended: true }));

// npm install body-parser
// import bodyParser from "body-parser";
app.use(express.urlencoded({ limit: '10mb', extended: true }));

app.use('/', router);

var server = app.listen(process.env.API_PORT, () => {
  var port = server.address().port;
  console.log(`Server is running on port ${port}`);
});

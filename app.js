// Nodejs module
// npm init => package.json and package-lock.js

// get variable from env
import dotenv from "dotenv";
dotenv.config();
import database from "./database/db.js";

//config express
// npm install express --save
//npm install body-parser --save
import express from "express";
var app = express();
// npm install cors
import cors from "cors";
app.use(cors);

//$ npm install body-parser
import bodyParser from "body-parser";
app.use(bodyParser.json());

var server = app.listen(process.env.API_PORT, () => {
    var port = server.address().port;
    console.log(`Server is running on port ${port}`);
});




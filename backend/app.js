//modules
const express = require("express");
const router = require('./routes/routes');
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();
const bodyparser = require('body-parser');

// app
const app = express();


//parseAndLoadPlanetsData();


// DB
app.use(bodyparser.json());
app.use(morgan("dev"));
app.use(cors({origin : true, credentials : true}));


// routes

app.use("/",router);


//port
const port = process.env.PORT || 8080;

//listeners
const server = app.listen(port, ()=> console.log(`server is runnnin on port ${port}`));
//modules
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();

// app
const app = express();

// DB
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser : true,
    useUnifiedTopology : true,

}).then(()=>{console.log("DB CONNECTED")}).catch((err) => {console.log(err)})
// middleware
app.use(morgan("dev"));
app.use(cors({origin : true, credentials : true}));


// routes
const testRoutes = require("./routes/test");
app.use("/",testRoutes);



//port
const port = process.env.PORT || 8080;

//listeners
const server = app.listen(port, ()=> console.log(`server is runnnin on port ${port}`));
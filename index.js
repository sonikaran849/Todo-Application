const express = require("express");
const connectDB = require("./db");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
require('dotenv').config();
app.use(cors());
app.use(bodyParser.json());

app.use(express.json());
const PORT = 6464;

connectDB().then(()=>{console.log("DataBase Connected")});

const todoRouter = require("./routes/todo");
app.use("/api", todoRouter);


app.listen(PORT, ()=>{
    console.log("Server is started");
})
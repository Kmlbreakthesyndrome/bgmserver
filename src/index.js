const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const router = require("./routes/routes");

const app = express();

app.use(express.json());
app.use(cors()); 

mongoose.connect(process.env.MongoDBURL)
    .then(() => { console.log("Connected to MongoDB")})
    .catch((err) => { console.log("Error connecting to MongoDB", err) });

app.use('/', router); 

app.listen(8080, ()=> {console.log("Server is running to port 8080"); });


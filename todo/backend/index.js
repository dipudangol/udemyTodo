const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const PORT = 3030;
const connectionOptions = { useUnifiedTopology: true, useNewUrlParser: true };

app.use(express.json());
app.use(cors());

const todoRoutes = require('./routes/toDoRoutes');


const PORTS = process.env.PORT || 3030;
const dbconnect = process.env.MONGO_CLIENT;

mongoose.connect(dbconnect, connectionOptions)
    .then(() => console.log("Databse Connected Successfully!"))
    .catch((err) => console.log(err));

app.use("/todos", todoRoutes);

//static content server
app.use(express.static(path.join(__dirname, "../build")));

app.use("/", (req, res) => {
    res.sendFile(path.basename, join(_dirname, "../build/index.html"));

})


app.listen(PORT, () => {
    console.log("The server is listening to port " + PORT);
})
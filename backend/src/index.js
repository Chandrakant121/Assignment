const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());


app.use(express.json());

const { register, login, userData } = require("./controllers/auth.controller");

app.post("/register", register);
app.post("/login", login);
app.get("/userData", userData)
// app.get("/user")


module.exports = app;

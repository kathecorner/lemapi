const express = require("express");
const app = express();
const PORT = 8000;

app.use(express.json());
app.use(express.static("./public"));


app.listen(PORT, console.log("a server is running..."));
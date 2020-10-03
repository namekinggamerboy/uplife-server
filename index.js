const mongoose = require("mongoose");
const fetch = require("node-fetch");
const express = require("express");
const app = express();
app.locals.domain = "https://namekinggamerboy.github.io/uplife-server"; 
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)

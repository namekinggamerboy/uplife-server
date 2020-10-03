const mongoose = require("mongoose");
const fetch = require("node-fetch");
const express = require("express");
const app = express();
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)

const express = require('express');
const app = express();
const port = 3001;

const fs = require('fs');

app.use(express.json())

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

let rawdata = fs.readFileSync('us_state.json');
let us_state = JSON.parse(rawdata);

app.get('/us_state', (req, res) => {
  res.json(us_state);
});

app.listen(port)
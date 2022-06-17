const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("kokotina");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});



const mongoose = require('mongoose');
const config = require("./json/db_config.json");
const Data = require("./db_model.js");

mongoose.connect(config.mongo_host, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// let topThreeLights = document.getElementById("topThreeLights").value;
// let whiteLight = document.getElementById("whiteLight").value;
// let yellowBottomLight = document.getElementById("yellowBottomLight").value;
// let yellowLine = document.getElementById("yellowLine").value;
// let greenLines = document.getElementById("greenLines").value;

// console.log(topThreeLights, whiteLight, yellowBottomLight, yellowLine, greenLines);
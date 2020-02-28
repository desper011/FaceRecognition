var express = require("express");
var app = express();
const bodyParser = require('body-parser');
var cors = require("cors");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(cors());


app.use("/", require("./Date"))
app.use("/", require("./Employees"))
app.use("/authen",require("./Authentication"))


var server = app.listen(3030, function() {
  console.log("Server is running..");
});

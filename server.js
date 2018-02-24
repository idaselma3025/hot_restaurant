// modules
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// server details
var app = express();
var PORT = 3003;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// server routes
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });

// Server Start
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

// app data
var reservations = [
{
    reservationId: "1",
    name: "Us",
    phoneNumber: "867-5309",
    email: "trabes@gmail.com",
    uniqueId: "trabes"
},
{
    reservationId: "2",
    name: "Them",
    phoneNumber: "867-5309",
    email: "trabes@gmail.com",
    uniqueId: "trabes"
},
{
    reservationId: "3",
    name: "Those",
    phoneNumber: "867-5309",
    email: "trabes@gmail.com",
    uniqueId: "trabes"
},
{
    reservationId: "4",
    name: "They",
    phoneNumber: "867-5309",
    email: "trabes@gmail.com",
    uniqueId: "trabes"
},
{
    reservationId: "5",
    name: "Dufrane",
    phoneNumber: "867-5309",
    email: "trabes@gmail.com",
    uniqueId: "trabes"
},
{
    reservationId: "6",
    name: "Redding",
    phoneNumber: "867-5309",
    email: "trabes@gmail.com",
    uniqueId: "trabes"
}
];

var currentlySeated = [];
var waitList = [];

// Get and Post Functions
// get the first 5 for reservations
app.get("/api/:reservations?", function(req, res) {
    currentlySeated = req.params.reservations;
      for (var i = 0; i < 4; i++) {
            reservations[i].push(currentlySeated);
        }
    return res.json(currentlySeated);
  });
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
app.get("home", function(req, res) {
    res.sendFile(path.join(__dirname, "public/home.html"));
  });
app.get("tables", function(req, res) {
    res.sendFile(path.join(__dirname, "public/tables.html"));
  });
app.get("reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "public/reserve.html"));
  });

// Server Start
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

// app data
// var reservations = [
//     {"reservationId":"1","name":"Us","phoneNumber":"867-5309","email":"trabes@gmail.com","uniqueId":"trabes"},
    
//     {"reservationId":"2","name":"Them","phoneNumber":"867-5309","email":"trabes@gmail.com","uniqueId":"trabes"},
    
//     {"reservationId":"3","name":"Those","phoneNumber":"867-5309","email":"trabes@gmail.com","uniqueId":"trabes"},
    
//     {"reservationId":"4","name":"They","phoneNumber":"867-5309","email":"trabes@gmail.com","uniqueId":"trabes"},
    
//     {"reservationId":"5","name":"Dufrane","phoneNumber":"867-5309","email":"trabes@gmail.com","uniqueId":"trabes"},

//     {"reservationId":"6","name":"dahlen","phoneNumber":"867-5309","email":"trabes@gmail.com","uniqueId":"trabes"},

//     {"reservationId":"7","name":"riley","phoneNumber":"867-5309","email":"trabes@gmail.com","uniqueId":"trabes"}

// ];

var acceptedReservations = [];
var waitList = [];

// Get and Post Functions
// get the first 5 for reservations
app.get("/api/reservations", function(req, res) {
    // currentlySeated = req.params.reservations;
      for (var i = 0; i < 5; i++) {
            acceptedReservations.push(reservations[i]);
        }
    return res.json(acceptedReservations);
    
  });

  // anything over 5 goes on the waitlist...
app.get("/api/reservations", function(req, res) {
      for (var j = 5; j > 4; j++) {
            waitList.push(reservations[j]);
        }
    return res.json(waitList);
    
  });




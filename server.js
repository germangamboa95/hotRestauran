// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Star Wars Characters (DATA)
// =============================================================
var tables = [
  {
    name: "Yoda old",
    phoneNumber: "1800999999",
    email: "yoda@jedi.com",
    id: "yoda1"
  },
  {
    name: "Yoda old",
    phoneNumber: "1800999999",
    email: "yoda@jedi.com",
    id: "yoda1"
  },
  {
    name: "Yoda old",
    phoneNumber: "1800999999",
    email: "yoda@jedi.com",
    id: "yoda1"
  },
  {
    name: "Yoda old",
    phoneNumber: "1800999999",
    email: "yoda@jedi.com",
    id: "yoda1"
  },  
  {
    name: "Yoda old",
    phoneNumber: "1800999999",
    email: "yoda@jedi.com",
    id: "yoda1"
  }
];

var waitList =[
  {
  name: "Kylo Ren",
  phoneNumber: "9999999999",
  email: "kylo@1storder.com",
  id: "kylo"
}
];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});


// Displays a single character, or returns false
app.post("/api/reserve", function(req, res) {
  var table = req.body;

  if (tables.length<5){
    tables.push(table);
    res.send(true);
  }
 
  else if (tables.length>=5){
    waitList.push(table);
    res.send(false);
  }
});

// Create New Characters - takes in JSON input
app.get("/api/tables", function(req, res) {

  tableList= tables.concat(waitList);

  res.send(JSON.stringify(tableList));


});
app.listen(PORT, function(err){
  if (err) throw err
  console.log("server running");
})

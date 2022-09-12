/*********************************************************************************
 *  WEB322 – Assignment1
 *  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.
 *  No part of this assignment has been copied manually or electronically from any other source
 *  (including web sites) or distributed to other students.
 *
 *  Name: Fardeen Panjwani
 *  Student ID: 119588219
 *  Date: 12th Sept, 2022
 *
 *  Online (Cyclic) URL: TODO
 *
 ********************************************************************************/

var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();

// setup a 'route' to listen on the default url path
app.get("/", (req, res) => {
  res.send("Fardeen Panjwani - 119588218");
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT);

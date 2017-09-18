var express = require("express");
var app = express();

var favicon = require('serve-favicon');
var path = require('path');
fs = require('fs')
fs.readFile('/etc/hosts', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));


/* serves main page */
app.get("/", function(req, res) {
   res.sendFile(__dirname + '/public/index.html')
});

app.get("/port-hint", function(req, res) {
  console.log("served port hint");
  res.sendFile(__dirname + "/public/game.port");
})

 app.post("/user/add", function(req, res) {
 /* some server side logic */
 res.send("OK");
 });
/* serves all the static files */
app.get(/^(.+)$/, function(req, res){
    console.log('static file request : ' + req.params[0]);
    res.sendFile( __dirname + req.params[0]);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

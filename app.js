// server.js
// where your node app starts

// init project
var express = require('express');
var api = require('./sites.js')
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (request, response) {
  response.render(__dirname + '/views/index.ejs');
});

// http://expressjs.com/en/starter/basic-routing.html
app.get('/domains', function (request, response) {
  response.render(__dirname + '/views/domains.ejs');
});

app.get('/discord', function(req, res) {
  res.redirect('https://discord.gg/gY7xEAY');
})

app.get('/sitesize', function(req, res) {
  res.send('{"sitecount": ' + api.api("sites", "size") + '}')
})

app.get('/sites', function(request, res) {
  res.send('String(api.api("sites", "names")))
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

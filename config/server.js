var express = require('express');
var app = express();
var consign = require('consign');
app.set('view engine','ejs'); //informa ao express que serpa usado ejs como engrenagem das views
app.set('views','./app/views'); // indica o caminho das viwes
consign().include('app/routes').into(app);

module.exports = app;
var bodyParser = require('body-parser');
var express = require('express');
var morgan = require('morgan');

var path = require('path');

var webpack = require('webpack');

var config = require('./webpack.config.js');

var port = process.env.PORT || 3000;

var app = express();
var compiler = webpack(config);


app.use(bodyParser.urlencoded({
  extended: false
}));





app.use(morgan('combined'));

app.use(require('webpack-dev-middleware')(compiler));

// app.use('/css', express.static(__dirname + '/src/css'));



// Make public a static dir
app.use(express.static("public"));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});





app.listen(port, function () {
  
  console.log(`App running on port ${port}!`);
 
});
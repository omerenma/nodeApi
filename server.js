var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var router = require('./routes/index');
var path = require('path');


// Use bodyParser to collect data from front-end
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Connect to mongodb database
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true })


app.use(express.static(path.join(__dirname+'/index.html')))

// Our routes will start with /api
app.use('/api', router)

// Middlewares for router


// Create server port
var Port = process.env.PORT || 3000;
app.listen(Port, function(){
  console.log('Express server listening on port:' + Port)
})
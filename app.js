var express = require('express');
var app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const routes = require('./app.route');
app.use('/api', routes);

app.listen(process.env.NODE_PORT, function() {
    console.log('App listening on port 3000');
  });
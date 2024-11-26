const express = require("express");
const app = express();
const mustacheExpress = require('mustache-express');
const indexRoutes = require('./routes/index');
const path = require('path');
const bodyParser = require('body-parser');

app.engine('mustache', mustacheExpress(path.join(__dirname, '/views/partials'), '.mustache'));
app.set('view engine', 'mustache');
app.set('views', path.join(__dirname, '/views'));

app.use('/', indexRoutes);

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(3000, () => {
    console.log('server is running');
});

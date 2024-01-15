const express = require('express');

const mainPageController = require('./controllers/homePage')

const app = express();


app.use(express.static('public'));

app.use('/', mainPageController.sendMainPage);

app.listen(3000);
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

mongoose.connect('mongodb+srv://curso:brasil2010@cluster0-sbkpe.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser : true,
});

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.use(require('./routes'));
app.listen(3333);